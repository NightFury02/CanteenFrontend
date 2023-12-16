import {useState} from 'react'
import {FormControl, FormLabel, TextField} from '@mui/material'
import CustomButton from '../../../../components/CustomButton/CustomButton'

const AddStaffForm = (props) => {
    const {setOpen} = props
    const [staff, setStaff] = useState({
        id: '',
        name: '',
        dob: '',
        phone: '',
        address: '',
        email: '',
        password: '',
    });

    const handleCancel = () =>{
        setOpen(false);
    }

    const handleSubmit = () => {
        console.log(staff);
        setOpen(false);
    }

    const handleInputChange = (name, value) => {
        setStaff((previous) => (
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
                label="Họ và tên"
                name="name"
                value={staff.name}
                onChange={(e) => {handleInputChange("name", e.target.value) }}
                sx={textFieldStyle}
            />
            <TextField
                variant='outlined'
                label="Email"
                name="email"
                value={staff.email}
                onChange={(e) => {handleInputChange("email", e.target.value) }}
                sx={textFieldStyle}
            />
            <TextField
                variant='outlined'
                label="Mật khẩu"
                name="password"
                value={staff.password}
                onChange={(e) => {handleInputChange("password", e.target.value) }}
                sx={textFieldStyle}
            />
            <TextField
                variant='outlined'
                label="Ngày sinh"
                name="dob"
                value={staff.dob}
                onChange={(e) => {handleInputChange("dob", e.target.value) }}
                sx={textFieldStyle}
            />
            <TextField
                variant='outlined'
                label="Số điện thoại"
                name="phone"
                value={staff.phone}
                onChange={(e) => {handleInputChange("phone", e.target.value) }}
                sx={textFieldStyle}
            />
            <TextField
                variant='outlined'
                label="Địa chỉ"
                name="address"
                value={staff.address}
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

export default AddStaffForm