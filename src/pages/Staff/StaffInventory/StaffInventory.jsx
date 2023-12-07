import Header from "../../../components/Header/Header"
import Button from "../../../components/Button/Button"
const StaffInventory = () => {
  const handleImport = () => {
    console.log("import");
  }
  return (
    <>
      <Header heading="Quản lý kho"></Header>
      <div className="ms-3">
        <Button 
          title={'Tạo phiếu nhập kho'}
          className="p-2 me-5"
          onAction={handleImport}
        />
        <Button 
          title={'Tạo phiếu xuất kho'}
          className="p-2"
          onAction={handleImport}
        />
      </div>
    </>
  );
};

export default StaffInventory;