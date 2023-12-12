import React from 'react';
import Header from "../../../components/Header/Header"
import Button from "../../../components/Button/Button"
import ExpiredProductTable from "./ExpiredProductTable/ExpiredProductTable";
import InventoryTable from "./InventoryTable/InventoryTable";
import DeletedProductTable from "./DeletedProductTable/DeletedProductTable";
import PopupButton from "../../../components/PopUpButton/PopUpButton";

const StaffInventory = () => {
  const handleImport = () => {
    console.log("importing")
  }
  const handleExport = () => {
    console.log("export");
  }

  const rows = [
    {
        id: '#001',
        name: 'Mỳ ý sốt thịt băm',
        quantity: 43,
        expiryDate: '12/03/2024'
    },
    {
        id: '#002',
        name: 'Mỳ ý sốt thịt băm',
        quantity: 43,
        expiryDate: '12/03/2024'
    },
    {
        id: '#003',
        name: 'Mỳ ý sốt thịt băm',
        quantity: 43,
        expiryDate: '12/03/2024'
    },
    {
        id: '#004',
        name: 'Mỳ ý sốt thịt băm',
        quantity: 43,
        expiryDate: '12/03/2024'
    },
    {
        id: '#005',
        name: 'Mỳ ý sốt thịt băm',
        quantity: 43,
        expiryDate: '12/03/2024'
    },
    {
        id: '#006',
        name: 'Mỳ ý sốt thịt băm',
        quantity: 43,
        expiryDate: '12/03/2024'
    },
];

  const rowData = [
    ["#1", "Malcolm Lockyer", "1961", "Malcolm Lockyer"],
    ["#2", "Malcolm Lockyer", "1961", "Malcolm Lockyer"],
    ["#300", "Malcolm Lockyer", "1961", "Malcolm Lockyer"],
    ["#120", "Malcolm Lockyer", "1961", "Malcolm Lockyer"],
    ["#3400", "Malcolm Lockyer", "1961", "Malcolm Lockyer"],
    ["#12", "Malcolm Lockyer", "1961", "Malcolm Lockyer"],
    ["#600", "Malcolm Lockyer", "1961", "Malcolm Lockyer"],
    ["#143", "Malcolm Lockyer", "1961", "Malcolm Lockyer"],
  ]
  const columnData = ['Mã sản phẩm', 'Tên', 'Số lượng', 'Hạn sử dụng'];
  const links = [
    { href: '/account-settings', label: 'ID sản phẩm' },
    { href: '/support', label: 'Tên' },
    { href: '/license', label: 'Số lượng' },
    { href: '/sign-out', label: 'Hạn sử dụng' },
  ];

  // const headCells = [
  //   {
  //     id: 'id',
  //     numeric: false,
  //     disablePadding: true,
  //     label: 'Mã sản phẩm',
  //   },
  //   {
  //     id: 'name',
  //     numeric: true,
  //     disablePadding: true,
  //     label: 'Tên',
  //   },
  //   {
  //     id: 'quantity',
  //     numeric: true,
  //     disablePadding: true,
  //     label: 'Số lượng',
  //   },
  //   {
  //     id: 'expiryDate',
  //     numeric: true,
  //     disablePadding: true,
  //     label: 'Hạn sử dụng',
  //   },
  // ];

  const headCells = [
    {
      id: 'id',
      numeric: false,
      disablePadding: true,
      label: 'Mã người dùng',
    },
    {
      id: 'email',
      numeric: true,
      disablePadding: true,
      label: 'Email',
    },
    {
      id: 'first_name',
      numeric: true,
      disablePadding: true,
      label: 'Họ',
    },
    {
      id: 'last_name',
      numeric: true,
      disablePadding: true,
      label: 'Tên',
    },
  ];
  return (
    <>
      <div>
        <Header heading="Quản lý kho"></Header>
      </div>
      <div className="ms-3">
        <PopupButton 
          title={'Tạo phiếu nhập kho'}
          className="p-2 me-5"
          onAction={handleImport}
        >
          {<ExpiredProductTable headCells={headCells} title={'Sản phẩm hết hạn'}/>}
        </PopupButton>
        <PopupButton 
          title={'Tạo phiếu xuất kho'}
          className="p-2"
          onAction={handleExport}
        >
          {<InventoryTable headCells={headCells} title={'Kho'}/>}
        </PopupButton>
      </div>
      
      <div className="mt-5 p-2">
        <InventoryTable headCells={headCells} title={'Kho'}/>
      </div>

      <div className="mt-5 p-2">
        <ExpiredProductTable headCells={headCells} title={'Sản phẩm hết hạn'}/>
      </div>

      <div className="mt-5 p-2">
        <DeletedProductTable headCells={headCells} title={'Sản phẩm đã bị xóa'}/>
      </div>
    </>
  );
};

export default StaffInventory;