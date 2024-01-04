import React from "react";
import UserApi from "../../../api/userApi";
import Header from "../../../components/Header/Header";

const StaffSetting = () => {
  const [staff, setStaff] = React.useState({});

  React.useEffect(() => {
    const fetchStaff = async () => {
      try {
        const token = localStorage.getItem('token');
        const clientId = localStorage.getItem('clientId');
        const res = await UserApi.getUserInfo({token, clientId}, clientId);
        
      } 
      catch (error) {
        
      }
    };

    fetchStaff();
  }, []);

  return (
    <div>
      {staff && (
        <div>
          <div className='flex justify-between'>
              <Header heading="Thông tin cá nhân"></Header>
          </div> 
          <div className="flex flex-col min-w-[700px] gap-5">
          <div className='input flex flex-col'>
                <label
                    className='block text-white text-sm font-barlow font-medium leading-6'
                    htmlFor='_id'
                >
                    Mã nhân viên
                </label>
                <input 
                    className='block w-full rounded-md border-0 p-2 text-gray-900 shadow-sm placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6'
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
                    className='block w-full rounded-md border-0 p-2 text-gray-900 shadow-sm placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6'
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
                    className='block w-full rounded-md border-0 p-2 text-gray-900 shadow-sm placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6'
                    name='email'
                    id='email'
                    value={staff.email}
                    autoComplete='off'
                    type='text'
                    readOnly={true}
                />
            </div>

            <div className='input flex flex-col'>
                <label
                    className='block text-white text-sm font-barlow font-medium leading-6'
                    htmlFor='password'
                >
                    Mật khẩu
                </label>
                <input 
                    className='block w-full rounded-md border-0 p-2 text-gray-900 shadow-sm placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6'
                    name='password'
                    id='password'
                    value={staff.password}
                    readOnly={true}
                    autoComplete='off'
                    type='password'
                />
            </div>

            <div className='input flex flex-col'>
                <label
                    className='block text-white text-sm font-barlow font-medium leading-6'
                    htmlFor='address'
                >
                    Địa chỉ
                </label>
                <input 
                    className='block w-full rounded-md border-0 p-2 text-gray-900 shadow-sm placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6'
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
                    className='block w-full rounded-md border-0 p-2 text-gray-900 shadow-sm placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6'
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
                    className='block w-full rounded-md border-0 p-2 text-gray-900 shadow-sm placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6'
                    name='phone'
                    id='phone'
                    value={staff.phone}
                    readOnly={true}
                    autoComplete='off'
                    type='text'
                />
            </div>
    
          </div>
        </div>
      )}
    </div>
    
  );
};

export default StaffSetting;
