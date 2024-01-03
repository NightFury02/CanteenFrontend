import React from 'react';
import Header from "../../../components/Header/Header"
import CustomButton from '../../../components/CustomButton/CustomButton';
import PopUp from '../../../components/Popup/Popup';
import StaffTable from './StaffTable/StaffTable';
import AddStaffForm from './AddStaffForm/AddStaffForm';
import Searchbar from '../../../components/SearchBar/SearchBar';
import userApi from '../../../api/userApi';

const token = localStorage.getItem("token");
const clientId = localStorage.getItem("clientId");

const AdminManagement = () => {
    const [openAddPopup, setOpenAddPopup] = React.useState(false);
    const [rows, setRows] = React.useState([]);
    const [originalRows, setOriginalRows] = React.useState([]);

    const handleAddOpenChange = (isOpen) => {
        setOpenAddPopup(isOpen);
    };

    const headCells = [
        {
            id: '_id',
            numeric: false,
            disablePadding: true,
            label: 'Mã người dùng',
        },
        {
            id: 'name',
            numeric: false,
            disablePadding: true,
            label: 'Tên nhân viên',
        },
        {
            id: 'birthday',
            numeric: false,
            disablePadding: true,
            label: 'Ngày sinh',
        },
        {
            id: 'phone',
            numeric: false,
            disablePadding: true,
            label: 'Số điện thoại',
        },
        {
            id: 'address',
            numeric: false,
            disablePadding: true,
            label: 'Địa chỉ',
        },
    ];

    React.useEffect(() =>{
        const fetchStaffs = async () => {
            try {
                const res = await userApi.getStaffList({token, clientId});
                const transformedData = res.data.map(item => ({
                    ...item,
                    ...item.attributes // Spread attributes directly
                }));
          
                setRows(transformedData);
                setOriginalRows(transformedData);
            } catch (error) {
            console.error('Error fetching staffs:', error);
            }
        }
        fetchStaffs()
    }, []);

    const handleSearchBar = async (query) => {
        console.log(query);
        if (originalRows.length > 0) {
            if (query !== ""){
                const searchResult = originalRows.filter((item) => item.name.toLowerCase().includes(query.toLowerCase()));
                setRows(searchResult);
            }
            else{
            setRows(originalRows);
            }
        }
    };
    
    return (
        <div>
            <div className='flex justify-between'>
                <Header heading="Quản lý nhân viên"></Header>
                <div className='p-3'>
                    <Searchbar
                    handleSearch={handleSearchBar}  
                    placeholder='Tìm kiếm nhân viên...'
                    />
                </div>
            </div>
            <div className="ml-2">
                <CustomButton
                    title={'Thêm nhân viên'}
                    variant={'primary'}
                    className={'p-2'}
                    onAction={() => handleAddOpenChange(true)}
                />
            </div>

            <PopUp
                title="Thêm nhân viên"
                isOpen={openAddPopup}
                handleCloseBtnClick={() => handleAddOpenChange(false)}
            >
                {<AddStaffForm
                setOpen={() => handleAddOpenChange(false)}
                />}
            </PopUp>
            <div className="mt-2 p-2">
            <StaffTable headCells={headCells} title={''} rows={rows}/>
            </div>
        </div>
    );
};

export default AdminManagement;