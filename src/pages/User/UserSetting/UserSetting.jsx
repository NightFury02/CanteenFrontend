import React from "react";
import UserApi from "../../../api/userApi";
import Header from "../../../components/Header/Header";
import Popup from "../../../components/Popup/Popup";
import ResetPasswordForm from "./ResetPasswordForm";
import CustomButton from "../../../components/CustomButton/CustomButton";
import { toDatePickerFormat } from "../../../utils/util";
import { Loading } from "../../../components";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const UserSetting = () => {
  const token = localStorage.getItem('token');
  const clientId = localStorage.getItem('clientId');
  const [isPasswortPopUpOpen, setPasswortPopUpOpen] = React.useState(false);
  const [isLoading, setLoading] = React.useState(false);
  const [staff, setStaff] = React.useState({
    _id: '',
    name: '',
    email: '',
    password: '',
  });

  React.useEffect(() => {
    const fetchStaff = async () => {
      try {
        setLoading(true);
        const token = localStorage.getItem('token');
        const clientId = localStorage.getItem('clientId');
        const res = await UserApi.getUserInfo({ token, clientId }, clientId);
        setStaff(res.data);
        setLoading(false);
      } catch (error) {
        // Handle errors
      }
    };
  
    fetchStaff();
  }, []);
  
  const handleUpdatePassword = async(newPassword) =>{
    try {
      const token = localStorage.getItem('token');
      const clientId = localStorage.getItem('clientId');
      //console.log(updatedData);
      const res = await UserApi.updateUserInfo({token, clientId}, newPassword);
      if (res.error){
        toast.error('Lỗi cập nhật mật khẩu', {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
      }
      else
      {
        setLoading(true);
        UserApi.logout({token, clientId}).then(() => {
          localStorage.removeItem('token');
          localStorage.removeItem('clientId');
          setLoading(false);
          navigate("/login");
        });
      }
      
    } 
    catch (error) {
      
    }
  }

  return (
    <div>
      {staff && (
        <div className="flex flex-col">
          <div className='flex justify-between'>
              <Header heading="Thông tin cá nhân"></Header>
              <div className='p-3 flex max-h-[70px] self-center'>
                <CustomButton 
                  title={'Đổi mật khẩu'}
                  className="p-3 me-5"
                  onAction={() => {setPasswortPopUpOpen(true)}}
                />
              </div>
          </div> 
          <div className="flex flex-col gap-5 bg-slate-600 min-w-[800px] p-4 border-0 rounded-md self-center mt-7">
          <div className='input flex flex-col'>
                <label
                    className='block text-white text-sm font-barlow font-medium leading-6'
                    htmlFor='_id'
                >
                    Mã người dùng
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
                    Họ và tên
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
          </div>

          <Popup
            title="Đổi mật khẩu"
            isOpen={isPasswortPopUpOpen}
            handleCloseBtnClick={() => {setPasswortPopUpOpen(false)}}
          >
              <ResetPasswordForm onClose={()=>{setPasswortPopUpOpen(false)}} onSubmit={handleUpdatePassword}></ResetPasswordForm>
          </Popup>

          <div>
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover={false}
                theme="colored"
                />
          </div>
        </div> 
      )}
      {isLoading && <Loading/>}
    </div>
  );
};

export default UserSetting;
