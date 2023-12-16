import React from 'react';
import CustomButton from '../../../components/CustomButton/CustomButton';

const CreateDailyMenu = ({onCreateMenu, closePopUp}) => {
    const [inputList, setInputList] = React.useState([
        {name: '', image:'', cost: '', price: '', quantity: ''}
    ]);

    const handleInputChange = (e, index) => {
        const {name, value} = e.target;
        const list = [...inputList];
        list[index][name] = value;
        setInputList(list);
    }

    const handleAddRow = () => {
        setInputList([...inputList, {name: '', image:'', price: '', quantity: ''}]);
    }

    const handleRemoveRow = (index) => {
        const list = [...inputList];
        list.splice(index, 1);
        setInputList(list);
    }

    const handleCloseButton = () => {
        closePopUp();
    }

    const handleCreateImportNote = () => {
        //console.log(inputList);
        onCreateMenu(inputList)
        closePopUp();
    }

    return (
    <div className='flex flex-col'>
        <CustomButton
            title='Thêm'
            onAction={handleAddRow}
            className="p-1.5 mb-4 w-[15%] self-end"
        />
        <form 
            className="flex flex-col min-w-[600px] max-h-[600px] overflow-y-auto"
            autoComplete='off'
        >
        {
            inputList.map((row, index) => (
                <div key={index} className='row flex gap-5 my-2'>
                    <div className='input flex flex-col'>
                        <label
                            className='block text-white text-sm font-barlow font-medium leading-6'
                            htmlFor='name'
                        >
                            Tên sản phẩm
                        </label>
                        <input 
                            className='block w-full rounded-md border-0 p-2 text-gray-900 shadow-sm placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6'
                            name='name'
                            id='name'
                            value={row.name}
                            onChange={e => handleInputChange(e, index)}
                            autoComplete='off'
                            type='text'
                        />
                    </div>

                    <div className='input flex flex-col'>
                        <label
                            className='block text-white text-sm font-barlow font-medium leading-6'
                            htmlFor='image'
                        >
                            Link ảnh sản phẩm
                        </label>
                        <input 
                            className='block w-full rounded-md border-0 p-2 text-gray-900 shadow-sm placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6'
                            name='image'
                            id='image'
                            value={row.image}
                            onChange={e => handleInputChange(e, index)}
                            autoComplete='off'
                            type='text'
                        />
                    </div>

                    <div className='input flex flex-col'>
                        <label
                            className='block text-white text-sm font-barlow font-medium leading-6'
                            htmlFor='cost'
                        >
                            Giá nhập
                        </label>
                        <input 
                            className='block w-full rounded-md border-0 p-2 text-gray-900 shadow-sm placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6'
                            name='cost'
                            id='cost'
                            value={row.cost}
                            onChange={e => handleInputChange(e, index)}
                            autoComplete='off'
                            type='text'
                            inputMode="numeric" 
                            pattern="[0-9]*"
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
                            className='block w-full rounded-md border-0 p-2 text-gray-900 shadow-sm placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6'
                            name='price'
                            id='price'
                            value={row.price}
                            onChange={e => handleInputChange(e, index)}
                            autoComplete='off'
                            type='text'
                            inputMode="numeric" 
                            pattern="[0-9]*"
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
                            className='block w-full rounded-md border-0 p-2 text-gray-900 shadow-sm placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6'
                            name='quantity'
                            id='quantity'
                            value={row.quantity}
                            onChange={e => handleInputChange(e, index)}
                            autoComplete='off'
                            type='text'
                            inputMode="numeric" 
                            pattern="[0-9]*"
                        />
                    </div>

                    {
                        //Keep at least one row
                        inputList.length !== 1 && 
                        <div className='flex items-end'>
                            <CustomButton
                                title='Xóa'
                                variant='danger'
                                onAction={()=>handleRemoveRow(index)}
                                className="px-5 py-2 me-4"
                            />
                        </div>
                    }
                </div>
            ))
        }
            
        </form>

        <div className='inline-grid grid-cols-2 mt-10 gap-4'>
            <CustomButton
                title='Hủy'
                variant='secondary'
                onAction={handleCloseButton}
                className="py-1.5"
            />
            <CustomButton
                title='Tạo'
                variant='tertiary'
                onAction={handleCreateImportNote}
                className="py-1.5"
            />
        </div>
    </div>
    )
} 

export default CreateDailyMenu;