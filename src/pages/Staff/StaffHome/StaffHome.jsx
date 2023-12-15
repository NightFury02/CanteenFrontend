import Header from "../../../components/Header/Header"
import Table from "../../../components/Table/Table"
import CustomButton from "../../../components/CustomButton/CustomButton"
import Breadcrumbs from "../../../components/Breadcrumbs/Breadcrumbs";

const StaffHome = () => {
  const handleImport = () => {
    console.log("import");
  }
  const handleExport = () => {
    console.log("export");
  }
  const titles = ['Các món ăn', 'Nước', 'Các món khác']
  const rowData = [
    ['OOO', 'OOO', 'OOO']
  ]
  const columnData = ['', '', ''];
  //đơn hàng data
  const donRowData = [
    ['Mì hải sản', '2', '50.000đ'],
    ['Ghi chú...', '', 'Xóa']
  ]
  const donColData = ['Sản phẩm', 'Số lượng', 'Giá'];
  //tổng thanh toán data
  const thanhToanRowData = [
    ['Tổng', '150.000đ'],
    ['Đã nhận', '200.000đ'],
    ['Tiền thừa', '50.000đ'],
  ]
  const thanhToanColData = [
    ['', '']
  ]
  const links = [
    { href: '/account-settings', label: 'Account settings' },
    { href: '/support', label: 'Support' },
    { href: '/license', label: 'License' },
    { href: '/sign-out', label: 'Sign out' },
  ];

  return (
    <div className="grid grid-cols-3 gap-x-16">
      <div className="col-span-2"> 
        <div>
          <Header heading="Tên nhân viên"></Header>
        </div>

        <div className="ms-3">
          <Breadcrumbs 
            titles={titles}
            className="p-2 me-5"
            onAction={handleImport}
          />
        </div>
        
        <div className="mt-5 p-2">
          <Table 
            title="Chọn món ăn"
            column={columnData}
            rows={rowData}
            hasFilter={false}
            filterItems={links}
          />
        </div>
      </div>

      <div className="relative col-span-1"> 
        <span className="text-white">Mã đơn #34567</span>
        <div className="minHeight">
          <Table 
            title=""
            column={donColData}
            rows={donRowData}
            hasFilter={false}
            filterItems={links}
          />
        </div>
        <div>
            <Table 
            title=""
            column={thanhToanColData}
            rows={thanhToanRowData}
            hasFilter={false}
            filterItems={links}
          />
        </div>
        <CustomButton 
          title={'Xác nhận thanh toán'}
          className="p-2 mt-2 w-full"
          onAction={handleImport}
        />
        <CustomButton 
          title={'Hủy'}
          className="p-2 mt-2 w-full"
          onAction={handleExport}
        />
      </div>
    </div>
  );
};

export default StaffHome;
