import React from 'react';
import Header from '../../../components/Header/Header';
import OrderList from './OrderList';
import CustomButton from '../../../components/CustomButton/CustomButton';
import PopUp from '../../../components/Popup/Popup';

const UserOrders = () => {
  const [openMonthlyPopup, setOpenMonthlyPopup] = React.useState(false);
  const [openDailyPopup, setOpenDailyPopup] = React.useState(false);
  const handleMonthlyConfirm = () => {
    console.log('create monthly report');
    setOpenMonthlyPopup(false);
  };
  const handleDailyConfirm = () => {
    console.log('create daily report');
    setOpenDailyPopup(false);
  };
  const headCells = [
    {
      id: 'id',
      disablePadding: true,
      label: 'Mã phiếu',
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

  return (
  <>
    <div>
      <Header heading="Dashboard"></Header>
    </div> 

    <div className='ms-3'>
      <OrderList headCells={headCells} title="Danh sách đơn"></OrderList>
    </div>

    <PopUp
      title="Tạo báo cáo hàng ngày"
      isOpen={openDailyPopup}
      handleCloseBtnClick={() => {setOpenDailyPopup(false);}}
    >
      {
        <div className='flex flex-col'>
          <h2 className='text-white pb-5'>Xác nhận tạo báo cáo hàng ngày</h2>
          <div className='flex justify-end gap-2'>
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
      title="Tạo báo cáo hàng tháng"
      isOpen={openMonthlyPopup}
      handleCloseBtnClick={() => {setOpenMonthlyPopup(false);}}
    >
      {
        <div className='flex flex-col'>
          <h2 className='text-white pb-5'>Xác nhận tạo báo cáo hàng tháng</h2>
          <div className='flex justify-end gap-2'>
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
  </>
  );
};

export default UserOrders;
