import {useState} from 'react'
import {FormControl, FormLabel, TextField} from '@mui/material'
import CustomButton from '../../../../components/CustomButton/CustomButton'

const EditStaffForm = (props) => {
    const {targetStaff, setOpen} = props
    const [editedStaff, setEditedStaff] = useState({
        id: targetStaff.id || '', 
        email: targetStaff.email || '',
        first_name: targetStaff.first_name || '',
        last_name: targetStaff.last_name || '',
    });

    const handleCancel = () =>{
        setOpen(false);
    }

    const handleSubmit = () => {
        console.log(editedStaff);
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
            className="flex flex-col min-w-[700px]"
            autoComplete='off'
        >
            <TextField
                variant='outlined'
                label="Mã nhân viên"
                name="id"
                defaultValue={targetStaff.id}
                sx={textFieldStyle}
                InputProps={{
                    readOnly: true,
                }}
            />
            <TextField
                variant='outlined'
                label="Tên nhân viên"
                name="first_name"
                value={editedStaff.first_name}
                onChange={(e) => {handleInputChange("first_name", e.target.value) }}
                sx={textFieldStyle}
            />
            <TextField
                variant='outlined'
                label="Ngày sinh"
                name="last_name"
                value={editedStaff.last_name}
                onChange={(e) => {handleInputChange("last_name", e.target.value) }}
                sx={textFieldStyle}
            />
            <TextField
                variant='outlined'
                label="Số điện thoại"
                name="email"
                value={editedStaff.email}
                onChange={(e) => {handleInputChange("email", e.target.value) }}
                sx={textFieldStyle}
            />
            <TextField
                variant='outlined'
                label="Địa chỉ"
                name="email"
                value={editedStaff.email}
                onChange={(e) => {handleInputChange("email", e.target.value) }}
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