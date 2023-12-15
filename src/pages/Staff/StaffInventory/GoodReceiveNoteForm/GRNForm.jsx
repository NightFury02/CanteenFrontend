import React from 'react';
import {FormControl, FormLabel, TextField} from '@mui/material'
import CustomButton from '../../../../components/CustomButton/CustomButton'
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

const GRNForm = () => {
    const [list, setList] = React.useState([
        {id: '', email: '', first_name: '', last_name: ''}
    ]);

    return (
        <form 
            className="flex flex-col min-w-[600px]"
            autoComplete='off'
        >
            <div className='row flex gap-2'>
                <div className='input flex flex-col'>
                    <label
                        className='block text-white text-sm font-barlow font-medium leading-6'
                        htmlFor='name'
                    >
                        Tên sản phẩm
                    </label>
                    <input 
                        className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                        name='name'
                        id='name'
                        value={name}
                        onChange={handleChange}
                        autoComplete='off'
                        type='text'
                    />
                </div>

                <div className='input flex flex-col'>
                    <label
                        className='block text-white text-sm font-barlow font-medium leading-6'
                        htmlFor='price'
                    >
                        Đơn giá
                    </label>
                    <input 
                        className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                        name='price'
                        id='price'
                        value={name}
                        onChange={handleChange}
                        autoComplete='off'
                        type='number'
                    />
                </div>
                
                <div className='input flex flex-col'>
                    <label
                        className='block text-white text-sm font-barlow font-medium leading-6'
                        htmlFor='quantity'
                    >
                        Số lượng
                    </label>
                    <input 
                        className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                        name='quantity'
                        id='quantity'
                        value={name}
                        onChange={handleChange}
                        autoComplete='off'
                        type='number'
                    />
                </div>

                <div className='input flex flex-col'>
                    <label
                        className='block text-white text-sm font-barlow font-medium leading-6'
                        htmlFor='expiredDate'
                    >
                        Hạn sử dụng
                    </label>
                    <input 
                        className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                        name='expiredDate'
                        id='expiredDate'
                        value={name}
                        onChange={handleChange}
                        autoComplete='off'
                        type='date'
                    />
                </div>
            </div>


        </form>
    )



}

export default GRNForm