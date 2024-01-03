import React from 'react';
import Header from "../../../components/Header/Header"
import ExpiredProductTable from "./ExpiredProductTable/ExpiredProductTable";
import InventoryTable from "./InventoryTable/InventoryTable";
import CustomButton from '../../../components/CustomButton/CustomButton';
import PopUp from '../../../components/Popup/Popup';
import GRNForm from './GoodsReceivedNoteForm/GRNForm';
import GDNForm from './GoodsDeliveryNoteForm/GDNForm';

const StaffInventory = () => {
  //Inventory table state
  const [inventoryTableRows, setInventoryTableRows] = React.useState([]);
  const [inventoryTableOriginalRows, setInventoryTableOriginalRows] = React.useState([]);

  //Expired product table state
  const [expiredTableRows, setExpiredTableRows] = React.useState([]);
  const [expiredTableOriginalRows, setExpiredTableOriginalRows] = React.useState([]);

  const [isImportPopUpOpen, setImportPopUpOpen] = React.useState(false);
  const [isExportPopUpOpen, setExportPopUpOpen] = React.useState(false);
 
  const headCells = [
    {
      id: '_id',
      numeric: false,
      disablePadding: true,
      label: 'Mã sản phẩm',
    },
    {
      id: 'inventoryItem_name',
      numeric: false,
      disablePadding: true,
      label: 'Tên sản phẩm',
    },
    {
      id: 'inventoryItem_quantity',
      numeric: true,
      disablePadding: true,
      label: 'Số lượng',
    },
    {
      id: 'cost',
      numeric: true,
      disablePadding: true,
      label: 'Gía nhập',
    },
    {
      id: 'inventoryItem_exp',
      numeric: false,
      disablePadding: true,
      label: 'Hạn sử dụng',
    },
  ];

  return (
    <>
      <div>
        <Header heading="Quản lý kho"></Header>
      </div>
      <div className="ms-3">
        <CustomButton 
          title={'Tạo phiếu nhập kho'}
          className="p-2 me-5"
          onAction={() => {setImportPopUpOpen(true)}}
        />
        <CustomButton 
          title={'Tạo phiếu xuất kho'}
          className="p-2"
          onAction={() => {setExportPopUpOpen(true)}}
        />
      </div>
      
      <div className="mt-5 p-2">
        <InventoryTable 
          headCells={headCells} 
          title={'Kho'} 
          inventoryTableRows={inventoryTableRows}
          setInventoryTableRows={setInventoryTableRows} 
          inventoryTableOriginalRows={inventoryTableOriginalRows}
          setInventoryTableOriginalRows={setInventoryTableOriginalRows}
          setExpiredTableRows={setExpiredTableRows} 
          setExpiredTableOriginalRows={setExpiredTableOriginalRows}
        />
      </div>

      <div className="mt-5 p-2">
        <ExpiredProductTable 
          headCells={headCells} 
          title={'Sản phẩm hết hạn'} 
          setInventoryTableRows={setInventoryTableRows} 
          setInventoryTableOriginalRows={setInventoryTableOriginalRows}
          expiredTableRows={expiredTableRows}
          setExpiredTableRows={setExpiredTableRows} 
          expiredTableOriginalRows={expiredTableOriginalRows}
          setExpiredTableOriginalRows={setExpiredTableOriginalRows}
        />
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