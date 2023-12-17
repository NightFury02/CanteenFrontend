import React from 'react';
import Header from '../../../components/Header/Header';
import OrderList from './OrderList';
import CustomButton from '../../../components/CustomButton/CustomButton';
import PopUp from '../../../components/Popup/Popup';
import Searchbar from '../../../components/SearchBar/SearchBar';

const StaffDashboard = () => {
  const [openMonthlyPopup, setOpenMonthlyPopup] = React.useState(false);
  const [openDailyPopup, setOpenDailyPopup] = React.useState(false);
  const [rows, setRows] = React.useState([]);
  const [originalRows, setOriginalRows] = React.useState([]);

  const handleMonthlyConfirm = () => {
    console.log('create monthly report');
    setOpenMonthlyPopup(false);
  };
  const handleDailyConfirm = () => {
    console.log('create daily report');
    setOpenDailyPopup(false);
  };
  const headCells = [
    {
      id: 'id',
      disablePadding: true,
      label: 'Mã đơn',
    },
    {
      id: 'createDate',
      disablePadding: true,
      label: 'Thời gian nhận',
    },
    {
      id: 'total',
      disablePadding: true,
      label: 'Tổng tiền',
    },
    {
      id: 'status',
      disablePadding: true,
      label: 'Trạng thái',
    },
  ];

  React.useEffect(() => {
    const fetchOrderList = async () => {
        const url = `https://reqres.in/api/users`;
        try {
          // const res = await axios.get(url);
          // const data = res.data;
          const data = [
              {
                  id: '1', 
                  staffName: 'Phung Le Hoang Ngoc', 
                  createDate: '2023-12-20', 
                  total: 1500000, 
                  data: [
                      {
                          id: '1223',
                          name: 'Táo',
                          image: 'https://waapple.org/wp-content/uploads/2021/06/Variety_Granny-Smith-transparent-658x677.png',
                          price: 10000,
                          quantity: 200,
                          expirationDate: '2023-12-29'
                      },
                      {
                          id: '1224',
                          name: 'Coca',
                          image: 'https://thegioidouong.net/wp-content/uploads/2021/06/coca-300ml-chai-nhua.jpg',
                          price: 15000,
                          quantity: 150,
                          expirationDate: '2024-01-01'
                      },
                      {
                          id: '1225',
                          name: 'Oreo',
                          image: 'https://cooponline.vn/wp-content/uploads/2020/04/banh-quy-socola-oreo-socola-119-6g-20220927.jpg',
                          price: 15000,
                          quantity: 150,
                          expirationDate: '2024-01-01'
                      }
                  ]
              },

              {
                  id: '2', 
                  staffName: 'Phung Le Hoang Ngoc', 
                  createDate: '2023-12-20', 
                  total: 1500000, 
                  data: [
                      {
                          id: '1223',
                          name: 'Táo',
                          image: 'https://waapple.org/wp-content/uploads/2021/06/Variety_Granny-Smith-transparent-658x677.png',
                          price: 10000,
                          quantity: 200,
                          expirationDate: '2023-12-29'
                      },
                      {
                          id: '1224',
                          name: 'Coca',
                          image: 'https://thegioidouong.net/wp-content/uploads/2021/06/coca-300ml-chai-nhua.jpg',
                          price: 15000,
                          quantity: 150,
                          expirationDate: '2024-01-01'
                      },
                      {
                          id: '1225',
                          name: 'Oreo',
                          image: 'https://cooponline.vn/wp-content/uploads/2020/04/banh-quy-socola-oreo-socola-119-6g-20220927.jpg',
                          price: 15000,
                          quantity: 150,
                          expirationDate: '2024-01-01'
                      }
                  ]
              },

              {
                  id: '3', 
                  staffName: 'Phung Le Hoang Ngoc', 
                  createDate: '2023-12-20', 
                  total: 1500000, 
                  data: [
                      {
                          id: '1223',
                          name: 'Táo',
                          image: 'https://waapple.org/wp-content/uploads/2021/06/Variety_Granny-Smith-transparent-658x677.png',
                          price: 10000,
                          quantity: 200,
                          expirationDate: '2023-12-29'
                      },
                      {
                          id: '1224',
                          name: 'Coca',
                          image: 'https://thegioidouong.net/wp-content/uploads/2021/06/coca-300ml-chai-nhua.jpg',
                          price: 15000,
                          quantity: 150,
                          expirationDate: '2024-01-01'
                      },
                      {
                          id: '1225',
                          name: 'Oreo',
                          image: 'https://cooponline.vn/wp-content/uploads/2020/04/banh-quy-socola-oreo-socola-119-6g-20220927.jpg',
                          price: 15000,
                          quantity: 150,
                          expirationDate: '2024-01-01'
                      }
                  ]
              },

              {
                  id: '4', 
                  staffName: 'Phung Le Hoang Ngoc', 
                  createDate: '2023-12-20', 
                  total: 1500000, 
                  data: [
                      {
                          id: '1223',
                          name: 'Táo',
                          image: 'https://waapple.org/wp-content/uploads/2021/06/Variety_Granny-Smith-transparent-658x677.png',
                          price: 10000,
                          quantity: 200,
                          expirationDate: '2023-12-29'
                      },
                      {
                          id: '1224',
                          name: 'Coca',
                          image: 'https://thegioidouong.net/wp-content/uploads/2021/06/coca-300ml-chai-nhua.jpg',
                          price: 15000,
                          quantity: 150,
                          expirationDate: '2024-01-01'
                      },
                      {
                          id: '1225',
                          name: 'Oreo',
                          image: 'https://cooponline.vn/wp-content/uploads/2020/04/banh-quy-socola-oreo-socola-119-6g-20220927.jpg',
                          price: 15000,
                          quantity: 150,
                          expirationDate: '2024-01-01'
                      }
                  ]
              }
          ];
          setRows(data);
          setOriginalRows(data);
        } catch (error) {
          console.error('Error fetching expired products:', error);
        }
    }
    fetchOrderList()
  }, []);

  const handleSearchBar = async (query) => {
    console.log(query);
    if (originalRows.length > 0) {
        if (query !== ""){
            const searchResult = originalRows.filter((item) => item.id.toLowerCase().includes(query.toLowerCase()));
            setRows(searchResult);
        }
        else{
          setRows(originalRows);
        }
    }
  };

  return (
  <>
    <div className='flex justify-between'>
      <Header heading="Dashboard"></Header>
      <div className='p-3'>
          <Searchbar
            handleSearch={handleSearchBar}  
            placeholder='Tìm kiếm đơn'
          />
      </div>
    </div>

    <div className='ms-3'>
      <OrderList headCells={headCells} title="Danh sách đơn" rows={rows}></OrderList>
    </div>

    <div className='fixed flex right-4 gap-4'>
      <CustomButton
        title="Tạo báo cáo hàng ngày"
        variant='primary'
        onAction={()=>{setOpenDailyPopup(true);}}
        className="rounded-lg py-2 px-10"
      />
      <CustomButton
        title="Tạo báo cáo hàng tháng"
        variant='primary'
        onAction={()=>{setOpenMonthlyPopup(true);}}
        className="rounded-lg py-2 px-10"
      />
    </div>
    <PopUp
      title="Xác nhận tạo"
      isOpen={openDailyPopup}
      handleCloseBtnClick={() => {setOpenDailyPopup(false);}}
    >
      {
        <div className='flex flex-col'>
          <h2 className='text-white pb-5'>Xác nhận tạo báo cáo hàng ngày?</h2>
          <div className='flex justify-between gap-2'>
            <CustomButton
              title='Hủy'
              variant='secondary'
              onAction={()=>{setOpenDailyPopup(false);}}
              className="py-1 px-8"
            />
            <CustomButton
              title='Xác nhận'
              onAction={handleDailyConfirm}
              className="py-1 px-4"
            />
          </div>
        </div>
      }
    </PopUp>
    <PopUp
      title="Xác nhận tạo"
      isOpen={openMonthlyPopup}
      handleCloseBtnClick={() => {setOpenMonthlyPopup(false);}}
    >
      {
        <div className='flex flex-col'>
          <h2 className='text-white pb-5'>Xác nhận tạo báo cáo hàng tháng?</h2>
          <div className='flex justify-between gap-2'>
            <CustomButton
              title='Hủy'
              variant='secondary'
              onAction={()=>{setOpenMonthlyPopup(false);}}
              className="py-1 px-8"
            />
            <CustomButton
              title='Xác nhận'
              onAction={handleMonthlyConfirm}
              className="py-1 px-4"
            />
          </div>
        </div>
      }
    </PopUp>
  </>
  );
};

export default StaffDashboard;

