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

const StaffDashboard = () => {
  const [openMonthlyPopup, setOpenMonthlyPopup] = React.useState(false);
  const [openDailyPopup, setOpenDailyPopup] = React.useState(false);
  const [openInventoryPopup, setOpenInventoryPopup] = React.useState(false);
  const [rows, setRows] = React.useState([]);
  const [originalRows, setOriginalRows] = React.useState([]);

  const handleMonthlyConfirm = async () => {
    const createMonthlyIncomeReport = await reportApi.createMonthlyIncomeReport({token, clientId});
    console.log(createMonthlyIncomeReport);
    setOpenMonthlyPopup(false);
  };
  const handleDailyConfirm = async () => {
    const createDailyIncomeReport = await reportApi.createDailyIncomeReport({token, clientId});
    console.log(createDailyIncomeReport);
    setOpenDailyPopup(false);
  };
  const handleInventoryConfirm = async () => {
    const createDailyInventoryReport = await reportApi.createDailyInventoryReport({token, clientId});
    console.log(createDailyInventoryReport);
    setOpenInventoryPopup(false);
  };
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
          const listItems = [
            {
                item_name: "cơm chiên trứng",
                item_id: "659448612bf2b2ccde40c6b2",
                item_quantity: 1,
                item_note: "Nhiều tỏi"
            },
            {
                item_name: "beefstack2",
                item_id: "657d768648a0c356cab63ff6",
                item_quantity: 1,
                item_note: "Thêm nước mắm"
            }
          ];
          const timeReceive = "11:30AM";
          const newOrder = await orderApi.createOrder({token, clientId}, listItems, timeReceive);
          console.log(newOrder);
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
      <Header heading="Dashboard"></Header>
      <div className='p-3'>
          <Searchbar
            handleSearch={handleSearchBar}  
            placeholder='Tìm kiếm đơn'
          />
      </div>
    </div>

    <div className='ms-3 mt-2 mb-2'>
      <CustomButton
        title="Tạo báo cáo hàng ngày"
        variant='primary'
        onAction={()=>{setOpenDailyPopup(true);}}
        className="rounded-lg py-2 px-10 mr-2"
      />
      <CustomButton
        title="Tạo báo cáo hàng tháng"
        variant='primary'
        onAction={()=>{setOpenMonthlyPopup(true);}}
        className="rounded-lg py-2 px-10 mr-2"
      />
      <CustomButton
        title="Tạo báo cáo kho"
        variant='primary'
        onAction={()=>{setOpenInventoryPopup(true);}}
        className="rounded-lg py-2 px-10"
      />
    </div>

    <div className='ms-3'>
      <OrderList headCells={headCells} title="Danh sách đơn" rows={rows}></OrderList>
    </div>

    <PopUp
      title="Xác nhận tạo"
      isOpen={openDailyPopup}
      handleCloseBtnClick={() => {setOpenDailyPopup(false);}}
    >
      {
        <div className='flex flex-col'>
          <h2 className='text-white pb-5'>Xác nhận tạo báo cáo hàng ngày?</h2>
          <div className='flex justify-between gap-2'>
            <CustomButton
              title='Hủy'
              variant='secondary'
              onAction={()=>{setOpenDailyPopup(false);}}
              className="py-1 px-8"
            />
            <CustomButton
              title='Xác nhận'
              onAction={handleDailyConfirm}
              className="py-1 px-4"
            />
          </div>
        </div>
      }
    </PopUp>
    <PopUp
      title="Xác nhận tạo"
      isOpen={openMonthlyPopup}
      handleCloseBtnClick={() => {setOpenMonthlyPopup(false);}}
    >
      {
        <div className='flex flex-col'>
          <h2 className='text-white pb-5'>Xác nhận tạo báo cáo hàng tháng?</h2>
          <div className='flex justify-between gap-2'>
            <CustomButton
              title='Hủy'
              variant='secondary'
              onAction={()=>{setOpenMonthlyPopup(false);}}
              className="py-1 px-8"
            />
            <CustomButton
              title='Xác nhận'
              onAction={handleMonthlyConfirm}
              className="py-1 px-4"
            />
          </div>
        </div>
      }
    </PopUp>
    <PopUp
      title="Xác nhận tạo"
      isOpen={openInventoryPopup}
      handleCloseBtnClick={() => {setOpenInventoryPopup(false);}}
    >
      {
        <div className='flex flex-col'>
          <h2 className='text-white pb-5'>Xác nhận tạo báo cáo hàng tháng?</h2>
          <div className='flex justify-between gap-2'>
            <CustomButton
              title='Hủy'
              variant='secondary'
              onAction={()=>{setOpenInventoryPopup(false);}}
              className="py-1 px-8"
            />
            <CustomButton
              title='Xác nhận'
              onAction={handleInventoryConfirm}
              className="py-1 px-4"
            />
          </div>
        </div>
      }
    </PopUp>
  </>
  );
};

export default StaffDashboard;

