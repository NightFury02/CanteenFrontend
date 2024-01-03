import {useState} from 'react'
import {FormControl, FormLabel, TextField, Input} from '@mui/material'
import CustomButton from '../../../../components/CustomButton/CustomButton'
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import userApi from '../../../../api/userApi';

const token = localStorage.getItem("token");
const clientId = localStorage.getItem("clientId");

const EditStaffForm = (props) => {
    const {targetStaff, setOpen} = props
    const [editedStaff, setEditedStaff] = useState({
        _id: targetStaff._id || '', 
        name: targetStaff.name || '',
        birthday: targetStaff.birthday || '',
        phone: targetStaff.phone || '',
        address: targetStaff.address || '',
    });
    
    const handleCancel = () => {
        setOpen(false);
    }
    
    const handleSubmit = async () => {
        const attributes = {
            "address": editedStaff.address,
            "birthday": editedStaff.birthday,
            "phone": editedStaff.phone
        };
        const updatedInfo = await userApi.updateInfo({token, clientId}, attributes, targetStaff.password);
        console.log(updatedInfo);
        setOpen(false);
    }

    const handleInputChange = (name, value) => {
        setEditedStaff((previous) => (
            {
                ...previous,
                [name]: value
            }
        ))
    }

    const textFieldStyle = {
        marginBottom: '2rem',
    }
    return (
        <form 
            className="flex flex-col min-w-[600px]"
            autoComplete='off'
        >
            <TextField
                variant='outlined'
                label="Mã nhân viên"
                name="_id"
                defaultValue={targetStaff._id}
                sx={textFieldStyle}
                InputProps={{
                    readOnly: true,
                }}
            />
            <TextField
                variant='outlined'
                label="Tên nhân viên"
                name="name"
                value={editedStaff.name}
                onChange={(e) => {handleInputChange("name", e.target.value) }}
                sx={textFieldStyle}
            />
            <TextField
                label="Ngày sinh"
                name="birthday"
                type="date" 
                value={editedStaff.birthday}
                onChange={(e) => {handleInputChange("birthday", e.target.value) }}
                sx={textFieldStyle}
            />
            <TextField
                variant='outlined'
                label="Số điện thoại"
                name="phone"
                value={editedStaff.phone}
                onChange={(e) => {handleInputChange("phone", e.target.value) }}
                sx={textFieldStyle}
            />
            <TextField
                variant='outlined'
                label="Địa chỉ"
                name="address"
                value={editedStaff.address}
                onChange={(e) => {handleInputChange("address", e.target.value) }}
                sx={textFieldStyle}
            />
            <CustomButton
                title='Hủy'
                variant='secondary'
                onAction={handleCancel}
                className="p-2"
            />
            <CustomButton
                title='Xác nhận'
                variant='tertiary'
                onAction={handleSubmit}
                className="p-2"
            />
        </form>
    )
}

export default EditStaffForm