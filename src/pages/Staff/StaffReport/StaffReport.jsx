import React from 'react';
import Header from "../../../components/Header/Header"
import CustomButton from '../../../components/CustomButton/CustomButton';
import PopUp from '../../../components/Popup/Popup';
import ImportReportsTable from './ImportReports/ImportReportsTable';
import ExportReportsTable from './ExportReports/ExportReportsTable';

const StaffReport = () => {
  const importHeadCells = [
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

  const exportHeadCells = [
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
  ];

  return (
    <>
      <div>
        <Header heading="Phiếu xuất/nhập kho" hasSearch={true}></Header>
      </div>

      <div className="mt-5 p-2">
        <ImportReportsTable headCells={importHeadCells} title={'Phiếu nhập kho'}/>
      </div>

      <div className="mt-5 p-2">
        <ExportReportsTable headCells={exportHeadCells} title={'Phiếu xuất kho'}/>
      </div>
    </>
  );
};

export default StaffReport;