import React from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import { Input, Typography, Breadcrumbs, Link, Table, TableBody, TableCell, TableContainer, TableRow, Card, CardMedia, CardContent, CardHeader, CardActions, Button, Grid, Pagination, Stack } from '@mui/material';
import CustomButton from "../../../components/CustomButton/CustomButton";
import Header from "../../../components/Header/Header";
import { DeleteIcon } from '../../../assets/svgs/index';
import Searchbar from '../../../components/SearchBar/SearchBar';
import PopUp from '../../../components/Popup/Popup';

const itemsPerPage = 6;

const useStyles = (isActive) => ({
  color: isActive ? '#EA7C69' : 'white',
  '&:hover': {
    color: '#EA7C69',
  },
});

const StaffHome = () => {
  const [menu, setMenu] = React.useState([]);
  const [originalMenu, setOriginalMenu] = React.useState([]);
  const [currentCategory, setCurrentCategory] = React.useState('Các món ăn');
  const [page, setPage] = React.useState(1);
  const [selectedCards, setSelectedCards] = React.useState([]);
  const [received, setReceived] = React.useState(0);
  const [total, setTotal] = React.useState(0);
  const [change, setChange] = React.useState(0);
  const [confirmPopup, setConfirmPopup] = React.useState(false);

  // Function to calculate the total value
  const calculateTotal = (selectedCards) => {
    let sum = 0;
    selectedCards.forEach((card) => {
      sum += card.total;
    });
    
    setTotal(sum);
    setChange(received - sum);
  };

  const handleReceivedChange = (value) => {
    setReceived(value);
    setChange(value - total);
  }

  const handleQuantityChange = (cardId, quantity) => {
    const updatedSelectedCards = selectedCards.map((card) => {
      if (card.id === cardId) {
        const total = parseInt(card.id) * 10000 * parseInt(quantity);
        return { ...card, quantity, total };
      }
      return card;
    });
    setSelectedCards(updatedSelectedCards);
    calculateTotal(updatedSelectedCards);
  };

  const handleBreadcrumbClick = (category) => {
    setCurrentCategory(category);
    setPage(1);
  };

  const handleConfirm = () => {
    setConfirmPopup(true);
  };

  const handleConfirmPopup = () => {
    setConfirmPopup(false);
    console.log("confirm");
  }

  const handleCancel = () => {
    console.log("cancel");
  };

  React.useEffect(() => {
    const fetchMenuData = async () => {
      const data = await axios.get(`https://reqres.in/api/users?per_page=12`);
      setOriginalMenu(data.data.data);
      setMenu(data.data.data);
  };
  fetchMenuData();
}, [])

  const handleSearchBar = async (query) => {
    console.log(query);
    if (originalMenu.length > 0) {
        if (query !== ""){
            const searchResult = originalMenu.filter((item) => item.last_name.toLowerCase().includes(query.toLowerCase()));
            setMenu(searchResult);
        }
        else{
            setMenu(originalMenu);
        }
    }
  }
  const titles = ['Các món ăn', 'Các món khác'];

  const pageCount = Math.ceil(menu.length / itemsPerPage);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleCardClick = (item) => {
    if (!selectedCards.some((card) => card.id === item.id)) {
      setSelectedCards((prevSelectedCards) => {
        const newCard = { ...item, quantity: 1, total: parseInt(item.id) * 10000 };
        const updatedSelectedCards = [...prevSelectedCards, newCard];
        calculateTotal(updatedSelectedCards);
        return updatedSelectedCards;
      });
    }
  };

  const handleDelete = (selectedCardId) => {
    setSelectedCards((prevSelectedCards) => {
      const updatedSelectedCards = prevSelectedCards.filter((card) => card.id !== selectedCardId);
      calculateTotal(updatedSelectedCards);
      return updatedSelectedCards;
    });
  };

  const handleInputChange = (selectedCardId, field, value) => {
    setSelectedCards((prevSelectedCards) =>
      prevSelectedCards.map((card) =>
        card.id === selectedCardId ? { ...card, [field]: value } : card
      )
    );
  };

  return (
    <div className="relative grid grid-cols-3 gap-x-16">
      <Header className='col-span-1' heading="Tên nhân viên"></Header>
      <div className='col-span-1 p-3'>
            <Searchbar
              handleSearch={handleSearchBar}  
              placeholder='Tìm tên...'
            />
      </div>
      <div></div>
      <div className="col-span-2">
        <div className="ms-3">
          <Breadcrumbs aria-label="breadcrumb" className="p-2 me-5">
            {titles.map((title, index) => (
              <Link
                key={index}
                color="inherit"
                underline='none'
                href="#"
                sx={useStyles(currentCategory === title)}
                onClick={() => handleBreadcrumbClick(title)}
              >
                {title}
              </Link>
            ))}
          </Breadcrumbs>
        </div>

        <div className="mt-5 p-2">
          <Card sx={{ backgroundColor: 'background.tertiary' }}>
            <CardHeader title="Chọn món" sx={{ color: 'white', fontSize: 20 }}>
              Chọn món
            </CardHeader>
            <Grid container spacing={3}>
              {(menu.slice((page - 1) * itemsPerPage, page * itemsPerPage) || []).map((item) => (
                <Grid item key={item.id} xs={12} sm={6} md={4}>
                  <Card sx={{ 
                    border: 'rounded',
                    color: 'white', 
                    bgcolor: '#1F1D2B',
                    borderRadius: '12px', 
                    '&:hover': {
                      cursor: 'pointer',
                      bgcolor: 'background.tertiary',
                  },}}
                    onClick={() => handleCardClick(item)}
                  >
                    <CardMedia component="img" image={item.avatar} alt={item.email} />
                    <CardContent sx={{ textAlign: 'center' }}>
                      <Typography>{item.id}</Typography>
                      <Typography>{item.first_name}</Typography>
                      <Typography>{item.last_name}</Typography>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Card>
          <Stack spacing={2} mt={2}>
            <Pagination
              count={pageCount}
              page={page}
              onChange={handleChangePage}
              color="primary"
              size="large"
              sx={{ mx: 'auto'}}
            />
          </Stack>
        </div>
      </div>

      <Card className="col-span-1 fixed right-6 w-1/4 h-screen p-4 rounded-lg" sx={{ color: 'white', minWidth: '400', backgroundColor: 'background.secondary' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '45% 30% 20%', gridColumnGap: '10px', griditemGap: '8px', marginBottom: '16px', fontWeight: 'bold' }}>
            <Typography>Sản phẩm</Typography>
            <Typography>Số lượng</Typography>
            <Typography>Giá</Typography>
          </div>
        <div style={{ maxHeight: 'calc(100vh - 300px)', overflowY: 'auto' }}>
          {selectedCards.map((selectedCard) => (
            <div key={selectedCard.id}>
              {/* First item */}
              <div style={{ display: 'grid', gridTemplateColumns: '50% 20% 20%', gridColumnGap: '10px', marginBottom: '2px', alignItems: 'center' }}>
                <Card sx={{ 
                  backgroundColor: 'background.secondary',
                  display: 'flex', 
                  alignItems: 'center',
                  maxWidth: '100px',
                  maxHeight: '40px', }}>
                  <CardMedia
                    component="img" 
                    image={selectedCard.avatar}
                    alt={selectedCard.id}
                    sx={{
                      maxWidth: '40px',
                      maxHeight: '40px',
                    }}
                  />
                  <CardContent sx={{ textAlign: 'center', fontSize: 10 }}>
                    <Typography>{selectedCard.id}</Typography>
                    <Typography>{selectedCard.first_name}</Typography>
                  </CardContent>
                </Card>
                <Input
                  className='w-10'
                  type="number"
                  value={selectedCard.quantity || 1}
                  inputProps={{ min: 1 }}
                  onChange={(e) => handleQuantityChange(selectedCard.id, e.target.value)}
                  sx={{
                    borderRadius: '4px',
                    paddingLeft: '12px',
                    backgroundColor: 'background.tertiary',
                    color: 'white'
                  }}
                />
                <Typography>{parseInt(selectedCard.quantity) * parseInt(selectedCard.id)* 10000}</Typography>
              </div>
              {/* Second item */}
              <div style={{ display: 'grid', gridTemplateColumns: '70% 20%', gridColumnGap: '16px',  marginBottom: '4px', alignItems: 'center' }}>
              <Input
                  type="text"
                  value={selectedCard.note}
                  defaultValue={'Ghi chú...'}
                  onChange={(e) => handleInputChange(selectedCard.id, 'note', e.target.value)}
                  sx={{
                    borderRadius: '4px',
                    paddingLeft: '5px',
                    backgroundColor: 'background.tertiary',
                    color: 'white'
                  }}
                />
                <Button
                  onClick={() => handleDelete(selectedCard.id)}
                  sx={{
                    border: '1px solid red',
                    borderColor: '#FF7CA3',
                    borderRadius: '4px',
                    '&:hover': {
                      backgroundColor: '#FAA5BE',
                      color: 'white',
                    },
                  }}>
                  <DeleteIcon className="w-4" />
                </Button>
              </div>
            </div>
          ))}
        </div>

        <div className="absolute left-4 bottom-6">
        <TableContainer>
        <Table sx={{ minWidth: 300, bgcolor: 'background.secondary' }} size="small">
          <TableBody>
            <TableRow>
              <TableCell sx={{color: 'white', minWidth: 150}}>Tổng</TableCell>
              <TableCell sx={{color: 'white'}}>{total}đ</TableCell>
            </TableRow>
            <TableRow>
              <TableCell sx={{color: 'white', minWidth: 150}}>Đã nhận</TableCell>
              <TableCell>
                <Input
                  type="number"
                  value={received}
                  onChange={(e) => handleReceivedChange(e.target.value)}
                  style={{color: 'white'}}
                />
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell sx={{color: 'white', minWidth: 150}}>Tiền thừa</TableCell>
              <TableCell sx={{color: 'white'}}>{change}đ</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
        <CustomButton
          title={'Xác nhận thanh toán'}
          className="p-2 mt-2 w-full"
          onAction={handleConfirm}
        />
        <CustomButton
          title={'Hủy'}
          className='p-2 mt-2 w-full'
          onAction={handleCancel}
        />
        </div>
      </Card>
      <PopUp
        title="Xác nhận"
        isOpen={confirmPopup}
        handleCloseBtnClick={() => {setConfirmPopup(false);}}
      >
        {
          <div className='flex flex-col'>
            <h2 className='text-white pb-5'>Bạn có muốn xác nhận thanh toán?</h2>
            <div className='flex justify-between gap-2'>
              <CustomButton
                title='Hủy'
                variant='secondary'
                onAction={()=>{setConfirmPopup(false);}}
                className="py-1 px-8"
              />
              <CustomButton
                title='Xác nhận'
                onAction={handleConfirmPopup}
                className="py-1 px-4"
              />
            </div>
          </div>
        }
      </PopUp>
    </div>
  );
};

export default StaffHome;
