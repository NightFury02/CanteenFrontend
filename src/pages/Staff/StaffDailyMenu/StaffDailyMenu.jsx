import React from 'react';
import axios from 'axios'
import Header from '../../../components/Header/Header'
import CustomButton from '../../../components/CustomButton/CustomButton';
import Popup from '../../../components/Popup/Popup';
import CreateDailyMenu from './CreateDailyMenu';
import DailyMenu from './DailyMenu';
import Searchbar from '../../../components/SearchBar/SearchBar';

const StaffDailyMenu = () => {
    const [isMenuPopUpOpen, setMenuPopUpOpen] = React.useState(false);
    const [isDeletePopUpOpen, setDeletePopUpOpen] = React.useState(false);
    const [menu, setMenu] = React.useState([]);
    const [originalMenu, setOriginalMenu] = React.useState([]);

    React.useEffect(()=>{
        const fetchMenuData = async () => {
            const data = await axios.get(`https://reqres.in/api/users?per_page=12`);
            setOriginalMenu(data.data.data);
            setMenu(data.data.data);
        };
        fetchMenuData();
    }, [])

    const handleCreateMenu = async (inputList) => {
        console.log(inputList);
        //use post method here to create new menu

        //Get new menu
        const data = await axios.get(`https://reqres.in/api/users?per_page=12`);
        setOriginalMenu(data.data.data);
        setMenu(data.data.data);
    }

    const handleOnDeleteMenu = async () => {
        //Call api to delete menu
        setDeletePopUpOpen(false);
        setOriginalMenu([]);
        setMenu([]);
    }

    const handleSearch = async (query) => {
        //console.log(query);
        if (menu.length > 0) {
            if (query !== ''){
                const searchResult = originalMenu.filter((item) => item.last_name.toLowerCase().includes(query.toLowerCase()));
                setMenu(searchResult);
            }
            else{
                setMenu(originalMenu);
            }
        }
    }

    //Temp data for menu:
    const tempMenu = [
        {
            id: '1223',
            name: 'Táo',
            image: 'https://waapple.org/wp-content/uploads/2021/06/Variety_Granny-Smith-transparent-658x677.png',
            cost: 8000,
            price: 10000,
            quantity: 200,
            expirationDate: '2023-12-29'
        },
        {
            id: '1224',
            name: 'Coca',
            image: 'https://thegioidouong.net/wp-content/uploads/2021/06/coca-300ml-chai-nhua.jpg',
            cost: 10000,
            price: 15000,
            quantity: 150,
            expirationDate: '2024-01-01'
        },
        {
            id: '1225',
            name: 'Oreo',
            image: 'https://cooponline.vn/wp-content/uploads/2020/04/banh-quy-socola-oreo-socola-119-6g-20220927.jpg',
            cost: 10000,
            price: 15000,
            quantity: 150,
            expirationDate: '2024-01-01'
        },
        {
            id: '1226',
            name: 'Táo',
            image: 'https://waapple.org/wp-content/uploads/2021/06/Variety_Granny-Smith-transparent-658x677.png',
            cost: 8000,
            price: 10000,
            quantity: 200,
            expirationDate: '2023-12-29'
        },
        {
            id: '1227',
            name: 'Coca',
            image: 'https://thegioidouong.net/wp-content/uploads/2021/06/coca-300ml-chai-nhua.jpg',
            cost: 10000,
            price: 15000,
            quantity: 150,
            expirationDate: '2024-01-01'
        },
        {
            id: '1228',
            name: 'Oreo',
            image: 'https://cooponline.vn/wp-content/uploads/2020/04/banh-quy-socola-oreo-socola-119-6g-20220927.jpg',
            cost: 10000,
            price: 15000,
            quantity: 150,
            expirationDate: '2024-01-01'
        },
        {
            id: '1229',
            name: 'Táo',
            image: 'https://waapple.org/wp-content/uploads/2021/06/Variety_Granny-Smith-transparent-658x677.png',
            cost: 8000,
            price: 10000,
            quantity: 200,
            expirationDate: '2023-12-29'
        },
        {
            id: '1230',
            name: 'Coca',
            image: 'https://thegioidouong.net/wp-content/uploads/2021/06/coca-300ml-chai-nhua.jpg',
            cost: 10000,
            price: 15000,
            quantity: 150,
            expirationDate: '2024-01-01'
        },
        {
            id: '1231',
            name: 'Oreo',
            image: 'https://cooponline.vn/wp-content/uploads/2020/04/banh-quy-socola-oreo-socola-119-6g-20220927.jpg',
            cost: 10000,
            price: 15000,
            quantity: 150,
            expirationDate: '2024-01-01'
        }
    ];
    //console.log(menu)

    return (
    <>
        <div className='flex justify-between'>
            <Header heading="Menu hàng ngày"></Header>
            <div className='p-3'>
                <Searchbar
                  handleSearch={handleSearch}  
                  placeholder='Tìm tên...'
                />
            </div>
        </div> 
        <div className='ms-3 flex'>
            <CustomButton 
                title={'Tạo thực đơn hằng ngày'}
                className="p-2 me-5"
                onAction={() => {setMenuPopUpOpen(true)}}
            />
            {
                menu.length > 0 &&
                <CustomButton 
                    title={'Xóa thực đơn'}
                    variant='delete'
                    className="p-2 me-5"
                    onAction={() => {setDeletePopUpOpen(true)}}
                />
            }
            
        </div>
        <div className='menu border-0 rounded-md ms-3 mt-3'>
            {
                menu.length > 0 &&
                <DailyMenu data={menu}></DailyMenu>
            }
        </div>

        <Popup
            title="Tạo menu"
            isOpen={isMenuPopUpOpen}
            handleCloseBtnClick={() => {setMenuPopUpOpen(false)}}
        >
            <CreateDailyMenu onCreateMenu={handleCreateMenu} closePopUp={()=>{setMenuPopUpOpen(false)}}></CreateDailyMenu>
        </Popup>

        <Popup
            title="Xóa menu"
            isOpen={isDeletePopUpOpen}
            handleCloseBtnClick={() => {setDeletePopUpOpen(false)}}
        >
            {
                <div className='flex flex-col'>
                <h2 className='text-white pb-5'>Bạn có chắc chắn muốn xóa menu?</h2>
                <div className='flex justify-end gap-2'>
                    <CustomButton
                        title='Hủy'
                        variant='secondary'
                        onAction={()=>{setDeletePopUpOpen(false)}}
                        className="py-1 px-4"
                    />
                    <CustomButton
                        title='Xác nhận'
                        onAction={handleOnDeleteMenu}
                        className="py-1 px-4"
                    />
                </div>
                </div>
            }
        </Popup>

    </>
    )
}

export default StaffDailyMenu;