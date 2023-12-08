import Header from "../../../components/Header/Header"
import Button from "../../../components/Button/Button"
import Table from "../../../components/Table/Table"
import Filter from "../../../components/Filter/Filter";

const StaffInventory = () => {
  const handleImport = () => {
    console.log("import");
  }
  const handleExport = () => {
    console.log("export");
  }
  const rowData = [
    ["#1", "Malcolm Lockyer", "1961", "Malcolm Lockyer", "Malcolm Lockyer"],
    ["#2", "Malcolm Lockyer", "1961", "Malcolm Lockyer", "Malcolm Lockyer"],
    ["#300", "Malcolm Lockyer", "1961", "Malcolm Lockyer", "Malcolm Lockyer"],
    ["#120", "Malcolm Lockyer", "1961", "Malcolm Lockyer", "Malcolm Lockyer"],
    ["#3400", "Malcolm Lockyer", "1961", "Malcolm Lockyer", "Malcolm Lockyer"],
    ["#12", "Malcolm Lockyer", "1961", "Malcolm Lockyer", "Malcolm Lockyer"],
    ["#600", "Malcolm Lockyer", "1961", "Malcolm Lockyer", "Malcolm Lockyer"],
    ["#143", "Malcolm Lockyer", "1961", "Malcolm Lockyer", "Malcolm Lockyer"],
  ]
  const columnData = ['Mã sản phẩm', 'Tên', 'Số lượng', 'Hạn sử dụng', 'Xóa'];
  return (
    <>
      <div>
        <Header heading="Quản lý kho"></Header>
      </div>
      <div className="ms-3">
        <Button 
          title={'Tạo phiếu nhập kho'}
          className="p-2 me-5"
          onAction={handleImport}
        />
        <Button 
          title={'Tạo phiếu xuất kho'}
          className="p-2"
          onAction={handleExport}
        />
      </div>
      
      <div className="mt-5 p-2">
        <Table 
          title="Sản phẩm hết hạn"
          column={columnData}
          rows={rowData}
          hasFilter={false}
        />
      </div>

      <div className="mt-5 p-2">
        <Table 
          title="Kho"
          column={columnData}
          rows={rowData}
        />
      </div>
    </>
  );
};

export default StaffInventory;