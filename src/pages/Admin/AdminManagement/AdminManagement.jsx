import React, { useState } from 'react';
import Header from "../../../components/Header/Header"
import Table from "../../../components/Table/Table"
import PopupButton from '../../../components/PopupButton/PopupButton';

const staffList = [
    { id: '#041', name: 'Trần Đình Nhật', dob: '12/02/2003', phone: '19001000', address: 'TP.HCM', email: 'nhttrn84@gmail.com', password: '123456' },
    { id: '#042', name: 'Trần Đình Nhật', dob: '12/02/2003', phone: '19001000', address: 'TP.HCM', email: 'divineneos2016@gmail.com', password: '1234' }
];

const AdminManagement = () => {
    const casualPopup = () => {
        //for fun
    }
    const addStaff = () => {
        console.log('add')
    }

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

    const editStaff = (updatedStaff) => {
        console.log('Updated staff: ',updatedStaff)
    };

    const handleInputChange = (fieldName, value) => {
        setEditedStaff((prevStaff) => ({
          ...prevStaff,
          [fieldName]: value,
        }));
    };

    const handlePopupOpen = (staff) => {
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
            buttonTitle="Xác nhận"
            onPopUp={() => handlePopupOpen({ id, name, dob, phone, address, email, password })}
            onAction={() => editStaff({editedStaff})}
            className="p-2 mt-2 ml-2"
            data={<>
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
                    onAction={addStaff}
                    onPopUp={casualPopup}
                    className="p-2 mt-2 ml-2 fixed bottom-5 right-5"
                    data={<>
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
                    </>    
                    }
                    >
                </PopupButton>
            </div>
        </div>
    );
};

export default AdminManagement;