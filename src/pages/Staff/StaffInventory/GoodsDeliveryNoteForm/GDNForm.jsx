import React from 'react';
import InventoryApi from '../../../../api/inventoryApi';
import CustomButton from '../../../../components/CustomButton/CustomButton'

const GDNForm = ({closePopUp}) => {
    const [inputList, setInputList] = React.useState([
        {inventoryItem: '', price: '', item_quantity: ''}
    ]);

    const [originalList, setOriginalList] = React.useState([]);

    //Get list of products in the inventory
    React.useEffect(() => {
        const getOriginalList = async () => {
            const token = localStorage.getItem('token');
            const clientId = localStorage.getItem('clientId');
            try{
                const res = await InventoryApi.getAllInventoryItems({token, clientId});
                const data = res.data;
                setOriginalList(data);
            }
            catch(e){
                console.log(e);
            }
        }
        getOriginalList();
    }, [])

    const handleNameInputChange = (e, index) => {
        const { value } = e.target;
        const list = [...inputList];

        const selectedProductId = value;
        const selectedProduct = originalList.find(product => product._id === selectedProductId);
        
        if (selectedProduct) {
            list[index]['id'] = selectedProduct._id;
            list[index]['name'] = selectedProduct.inventoryItem_name;
            setInputList(list);
        }
    };
    
    const handleInputChange = (e, index) => {
        const { name, value } = e.target;
        const list = [...inputList];
        
        list[index][name] = value;
        setInputList(list);
    };

    const handleAddRow = () => {
        setInputList([...inputList, {id: '', name: '', salePrice: '', saleQuantity: ''}]);
    }

    const handleRemoveRow = (index) => {
        const list = [...inputList];
        list.splice(index, 1);
        setInputList(list);
    }

    const handleCloseButton = () => {
        closePopUp();
    }

    const handleCreateExportNote = () => {
        //console.log(inputList);
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
                <div key={index} className='row flex my-2 gap-5'>
                    <div className='input flex flex-col'>
                        <label
                            className='block text-white text-sm font-barlow font-medium leading-6'
                            htmlFor='name'
                        >
                            Tên sản phẩm
                        </label>
                        <select
                            className='block w-full rounded-md border-0 py-2 px-7 text-gray-900 shadow-sm placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6'
                            name='name'
                            id='name'
                            onChange={e => handleNameInputChange(e, index)}
                            autoComplete='off'
                        >
                            <option>-- Chọn sản phẩm --</option>
                            {
                                originalList.map((product) => (
                                    <option key={product.id} value={product.id}>{product.name}</option>
                                ))
                            }
                        </select>
                    </div>

                    <div className='input flex flex-col'>
                        <label
                            className='block text-white text-sm font-barlow font-medium leading-6'
                            htmlFor='salePrice'
                        >
                            Đơn giá
                        </label>
                        <input 
                            className='block w-full rounded-md border-0 p-2 text-gray-900 shadow-sm placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6'
                            name='salePrice'
                            id='salePrice'
                            min='1'
                            value={row.salePrice}
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
                            htmlFor='saleQuantity'
                        >
                            Số lượng
                        </label>
                        <input 
                            className='block w-full rounded-md border-0 p-2 text-gray-900 shadow-sm placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6'
                            name='saleQuantity'
                            id='saleQuantity'
                            value={row.saleQuantity}
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
                onAction={handleCreateExportNote}
                className="py-1.5"
            />
        </div>
    </div>
    )
}

export default GDNForm