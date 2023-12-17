import React from "react";
import Header from "../../../components/Header/Header";
import PreorderList from "./PreorderList";

const StaffPreorders = () => {
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
            <Header heading="Đơn đặt trước"></Header>
        </div> 
    
        <div className="gap-x-16">
            <div className='ms-3 col-span-2'>
                <PreorderList headCells={headCells} title="Đơn đặt trước"></PreorderList>
            </div>
        </div>
      </>
    );
}

export default StaffPreorders;