import React from 'react';
import Header from '../../../components/Header/Header';
import OrderList from './OrderList';

const StaffDashboard = () => {
  const headCells = [
    {
      id: 'id',
      disablePadding: true,
      label: 'Mã phiếu',
    },
    {
      id: 'staffName',
      disablePadding: true,
      label: 'Tên nhân viên',
    },
    {
      id: 'createDate',
      disablePadding: true,
      label: 'Ngày lập phiếu',
    },
    {
      id: 'total',
      disablePadding: true,
      label: 'Tổng giá trị nhập',
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
  </>
  );
};

export default StaffDashboard;

