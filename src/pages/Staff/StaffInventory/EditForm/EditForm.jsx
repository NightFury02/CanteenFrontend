import {useState} from 'react'
import {FormControl, FormLabel, TextField} from '@mui/material'
import CustomButton from '../../../../components/CustomButton/CustomButton'

const EditForm = (props) => {
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

    return (
        <form 
            className="flex flex-col min-w-[600px] gap-5"
            autoComplete='off'
        >
            <div className='input flex flex-col'>
                <label
                    className='block text-white text-sm font-barlow font-medium leading-6'
                    htmlFor='name'
                >
                    Mã sản phẩm
                </label>
                <input 
                    className='block w-full rounded-md border-0 p-2 text-gray-900 shadow-sm placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6'
                    name='id'
                    id='id'
                    value={targetProduct.id}
                    autoComplete='off'
                    type='text'
                    disabled
                />
            </div>

            <div className='input flex flex-col'>
                <label
                    className='block text-white text-sm font-barlow font-medium leading-6'
                    htmlFor='email'
                >
                    Tên sản phẩm
                </label>
                <input 
                    className='block w-full rounded-md border-0 p-2 text-gray-900 shadow-sm placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6'
                    name='email'
                    id='email'
                    value={editedProduct.email}
                    onChange={(e) => {handleInputChange("email", e.target.value) }}
                    autoComplete='off'
                    type='email'
                />
            </div>

            <div className='input flex flex-col'>
                <label
                    className='block text-white text-sm font-barlow font-medium leading-6'
                    htmlFor='first_name'
                >
                    Số lượng
                </label>
                <input 
                    className='block w-full rounded-md border-0 p-2 text-gray-900 shadow-sm placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6'
                    name='first_name'
                    id='first_name'
                    value={editedProduct.first_name}
                    onChange={(e) => {handleInputChange("first_name", e.target.value) }}
                    autoComplete='off'
                    type='text'
                />
            </div>

            <div className='input flex flex-col'>
                <label
                    className='block text-white text-sm font-barlow font-medium leading-6'
                    htmlFor='last_name'
                >
                    Hạn sử dụng
                </label>
                <input 
                    className='block w-full rounded-md border-0 p-2 text-gray-900 shadow-sm placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6'
                    name='last_name'
                    id='last_name'
                    value={editedProduct.last_name}
                    onChange={(e) => {handleInputChange("last_name", e.target.value) }}
                    autoComplete='off'
                    type='date'
                />
            </div>
        
            <div className='grid grid-cols-2 gap-4'>
                <CustomButton
                    title='Hủy'
                    variant='delete'
                    onAction={() => setOpen(false)}
                    className="p-2 mt-3"
                />

                <CustomButton
                    title='Xác nhận'
                    onAction={handleSubmit}
                    className="p-2 mt-3"
                />
            </div>
        </form>
    )
}

export default EditForm