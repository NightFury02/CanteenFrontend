import * as React from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import { alpha } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import TableSortLabel from '@mui/material/TableSortLabel';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { visuallyHidden } from '@mui/utils';
import PopUp from '../../../../components/Popup/Popup';
import EditForm from '../EditForm/EditForm';
import CustomButton from '../../../../components/CustomButton/CustomButton';
import Searchbar from '../../../../components/SearchBar/SearchBar';

function descendingComparator(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

function getComparator(order, orderBy) {
  return order === 'desc'
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

function stableSort(array, comparator) {
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) {
      return order;
    }
    return a[1] - b[1];
  });
  return stabilizedThis.map((el) => el[0]);
}

function EnhancedTableHead(props) {
  const { order, orderBy, onRequestSort, headCells } = props;
  const createSortHandler = (property) => (event) => {
    onRequestSort(event, property);
  };

  return (
    <TableHead>
      <TableRow>
        <TableCell padding="checkbox">
        </TableCell>
        {headCells.map((headCell) => (
          <TableCell
            key={headCell.id}
            align={'left'}
            padding={headCell.disablePadding ? 'none' : 'normal'}
            sortDirection={orderBy === headCell.id ? order : false}
          >
            <TableSortLabel
              active={orderBy === headCell.id}
              direction={orderBy === headCell.id ? order : 'asc'}
              onClick={createSortHandler(headCell.id)}
              sx={{fontWeight: 600, fontSize: '18px', paddingTop: '1rem', paddingBottom: '1rem'}}
            >
              {headCell.label}
              {orderBy === headCell.id ? (
                <Box component="span" sx={visuallyHidden}>
                  {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                </Box>
              ) : null}
            </TableSortLabel>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}

EnhancedTableHead.propTypes = {
  onRequestSort: PropTypes.func.isRequired,
  order: PropTypes.oneOf(['asc', 'desc']).isRequired,
  orderBy: PropTypes.string.isRequired,
  headCells: PropTypes.arrayOf(PropTypes.object)
};

function EnhancedTableToolbar(props) {
  const { selected, handleDeleteIconClick, handleEditIconClick, title, handleSearchBar } = props;

  return (
    <Toolbar
      sx={{
        pl: { sm: 2 },
        pr: { xs: 1, sm: 1 },
        ...(selected && {
          bgcolor: (theme) =>
            alpha(theme.palette.primary.main, theme.palette.action.activatedOpacity),
        }),
        bgcolor: 'background.secondary'
      }}
    >
      {(
        <>
        <Typography
          sx={{ flex: '1 1 100%', color: '#EA7C69', fontWeight: 'fontWeight.tableTitle', fontSize: 'fontSize.tableTitle' }}
          variant="h1"
          id="tableTitle"
          component="div"
        >
          {title}
        </Typography>
        <div className='p-3'>
          <Searchbar
            handleSearch={handleSearchBar}  
            placeholder='Tìm kiếm sản phẩm...'
          />
        </div>
        </>
      )}

      {selected && (
        <>
            <Tooltip title="Delete">
              <IconButton onClick={handleDeleteIconClick}>
                  <DeleteIcon sx={{color: 'text.white', fontSize: 'fontSize.icon'}}/>
              </IconButton>
            </Tooltip>
            <Tooltip title="Edit">
              <IconButton onClick={handleEditIconClick}>
                  <EditIcon sx={{color: 'text.white', fontSize: 'fontSize.icon'}}/>
              </IconButton>
            </Tooltip>
        </>
      )}
    </Toolbar>
  );
}

EnhancedTableToolbar.propTypes = {
  selected: PropTypes.bool,
  handleDeleteIconClick: PropTypes.func.isRequired,
  handleEditIconClick: PropTypes.func.isRequired,
  title: PropTypes.string
};

export default function InventoryTable(props) {
    const {headCells, title} = props;
    const [order, setOrder] = React.useState('asc');
    const [orderBy, setOrderBy] = React.useState('id');
    const [selected, setSelected] = React.useState({});
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(5);
    const [rows, setRows] = React.useState([]);
    const [originalRows, setOriginalRows] = React.useState([]);

    //Handle edit pop up
    const [openEditPopUp, setOpenEditPopUp] = React.useState(false)
    //Handle delete pop uo
    const [openDeletePopUp, setOpenDeletePopUp] = React.useState(false)

    React.useEffect(() =>{
      const fetchProducts = async () => {
          const url = `https://reqres.in/api/users`;
          try {
              // const res = await axios.get(url);
              // const data = res.data;
              const data = [
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
              setRows(data);
              setOriginalRows(data);
          } catch (error) {
          console.error('Error fetching expired products:', error);
          }
      }
      fetchProducts()
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

    const handleRequestSort = (event, property) => {
        const isAsc = orderBy === property && order === 'asc';
        setOrder(isAsc ? 'desc' : 'asc');
        setOrderBy(property);
    };

    //Handle on row click
    const handleClick = (event, row) => {
        //if row is already selected, remove it from selected
        if (selected === row){
            setSelected({});
        }
        else{
            setSelected(row);
        }
    };

    const handleChangePage = (event, newPage) => {
      setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
      setRowsPerPage(parseInt(event.target.value, 10));
      setPage(0);
    };

    const handleOnDelete = async () => {
        console.log(selected);
        setOpenDeletePopUp(false);
        setSelected({});
      //   await axios.delete('http://localhost:8080/v1/api/deleteExpiredProducts', {
      //   data: { ids: selected },
      // });
      
    }

    const handleOpenEditChange = (isOpen) => {
      setOpenEditPopUp(isOpen);
      setSelected({})
    };
    
    const isSelected = (row) => selected === row;

    // Avoid a layout jump when reaching the last page with empty rows.
    const emptyRows = page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

    //console.log(emptyRows);
    const visibleRows = stableSort(rows, getComparator(order, orderBy)).slice(
      page * rowsPerPage,
      page * rowsPerPage + rowsPerPage,
    );

    //console.log(visibleRows);

    return (
      <Box sx={{ width: '100%' }}>
        <Paper sx={{ width: '100%', mb: 2 }}>
            <EnhancedTableToolbar 
                selected={Object.keys(selected).length === 0 ? false : true} 
                handleDeleteIconClick={()=> {setOpenDeletePopUp(true)}} 
                title={title}
                handleEditIconClick={() => {setOpenEditPopUp(true)}}
                handleSearchBar={handleSearchBar}
             />
            <TableContainer>
              <Table
                  sx={{ minWidth: 750, bgcolor: 'background.secondary' }}
                  aria-labelledby="tableTitle"
                  size={'medium'}
              >
                <EnhancedTableHead
                    order={order}
                    orderBy={orderBy}
                    onRequestSort={handleRequestSort}
                    headCells={headCells}
                />
                <TableBody>
                {visibleRows.map((row, index) => {
                    const isItemSelected = isSelected(row);
                    const labelId = `enhanced-table-checkbox-${index}`;

                    return (
                    <TableRow
                        hover
                        onClick={(event) => handleClick(event, row)}
                        role="checkbox"
                        aria-checked={isItemSelected}
                        tabIndex={-1}
                        key={row.id}
                        selected={isItemSelected}
                        sx={{ cursor: 'pointer' }}
                    >
                        <TableCell padding="checkbox"></TableCell>
                        {headCells.map((cell, index) => (
                            <TableCell
                                key={cell.id}
                                id={labelId}
                                scope="row"
                                padding='none'
                                sx={{color: 'text.white', paddingTop: '1rem', paddingBottom: '1rem'}}
                            >
                            {row[cell.id]}
                            </TableCell>
                        ))}
                    </TableRow>
                    );
                })}
                {emptyRows > 0 && (
                    <TableRow
                    style={{
                        height: (53) * emptyRows,
                    }}
                    >
                    <TableCell colSpan={6} />
                    </TableRow>
                )}
                </TableBody>
              </Table>
            </TableContainer>
            <TablePagination
                rowsPerPageOptions={[5, 10, 25]}
                component="div"
                count={rows.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
                sx={{bgcolor: 'background.secondary', color: 'text.white'}}
            />
        </Paper>

        <PopUp
          title="CẬP NHẬT"
          isOpen={openEditPopUp}
          handleCloseBtnClick={() => {setOpenEditPopUp(false); setSelected({})}}
        >
          {<EditForm
            targetProduct={selected}
            setOpen={handleOpenEditChange}
          />}
        </PopUp>

        <PopUp
          title="Xóa sản phẩm"
          isOpen={openDeletePopUp}
          handleCloseBtnClick={() => {setOpenDeletePopUp(false); setSelected({})}}
        >
          {
            <div className='flex flex-col'>
              <h2 className='text-white pb-5'>Bạn có chắc chắn muốn xóa sản phẩm này?</h2>
              <div className='flex justify-end gap-2'>
                <CustomButton
                  title='Hủy'
                  variant='secondary'
                  onAction={()=>{setOpenDeletePopUp(false); setSelected({})}}
                  className="py-1 px-4"
                />
                <CustomButton
                  title='Xác nhận'
                  onAction={handleOnDelete}
                  className="py-1 px-4"
                />
              </div>
            </div>
          }
        </PopUp>
      </Box>
    );
}
