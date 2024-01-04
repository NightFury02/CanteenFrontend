import React from "react";
import UserApi from "../../../api/userApi";
import Header from "../../../components/Header/Header";
import Popup from "../../../components/Popup/Popup";
import EditForm from "./EditForm";
import CustomButton from "../../../components/CustomButton/CustomButton";
import { toDatePickerFormat } from "../../../utils/util";

const StaffSetting = () => {
  const [isUpdatePopUpOpen, setUpdatePopUpOpen] = React.useState(false); 
  const [staff, setStaff] = React.useState({
    _id: '',
    name: '',
    email: '',
    password: '',
    address: '',
    birthday: '',
    phone: '',
  });

  React.useEffect(() => {
    const fetchStaff = async () => {
      try {
        const token = localStorage.getItem('token');
        const clientId = localStorage.getItem('clientId');
        const res = await UserApi.getUserInfo({ token, clientId }, clientId);
  
        const {
          attributes: { address, birthday, phone },
          ...rest
        } = res.data;
  
        const formattedBirthday = toDatePickerFormat(birthday);
        const newData = { ...rest, address, birthday: formattedBirthday, phone };
  
        //console.log(newData);
        setStaff(newData);
      } catch (error) {
        // Handle errors
      }
    };
  
    fetchStaff();
  }, []);
  

  const handleUpdateInfo = (updatedData) => {
    const updateStaff = async () => {
      try {
        setUpdatePopUpOpen(false);
        const token = localStorage.getItem('token');
        const clientId = localStorage.getItem('clientId');
        console.log(updatedData);
        await UserApi.updateUserInfo({token, clientId}, updatedData);

        //Update UI
        const res = await UserApi.getUserInfo({ token, clientId }, clientId);
        const {
          attributes: { address, birthday, phone },
          ...rest
        } = res.data;
        const formattedBirthday = toDatePickerFormat(birthday);
        const newData = { ...rest, address, birthday: formattedBirthday, phone };
        setStaff(newData);
      } 
      catch (error) {
        //
      }
    }
    updateStaff();
  }

  return (
    <div>
      {staff && (
        <div className="flex flex-col">
          <div className='flex justify-between'>
              <Header heading="Thông tin cá nhân"></Header>
              <div className='p-3'>
                <CustomButton 
                  title={'Cập nhật thông tin'}
                  className="p-2 me-5"
                  onAction={() => {setUpdatePopUpOpen(true)}}
                />
              </div>
          </div> 
          <div className="flex flex-col gap-5 bg-slate-600 min-w-[800px] p-4 border-0 rounded-md self-center">
          <div className='input flex flex-col'>
                <label
                    className='block text-white text-sm font-barlow font-medium leading-6'
                    htmlFor='_id'
                >
                    Mã nhân viên
                </label>
                <input 
                    className='block w-full rounded-md border-0 p-2 text-gray-900 shadow-sm placeholder:text-gray-400 sm:text-sm sm:leading-6 ring-0'
                    name='_id'
                    id='_id'
                    value={staff._id}
                    autoComplete='off'
                    type='text'
                    readOnly={true}
                />
            </div>

            <div className='input flex flex-col'>
                <label
                    className='block text-white text-sm font-barlow font-medium leading-6'
                    htmlFor='name'
                >
                    Tên nhân viên
                </label>
                <input 
                    className='block w-full rounded-md border-0 p-2 text-gray-900 shadow-sm placeholder:text-gray-400 ring-0 sm:text-sm sm:leading-6'
                    name='name'
                    id='name'
                    value={staff.name}
                    autoComplete='off'
                    type='text'
                    readOnly={true}
                />
            </div>

            <div className='input flex flex-col'>
                <label
                    className='block text-white text-sm font-barlow font-medium leading-6'
                    htmlFor='email'
                >
                    Email
                </label>
                <input 
                    className='block w-full rounded-md border-0 p-2 text-gray-900 shadow-sm placeholder:text-gray-400 ring-0 sm:text-sm sm:leading-6'
                    name='email'
                    id='email'
                    value={staff.email}
                    autoComplete='off'
                    type='text'
                    readOnly={true}
                />
            </div>

            {/* <div className='input flex flex-col'>
                <label
                    className='block text-white text-sm font-barlow font-medium leading-6'
                    htmlFor='password'
                >
                    Mật khẩu
                </label>
                <input 
                    className='block w-full rounded-md border-0 p-2 text-gray-900 shadow-sm placeholder:text-gray-400 ring-0 sm:text-sm sm:leading-6'
                    name='password'
                    id='password'
                    value={staff.password}
                    readOnly={true}
                    autoComplete='off'
                    type='password'
                />
            </div> */}

            <div className='input flex flex-col'>
                <label
                    className='block text-white text-sm font-barlow font-medium leading-6'
                    htmlFor='address'
                >
                    Địa chỉ
                </label>
                <input 
                    className='block w-full rounded-md border-0 p-2 text-gray-900 shadow-sm placeholder:text-gray-400 ring-0 sm:text-sm sm:leading-6'
                    name='address'
                    id='address'
                    value={staff.address}
                    readOnly={true}
                    autoComplete='off'
                    type='text'
                />
            </div>

            <div className='input flex flex-col'>
                <label
                    className='block text-white text-sm font-barlow font-medium leading-6'
                    htmlFor='birthday'
                >
                    Ngày sinh
                </label>
                <input 
                    className='block w-full rounded-md border-0 p-2 text-gray-900 shadow-sm placeholder:text-gray-400 ring-0 sm:text-sm sm:leading-6'
                    name='birthday'
                    id='birthday'
                    value={staff.birthday}
                    readOnly={true}
                    autoComplete='off'
                    type='date'
                />
            </div>

            <div className='input flex flex-col'>
                <label
                    className='block text-white text-sm font-barlow font-medium leading-6'
                    htmlFor='phone'
                >
                    Số điện thoại
                </label>
                <input 
                    className='block w-full rounded-md border-0 p-2 text-gray-900 shadow-sm placeholder:text-gray-400 ring-0 sm:text-sm sm:leading-6'
                    name='phone'
                    id='phone'
                    value={staff.phone}
                    readOnly={true}
                    autoComplete='off'
                    type='text'
                />
            </div>
    
          </div>

          <Popup
            title="Chỉnh sửa thông tin cá nhân"
            isOpen={isUpdatePopUpOpen}
            handleCloseBtnClick={() => {setUpdatePopUpOpen(false)}}
          >
              <EditForm target={staff} onClose={()=>{setUpdatePopUpOpen(false)}} onSubmit={handleUpdateInfo}></EditForm>
          </Popup>
        </div>
      )}
    </div>
  );
};

export default StaffSetting;
