import React from 'react';
import Header from "../../../components/Header/Header"
import ExpiredProductTable from "./ExpiredProductTable/ExpiredProductTable";
import InventoryTable from "./InventoryTable/InventoryTable";
import DeletedProductTable from "./DeletedProductTable/DeletedProductTable";
import PopupButton from "../../../components/PopupButton/PopupButton";

const StaffInventory = () => {
  const handleImport = () => {
    console.log("importing")
  }
  const handleExport = () => {
    console.log("export");
  }

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