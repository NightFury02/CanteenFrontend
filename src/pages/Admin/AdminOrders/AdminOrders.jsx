import React from 'react';
import Header from '../../../components/Header/Header';
import OrderList from './OrderList';
import CustomButton from '../../../components/CustomButton/CustomButton';
import PopUp from '../../../components/Popup/Popup';
import Searchbar from '../../../components/SearchBar/SearchBar';
import orderApi from "../../../api/orderApi";
import reportApi from '../../../api/reportApi';

const token = localStorage.getItem("token");
const clientId = localStorage.getItem("clientId");

const AdminOrders = () => {
  const [rows, setRows] = React.useState([]);
  const [originalRows, setOriginalRows] = React.useState([]);

  const headCells = [
    {
      id: '_id',
      disablePadding: true,
      label: 'Mã đơn',
    },
    {
      id: 'time_receive',
      disablePadding: true,
      label: 'Thời gian nhận',
    },
    {
      id: 'order_total_price',
      disablePadding: true,
      label: 'Tổng tiền',
    },
    {
      id: 'order_status',
      disablePadding: true,
      label: 'Trạng thái',
    },
  ];

  React.useEffect(() => {
    const fetchOrderList = async () => {
        try {
          const res = await orderApi.getAllOrders({token, clientId});
          setRows(res.data);
          setOriginalRows(res.data);
        } catch (error) {
          console.error('Error fetching orders: ', error);
        }
    }
    fetchOrderList()
  }, []);

  const handleSearchBar = async (query) => {
    console.log(query);
    if (originalRows.length > 0) {
        if (query !== ""){
            const searchResult = originalRows.filter((item) => item._id.toLowerCase().includes(query.toLowerCase()));
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
      <Header heading="Quản lý đơn hàng"></Header>
      <div className='p-3'>
          <Searchbar
            handleSearch={handleSearchBar}  
            placeholder='Tìm kiếm đơn'
          />
      </div>
    </div>

    <div className='ms-3'>
      <OrderList headCells={headCells} title="Danh sách đơn" rows={rows}></OrderList>
    </div>
  </>
  );
};

export default AdminOrders;

