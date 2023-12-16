import React from 'react';
import Header from "../../../components/Header/Header"
import ExpiredProductTable from "./ExpiredProductTable/ExpiredProductTable";
import InventoryTable from "./InventoryTable/InventoryTable";
import DeletedProductTable from "./DeletedProductTable/DeletedProductTable";
import CustomButton from '../../../components/CustomButton/CustomButton';
import PopUp from '../../../components/Popup/Popup';
import GRNForm from './GoodsReceivedNoteForm/GRNForm';
import GDNForm from './GoodsDeliveryNoteForm/GDNForm';

const StaffInventory = () => {
  const [isImportPopUpOpen, setImportPopUpOpen] =React.useState(false);
  const [isExportPopUpOpen, setExportPopUpOpen] =React.useState(false);

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
        <Header heading="Quản lý kho" hasSearch={false}></Header>
      </div>
      <div className="ms-3">
        <CustomButton 
          title={'Tạo phiếu nhập kho'}
          className="p-2 me-5"
          onAction={() => {setImportPopUpOpen(true)}}
        >
          {<ExpiredProductTable headCells={headCells} title={'Sản phẩm hết hạn'}/>}
        </CustomButton>
        <CustomButton 
          title={'Tạo phiếu xuất kho'}
          className="p-2"
          onAction={() => {setExportPopUpOpen(true)}}
        >
          {<InventoryTable headCells={headCells} title={'Kho'}/>}
        </CustomButton>
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

      <PopUp
        title="Phiếu nhập kho"
        isOpen={isImportPopUpOpen}
        handleCloseBtnClick={() => setImportPopUpOpen(false)}
      >
        <GRNForm 
          closePopUp={() => setImportPopUpOpen(false)}
        />
      </PopUp>

      <PopUp
        title="Phiếu xuất kho"
        isOpen={isExportPopUpOpen}
        handleCloseBtnClick={() => setExportPopUpOpen(false)}
      >
        <GDNForm 
          closePopUp={() => setExportPopUpOpen(false)}
        />
      </PopUp>
    </>
  );
};

export default StaffInventory;