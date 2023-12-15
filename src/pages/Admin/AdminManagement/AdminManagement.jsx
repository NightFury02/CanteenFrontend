import React from 'react';
import Header from "../../../components/Header/Header"
import Table from "../../../components/Table/Table"
import CustomButton from '../../../components/CustomButton/CustomButton';
import PopUp from '../../../components/Popup/Popup';
import PopupButton from '../../../components/PopupButton/PopupButton';
import StaffTable from './StaffTable/StaffTable';
import AddStaffForm from './AddStaffForm/AddStaffForm';

const staffList = [
    { id: '#041', name: 'Trần Đình Nhật', dob: '12/02/2003', phone: '19001000', address: 'TP.HCM', email: 'nhttrn84@gmail.com', password: '123456' },
    { id: '#042', name: 'Trần Đình Nhật', dob: '12/02/2003', phone: '19001000', address: 'TP.HCM', email: 'divineneos2016@gmail.com', password: '1234' }
];

const AdminManagement = () => {
    const [openAddPopup, setOpenAddPopup] = React.useState(false);
    
    const handleAddOpenChange = (isOpen) => {
        setOpenAddPopup(isOpen);
    };

    const headCells = [
        {
            id: 'id',
            numeric: false,
            disablePadding: true,
            label: 'Mã người dùng',
        },
        {
            id: 'first_name',
            numeric: false,
            disablePadding: true,
            label: 'Tên nhân viên',
        },
        {
            id: 'last_name',
            numeric: false,
            disablePadding: true,
            label: 'Ngày sinh',
        },
        {
            id: 'email',
            numeric: false,
            disablePadding: true,
            label: 'Số điện thoại',
        },
        {
            id: 'address',
            numeric: false,
            disablePadding: true,
            label: 'Địa chỉ',
        },
    ];

    return (
        <div>
            <div>
            <Header heading="Danh sách nhân viên"></Header>
            </div>
            <div className="ml-2">
                <CustomButton
                    title={'Thêm nhân viên'}
                    variant={'primary'}
                    className={'p-2'}
                    onAction={() => handleAddOpenChange(true)}
                />
            </div>
            
            <PopUp
                title="Thêm nhân viên"
                openPopUp={openAddPopup}
                setOpenPopUp={handleAddOpenChange}
            >
                {<AddStaffForm
                setOpen={handleAddOpenChange}
                />}
            </PopUp>
            <div className="mt-2 p-2">
            <StaffTable headCells={headCells} title={''}/>
            </div>
        </div>
    );
};

export default AdminManagement;