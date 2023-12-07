import Header from "../../../components/Header/Header"
import Button from "../../../components/Button/Button"
import Table from "../../../components/Table/Table"
const StaffInventory = () => {
  const handleImport = () => {
    console.log("import");
  }
  const handleExport = () => {
    console.log("export");
  }
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
          columns={['Mã sản phẩm', 'Tên', 'Số lượng', 'Hạn sử dụng', 'Xóa']}
        />
      </div>
    </>
  );
};

export default StaffInventory;