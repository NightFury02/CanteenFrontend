import {useState} from 'react'
import {FormControl, FormLabel, TextField} from '@mui/material'
import CustomButton from '../../../../components/CustomButton/CustomButton'

const GRNForm = (props) => {
    const {targetProduct, setOpen} = props
    const [editedProduct, setEditedProduct] = useState({
        id: targetProduct.id || '', 
        email: targetProduct.email || '',
        first_name: targetProduct.first_name || '',
        last_name: targetProduct.last_name || '',
    });

    const handleSubmit = () => {
        console.log(editedProduct);
        setOpen(false);
    }

    const handleInputChange = (name, value) => {
        setEditedProduct((previous) => (
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
                label="Mã sản phẩm"
                name="id"
                defaultValue={targetProduct.id}
                sx={textFieldStyle}
                InputProps={{
                    readOnly: true,
                }}
            />
            <TextField
                variant='outlined'
                label="Tên"
                name="email"
                value={editedProduct.email}
                onChange={(e) => {handleInputChange("email", e.target.value) }}
                sx={textFieldStyle}
            />
            <TextField
                variant='outlined'
                label="Số lượng"
                name="first_name"
                value={editedProduct.first_name}
                onChange={(e) => {handleInputChange("first_name", e.target.value) }}
                sx={textFieldStyle}
            />
            <TextField
                variant='outlined'
                label="Hạn sử dụng"
                name="last_name"
                value={editedProduct.last_name}
                onChange={(e) => {handleInputChange("last_name", e.target.value) }}
                sx={textFieldStyle}
            />
            <CustomButton
                title='Xác nhận'
                type='button'
                variant='bg-emerald-700'
                hover='hover:bg-emerald-500'
                shadow=''
                textColor='text-white'
                border='border border-emerald-700 rounded'
                onAction={handleSubmit}
                className="p-2"
            />
        </form>
    )
}

export default GRNForm