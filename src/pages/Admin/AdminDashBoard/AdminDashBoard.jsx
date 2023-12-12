import React, { useState } from 'react';
import Header from "../../../components/Header/Header"
import Table from "../../../components/Table/Table"
import PopupButton from '../../../components/PopupButton/PopupButton';
import CurrentDate from '../../../components/CurrentDate/CurrentDate';
import { MoneyIcon, IncreaseIcon, DecreaseIcon, Management, OrderIcon } from '../../../assets/svgs';

const AdminDashBoard = () => {
  const popup = () =>{
    console.log('popup');
  }
  return (
    <div>
      <div className="flex justify-between">
        <div className="flex flex-col p-3">
            <div className="font-barlow text-4xl text-white">
              Dashboard
            </div>
            <div className="mt-2">
              <CurrentDate />
            </div>
        </div>
      </div>
      <div className="flex gap-4">
        <div className='box-border text-white bg-dark_bg border-dark_bg h-fit w-fit p-5 border-4 rounded-lg'>
          <div className='flex items-center gap-2'>
            <MoneyIcon className='w-8 bg-dark_line m-1 rounded-md'/>
            <span className='text-emerald-500'>+32.40%</span>
            <IncreaseIcon className='w-6 bg-emerald-800 rounded-full'/>
          </div>
          <span className='text-3xl'>1,234,000đ</span><br></br>
          Doanh thu
        </div>
        <div className='box-border text-white bg-dark_bg border-dark_bg h-fit w-fit p-5 border-4 rounded-lg'>
          <div className='flex items-center gap-2'>
            <OrderIcon className='w-8 bg-dark_line m-1 rounded-md'/>
            <span className='text-red-400'>-12.40%</span>
            <DecreaseIcon className='w-6 bg-red-800 rounded-full'/>
          </div>
          <span className='text-3xl'>2,345</span><br></br>
          Tổng món ăn đã đặt
        </div>
        <div className='box-border text-white bg-dark_bg border-dark_bg h-fit w-fit p-5 border-4 rounded-lg'>
          <div className='flex items-center gap-2'>
            <Management className='w-8 bg-dark_line m-1 p-1 rounded-md'/>
            <span className='text-emerald-500'>+2.40%</span>
            <IncreaseIcon className='w-6 bg-emerald-800 rounded-full'/>
          </div>
          <span className='text-3xl'>1,234</span><br></br>
          Tổng người dùng hôm nay
        </div>
      </div>
      <div className='bg-dark_bg h-auto p-10 mt-5 rounded-lg text-white'>
        <span className='text-xl'>Báo cáo</span><br></br>
        <PopupButton
          title="Báo cáo kho theo ngày"
          header="Báo cáo kho theo ngày"
          className="p-3 mt-3 bg-dark_line w-80 rounded-lg"
          cancelTitle='Thoát'
          cancelClassName='absolute bottom-2 left-1/2 transform -translate-x-1/2 pt-1 pb-1 pl-16 pr-16 bg-emerald-700 text-white border border-emerald-700 rounded hover:bg-emerald-500'
          data={<>
              <div>Họ và tên</div>
              <input className='w-11/12 pl-2 border border-white rounded bg-dark_bg'></input>
          </>    
          }
          >
        </PopupButton><br></br>
        <PopupButton
            title="Báo cáo doanh thu theo ngày"
            header="Báo cáo doanh thu theo ngày"
            className="p-3 mt-3 bg-dark_line w-80 rounded-lg"
            cancelTitle='Thoát'
            cancelClassName='absolute bottom-2 left-1/2 transform -translate-x-1/2 pt-1 pb-1 pl-16 pr-16 bg-emerald-700 text-white border border-emerald-700 rounded hover:bg-emerald-500'
            data={<>
                <div>Họ và tên</div>
                <input className='w-11/12 pl-2 border border-white rounded bg-dark_bg'></input>
            </>    
            }
            >
        </PopupButton><br></br>
        <PopupButton
            title="Báo cáo doanh thu theo tháng"
            header="Báo cáo doanh thu theo tháng"
            className="p-3 mt-3 bg-dark_line w-80 rounded-lg"
            cancelTitle='Thoát'
            cancelClassName='absolute bottom-2 left-1/2 transform -translate-x-1/2 pt-1 pb-1 pl-16 pr-16 bg-emerald-700 text-white border border-emerald-700 rounded hover:bg-emerald-500'
            data={<>
                <div>Họ và tên</div>
                <input className='w-11/12 pl-2 border border-white rounded bg-dark_bg'></input>
            </>    
            }
            >
        </PopupButton>
      </div>
    </div>
  );
};

export default AdminDashBoard;