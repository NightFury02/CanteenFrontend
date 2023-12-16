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
import { visuallyHidden } from '@mui/utils';
import PopUp from '../../../../components/Popup/Popup';
import CustomButton from '../../../../components/CustomButton/CustomButton';
import ImportReportDetail from './ImportReportDetail';

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
  const { selected, title } = props;

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
        <Typography
          sx={{ flex: '1 1 100%', color: '#EA7C69', fontWeight: 'fontWeight.tableTitle', fontSize: 'fontSize.tableTitle' }}
          variant="h1"
          id="tableTitle"
          component="div"
        >
          {title}
        </Typography>
      )}

      {/* {selected && (
        <>
            <Tooltip title="Edit">
              <IconButton onClick={handleEditIconClick}>
                  <EditIcon sx={{color: 'text.white', fontSize: 'fontSize.icon'}}/>
              </IconButton>
            </Tooltip>
        </>
      )} */}
    </Toolbar>
  );
}

EnhancedTableToolbar.propTypes = {
  selected: PropTypes.bool,
//   handleEditIconClick: PropTypes.func.isRequired,
  title: PropTypes.string
};

const ImportReportsTable = (props) => {
    const {headCells, title} = props;
    const [order, setOrder] = React.useState('asc');
    const [orderBy, setOrderBy] = React.useState('id');
    const [selected, setSelected] = React.useState({});
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(5);
    const [rows, setRows] = React.useState([]);

    //Handle edit pop up
    const [openEditPopUp, setOpenEditPopUp] = React.useState(false)

    React.useEffect(() => {
      const fetchExpiredProducts = async () => {
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
            ]
            setRows(data);
          } catch (error) {
            console.error('Error fetching expired products:', error);
          }
      }
      fetchExpiredProducts()
    }, []);

    const handleRequestSort = (event, property) => {
        const isAsc = orderBy === property && order === 'asc';
        setOrder(isAsc ? 'desc' : 'asc');
        setOrderBy(property);
    };

    //Handle on row click
    const handleClick = (event, row) => {
        // //if row is already selected, remove it from selected
        // if (selected === row){
        //     setSelected({});
        // }
        // else{
        //     setSelected(row);
        // }
        setSelected(row);
        setOpenEditPopUp(true);
    };

    const handleChangePage = (event, newPage) => {
      setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
      setRowsPerPage(parseInt(event.target.value, 10));
      setPage(0);
    };

    const handleOnCloseBtnClick = () => {
      setOpenEditPopUp(false);
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
                title={title}
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
          title="CHI TIẾT PHIẾU NHẬP KHO"
          isOpen={openEditPopUp}
          handleCloseBtnClick={handleOnCloseBtnClick}
        >
          {
            <ImportReportDetail
                target={selected}
            />
          }
        </PopUp>
      </Box>
    );
}

export default ImportReportsTable;