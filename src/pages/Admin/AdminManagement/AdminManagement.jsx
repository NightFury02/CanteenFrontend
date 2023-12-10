import React, { useState } from 'react';
import Header from "../../../components/Header/Header"
import Table from "../../../components/Table/Table"
import Button from "../../../components/Button/Button"
import PopupButton from '../../../components/PopupButton/PopupButton';

const staffList = [
    { id: '#041', name: 'Trần Đình Nhật', dob: '12/02/2003', phone: '19001000', address: 'TP.HCM', email: 'nhttrn84@gmail.com', password: '123456' },
    { id: '#042', name: 'Trần Đình Nhật', dob: '12/02/2003', phone: '19001000', address: 'TP.HCM', email: 'divineneos2016@gmail.com', password: '1234' }
];

const AdminManagement = () => {
    const [isPopupVisible, setPopupVisibility] = useState(false);
    const [selectedStaff, setSelectedStaff] = useState([]);

    const popupAction = () => {
        console.log('Pop-up')
    }

    const addStaff = () => {
        console.log('add')
    }

    const showPopup = (staff) => {
        setSelectedStaff(staff);
        setPopupVisibility(true);
    };

    const closePopup = () => {
        setPopupVisibility(false);
    };

    const rowData = staffList.map(({ id, name, dob, phone, address, email, password }) => [
        id,
        name,
        dob,
        phone,
        address,
        <Button
          className="p-2 mt-2 ml-2"
          onAction={() => showPopup({ id, name, dob, phone, address, email, password })}
          title="Chi tiết"
        ></Button>
    ]);
    const columnData = ['Mã nhân viên', 'Tên nhân viên', 'Ngày sinh', 'Số điện thoại', 'Địa chỉ', 'Chỉnh sửa'];
    return (
        <div>
            <div>
            <Header heading="Danh sách nhân viên"></Header>
            </div>

            <div className="mt-5 p-2">
            <Table 
                column={columnData}
                rows={rowData}
                hasFilter={false}
            />
            </div>
            {isPopupVisible && (
            <div className="popup">
                <div className="popup-content">
                    <span className="close" onClick={closePopup}>&times;</span>
                    <h2>Chi tiết nhân viên</h2>
                    <p><strong>Mã nhân viên:</strong> {selectedStaff.id}</p>
                    <p><strong>Tên nhân viên:</strong> {selectedStaff.name}</p>
                    <p><strong>Ngày sinh:</strong> {selectedStaff.dob}</p>
                    <p><strong>Số điện thoại:</strong> {selectedStaff.phone}</p>
                    <p><strong>Địa chỉ:</strong> {selectedStaff.address}</p>
                    <p><strong>Email:</strong> {selectedStaff.email}</p>
                    <p><strong>Password:</strong> {selectedStaff.password}</p>
                </div>
            </div>
            )}
            <div className='relative'>
                <PopupButton
                    title="Thêm nhân viên"
                    header="Thêm nhân viên"
                    className="p-2 mt-2 ml-2 fixed bottom-5 right-5"
                    data={<>
                        <div>Họ và tên</div>
                        <input></input>
                        <div>Email</div>
                        <input></input>
                        <div>Mật khẩu</div>
                        <input></input>
                        <div>Ngày sinh</div>
                        <input></input>
                        <div>Số điện thoại</div>
                        <input></input>
                        <div>Địa chỉ</div>
                        <input></input>
                    </>    
                    }
                    >
                </PopupButton>
            </div>
        </div>
    );
};

export default AdminManagement;