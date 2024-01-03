import React from "react";
import Header from "../../../components/Header/Header";
import PreorderList from "./PreorderList";
import Searchbar from '../../../components/SearchBar/SearchBar';
import orderApi from "../../../api/orderApi";

const token = localStorage.getItem("token");
const clientId = localStorage.getItem("clientId");

const StaffPreorders = () => {
    const [rows, setRows] = React.useState([]);
    const [originalRows, setOriginalRows] = React.useState([]);

    const headCells = [
        {
          id: 'id',
          disablePadding: true,
          label: 'Mã đơn',
        },
        {
          id: 'createDate',
          disablePadding: true,
          label: 'Thời gian nhận',
        },
        {
          id: 'total',
          disablePadding: true,
          label: 'Tổng tiền',
        },
        {
          id: 'status',
          disablePadding: true,
          label: 'Trạng thái',
        },
    ];

    React.useEffect(() => {
      const fetchOrderList = async () => {
          try {
            const res = await orderApi.getAllPendingOrders({token, clientId});
            
            setRows(res.data);
            setOriginalRows(res.data);
          } catch (error) {
            console.error('Error fetching expired products:', error);
          }
      }
      fetchOrderList()
    }, []);

    const handleSearchBar = async (query) => {
      console.log(query);
      if (originalRows.length > 0) {
          if (query !== ""){
              const searchResult = originalRows.filter((item) => item.id.toLowerCase().includes(query.toLowerCase()));
              setRows(searchResult);
          }
          else{
            setRows(originalRows);
          }
      }
    };

    return (
      <>
        <div className='flex justify-between'>
          <Header heading="Đơn đặt trước"></Header>
          <div className='p-3'>
              <Searchbar
                handleSearch={handleSearchBar}  
                placeholder='Tìm kiếm đơn'
              />
          </div>
        </div>
    
        <div className="gap-x-16">
            <div className='ms-3 col-span-2'>
                <PreorderList headCells={headCells} title="Đơn đặt trước" rows={rows}></PreorderList>
            </div>
        </div>
      </>
    );
}

export default StaffPreorders;