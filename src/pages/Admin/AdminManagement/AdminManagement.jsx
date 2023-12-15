import React, { useState } from 'react';
import Header from "../../../components/Header/Header"
import Table from "../../../components/Table/Table"
import CustomButton from '../../../components/CustomButton/CustomButton';
import PopupButton from '../../../components/PopupButton/PopupButton';

const staffList = [
    { id: '#041', name: 'Trần Đình Nhật', dob: '12/02/2003', phone: '19001000', address: 'TP.HCM', email: 'nhttrn84@gmail.com', password: '123456' },
    { id: '#042', name: 'Trần Đình Nhật', dob: '12/02/2003', phone: '19001000', address: 'TP.HCM', email: 'divineneos2016@gmail.com', password: '1234' }
];

const AdminManagement = () => {
    const [isPopupOpen, setPopupOpen] = useState(true);
    const [isAddPopupOpen, setAddPopupOpen] = useState(true);

    //Handle add staff function
    const addStaff = () => {
        console.log('add');
        setAddPopupOpen(false);
    }
    
    const handleAddPopupOpen = () => setAddPopupOpen(true);

    const [selectedStaff, setSelectedStaff] = useState({});
    const [editedStaff, setEditedStaff] = useState({
        id: '',
        name: '',
        dob: '',
        phone: '',
        address: '',
        email: '',
        password: '',
    });

    //Handle edit staff function
    const editStaff = (updatedStaff) => {
        console.log('Updated staff: ',updatedStaff);
        setPopupOpen(false);
    };

    const handleInputChange = (fieldName, value) => {
        setEditedStaff((prevStaff) => ({
          ...prevStaff,
          [fieldName]: value,
        }));
    };

    const handlePopupOpen = (staff) => {
        setPopupOpen(true);
        setSelectedStaff(staff);
        setEditedStaff(staff);
    };

    const rowData = staffList.map(({ id, name, dob, phone, address, email, password }) => [
        id,
        name,
        dob,
        phone,
        address,
        <PopupButton
            title="Chi tiết"
            header="Thông tin nhân viên"
            onPopup={() => handlePopupOpen({ id, name, dob, phone, address, email, password })}
            className="p-2 mt-2 ml-2"
            isPopupOpen={isPopupOpen}
            children={<>
                <div>Họ và tên</div>
                <input 
                    className='w-11/12 pl-2 border border-white rounded bg-dark_bg' 
                    value={editedStaff.name}
                    onChange={(e) => handleInputChange('name', e.target.value)}
                ></input>
                <div>Email</div>
                <input 
                    className='w-11/12 pl-2 border border-white rounded bg-dark_bg' 
                    value={editedStaff.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                ></input>
                <div>Mật khẩu</div>
                <input 
                    className='w-11/12 pl-2 border border-white rounded bg-dark_bg' 
                    value={editedStaff.password}
                    onChange={(e) => handleInputChange('password', e.target.value)}
                ></input>
                <div>Ngày sinh</div>
                <input 
                    className='w-11/12 pl-2 border border-white rounded bg-dark_bg' 
                    value={editedStaff.dob}
                    onChange={(e) => handleInputChange('dob', e.target.value)}
                ></input>
                <div>Số điện thoại</div>
                <input 
                    className='w-11/12 pl-2 border border-white rounded bg-dark_bg' 
                    value={editedStaff.phone}
                    onChange={(e) => handleInputChange('phone', e.target.value)}
                ></input>
                <div>Địa chỉ</div>
                <input 
                    className='w-11/12 pl-2 border border-white rounded bg-dark_bg' 
                    value={editedStaff.address}
                    onChange={(e) => handleInputChange('address', e.target.value)}
                ></input>
                <CustomButton 
                    title='Xác nhận'
                    variant='tertiary'
                    onAction={() => {editStaff({editedStaff})}}
                    className="absolute right-[70px] bottom-2 pt-1 pb-1 pl-16 pr-16"
                ></CustomButton>
            </>    
            }
            >
        </PopupButton>
    ]);
    const columnData = ['Mã nhân viên', 'Tên nhân viên', 'Ngày sinh', 'Số điện thoại', 'Địa chỉ', 'Chỉnh sửa'];
    return (
        <div>
            <div>
            <Header heading="Danh sách nhân viên"></Header>
            </div>

            <div className="mt-5 p-2">
            <Table 
                title=''
                column={columnData}
                rows={rowData}
                hasFilter={false}
            />
            </div>
            <div className='relative'>
                <PopupButton
                    title="Thêm nhân viên"
                    header="Thêm nhân viên"
                    buttonTitle="Tạo tài khoản"
                    className="p-2 mt-2 ml-2 fixed bottom-5 right-5"
                    isPopupOpen={isAddPopupOpen}
                    onPopup={() => handleAddPopupOpen()}
                    children={<>
                        <div>Họ và tên</div>
                        <input className='w-11/12 pl-2 border border-white rounded bg-dark_bg'></input>
                        <div>Email</div>
                        <input className='w-11/12 pl-2 border border-white rounded bg-dark_bg'></input>
                        <div>Mật khẩu</div>
                        <input className='w-11/12 pl-2 border border-white rounded bg-dark_bg'></input>
                        <div>Ngày sinh</div>
                        <input className='w-11/12 pl-2 border border-white rounded bg-dark_bg'></input>
                        <div>Số điện thoại</div>
                        <input className='w-11/12 pl-2 border border-white rounded bg-dark_bg'></input>
                        <div>Địa chỉ</div>
                        <input className='w-11/12 pl-2 border border-white rounded bg-dark_bg'></input>
                        <CustomButton 
                            title='Tạo tài khoản'
                            type='button'
                            outline='absolute right-2 bottom-2 pt-1 pb-1 pl-16 pr-16'
                            variant='bg-emerald-700'
                            hover='hover:bg-emerald-500'
                            shadow=''
                            textColor='text-white'
                            border='border border-emerald-700 rounded'
                            onAction={() => {addStaff()}}
                        ></CustomButton>
                    </>    
                    }
                    >
                </PopupButton>
            </div>
        </div>
    );
};

export default AdminManagement;