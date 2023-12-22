import {useState} from 'react'
import {FormControl, FormLabel, TextField} from '@mui/material'
import CustomButton from '../../../../components/CustomButton/CustomButton'

const EditForm = (props) => {
    const {targetProduct, onSubmit} = props
    const [editedProduct, setEditedProduct] = useState({
        _id: targetProduct._id || '', 
        item_name: targetProduct.item_name || '',
        item_type: targetProduct.item_type || '',
        item_price: targetProduct.item_price || '',
        item_quantity: targetProduct.item_quantity || '',
        item_image: targetProduct.item_image || '',
        item_cost: targetProduct.item_cost || '',
        item_expirationDate: targetProduct.item_expirationDate || ''
    });
    const [errors, setErrors] = useState({
        item_name: '',
        item_price: '',
        item_quantity: '',
        item_cost: '',
        item_image: '',
        item_expirationDate: ''
    });

    const handleSubmit = () => {
        const dataToSend = {
            ...editedProduct,
            item_price: parseFloat(editedProduct.item_price),
            item_cost: parseFloat(editedProduct.item_cost),
            item_quantity: parseInt(editedProduct.item_quantity),
        } 
        onSubmit(dataToSend);
    }

    const handleInputChange = (name, value) => {
        setEditedProduct((previous) => (
            {
                ...previous,
                [name]: value
            }
        ))
        
        //Form Validation
        //Tên mặt hàng
        if(name === 'item_name'){
            if (value === ''){
                setErrors(prev => ({
                    ...prev,
                    [name]: 'Tên sản phẩm không được để trống'
                }))
            }
            //Else, no error
            else{
                setErrors(prev => ({
                    ...prev,
                    [name]: ''
                }))
            }
        }

        //Gía bán
        if(name === 'item_price'){
            if (value === ''){
                setErrors(prev => ({
                    ...prev,
                    [name]: 'Giá bán không được để trống'
                }))
            }
            else if (isNaN(Number(value)))
            {
                setErrors(prev => ({
                    ...prev,
                    [name]: 'Giá bán phải là số'
                }))
            }
            else if (Number(value) <= 0)
            {
                setErrors(prev => ({
                    ...prev,
                    [name]: 'Giá bán không hợp lệ'
                }))
            }
            //Else, no error
            else{
                setErrors(prev => ({
                    ...prev,
                    [name]: ''
                }))
            }
        }

        //Gía nhập
        if(name === 'item_cost'){
            if (value === ''){
                setErrors(prev => ({
                    ...prev,
                    [name]: 'Giá nhập không được để trống'
                }))
            }
            else if (isNaN(Number(value)))
            {
                setErrors(prev => ({
                    ...prev,
                    [name]: 'Giá nhập phải là số'
                }))
            }
            else if (Number(value) <= 0)
            {
                setErrors(prev => ({
                    ...prev,
                    [name]: 'Giá nhập không hợp lệ'
                }))
            }
            //Else, no error
            else{
                setErrors(prev => ({
                    ...prev,
                    [name]: ''
                }))
            }
        }

        //Số lượng
        if(name === 'item_quantity'){
            if (value === ''){
                setErrors(prev => ({
                    ...prev,
                    [name]: 'Số lượng không được để trống'
                }))
            }
            else if (isNaN(Number(value)))
            {
                setErrors(prev => ({
                    ...prev,
                    [name]: 'Số lượng phải là số'
                }))
            }
            else if (Number(value) < 0)
            {
                setErrors(prev => ({
                    ...prev,
                    [name]: 'Số lượng không hợp lệ'
                }))
            }
            //Else, no error
            else{
                setErrors(prev => ({
                    ...prev,
                    [name]: ''
                }))
            }
        }

        //Hạn sử dụng
        if(name === 'item_expirationDate'){
            if (value === ''){
                setErrors(prev => ({
                    ...prev,
                    [name]: 'Hạn sử dụng không được để trống'
                }))
            }
            //Else, no error
            else{
                setErrors(prev => ({
                    ...prev,
                    [name]: ''
                }))
            }
        }
    }

    return (
    <div className="flex flex-col">
        <form 
            className="grid grid-cols-2 min-w-[800px] gap-5"
            autoComplete='off'
        >
            <div className='input flex flex-col'>
                <label
                    className='block text-white text-sm font-barlow font-medium leading-6'
                    htmlFor='_id'
                >
                    Mã sản phẩm
                </label>
                <input 
                    className='block w-full rounded-md border-0 p-2 text-gray-900 shadow-sm placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6'
                    name='_id'
                    id='_id'
                    value={targetProduct._id}
                    autoComplete='off'
                    type='text'
                    disabled
                />
            </div>

            <div className='input flex flex-col'>
                <label
                    className='block text-white text-sm font-barlow font-medium leading-6'
                    htmlFor='item_image'
                >
                    Link ảnh sản phẩm
                </label>
                <input 
                    className='block w-full rounded-md border-0 p-2 text-gray-900 shadow-sm placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6'
                    name='item_image'
                    id='item_image'
                    value={editedProduct.item_image}
                    onChange={(e) => {handleInputChange("item_image", e.target.value) }}
                    autoComplete='off'
                    type='text'
                />
            </div>

            <div className='input flex flex-col'>
                <label
                    className='block text-white text-sm font-barlow font-medium leading-6'
                    htmlFor='item_name'
                >
                    Tên sản phẩm
                </label>
                <input 
                    className='block w-full rounded-md border-0 p-2 text-gray-900 shadow-sm placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6'
                    name='item_name'
                    id='item_name'
                    value={editedProduct.item_name}
                    onChange={(e) => {handleInputChange("item_name", e.target.value) }}
                    autoComplete='off'
                    type='text'
                />
                {
                    errors.item_name && 
                    <span className="text-red-500 text-sm mt-1">{errors.item_name}</span>
                }
            </div>

            <div className='input flex flex-col'>
                <label
                    className='block text-white text-sm font-barlow font-medium leading-6'
                    htmlFor='item_price'
                >
                    Giá bán
                </label>
                <input 
                    className='block w-full rounded-md border-0 p-2 text-gray-900 shadow-sm placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6'
                    name='item_price'
                    id='item_price'
                    value={editedProduct.item_price}
                    onChange={(e) => {handleInputChange("item_price", e.target.value) }}
                    autoComplete='off'
                    type='text'
                />
                {
                    errors.item_price && 
                    <span className="text-red-500 text-sm mt-1">{errors.item_price}</span>
                }
            </div>

            <div className='input flex flex-col'>
                <label
                    className='block text-white text-sm font-barlow font-medium leading-6'
                    htmlFor='item_cost'
                >
                    Giá nhập
                </label>
                <input 
                    className='block w-full rounded-md border-0 p-2 text-gray-900 shadow-sm placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6'
                    name='item_cost'
                    id='item_cost'
                    value={editedProduct.item_cost}
                    onChange={(e) => {handleInputChange("item_cost", e.target.value) }}
                    autoComplete='off'
                    type='text'
                />
                {
                    errors.item_cost && 
                    <span className="text-red-500 text-sm mt-1">{errors.item_cost}</span>
                }
            </div>

            <div className='input flex flex-col'>
                <label
                    className='block text-white text-sm font-barlow font-medium leading-6'
                    htmlFor='item_quantity'
                >
                    Số lượng
                </label>
                <input 
                    className='block w-full rounded-md border-0 p-2 text-gray-900 shadow-sm placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6'
                    name='item_quantity'
                    id='item_quantity'
                    value={editedProduct.item_quantity}
                    onChange={(e) => {handleInputChange("item_quantity", e.target.value) }}
                    autoComplete='off'
                    type='text'
                />
                {
                    errors.item_quantity && 
                    <span className="text-red-500 text-sm mt-1">{errors.item_quantity}</span>
                }
            </div>

            <div className='input flex flex-col'>
                <label
                    className='block text-white text-sm font-barlow font-medium leading-6'
                    htmlFor='item_expirationDate'
                >
                    Hạn sử dụng
                </label>
                <input 
                    className='block w-full rounded-md border-0 p-2 text-gray-900 shadow-sm placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6'
                    name='item_expirationDate'
                    id='item_expirationDate'
                    value={editedProduct.item_expirationDate}
                    onChange={(e) => {handleInputChange("item_expirationDate", e.target.value) }}
                    autoComplete='off'
                    type='date'
                />
                {
                    errors.item_expirationDate && 
                    <span className="text-red-500 text-sm mt-1">{errors.item_expirationDate}</span>
                }
            </div>
        </form>
        <div className='grid grid-cols-2 gap-4 mt-2'>
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
                disabled = {
                    Object.values(errors).some(error => error !== '')
                }
            />
        </div>
    </div>
    )
}

export default EditForm