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
  const { numSelected, handleDelete, handleAdjust, title } = props;

  return (
    <Toolbar
      sx={{
        pl: { sm: 2 },
        pr: { xs: 1, sm: 1 },
        ...(numSelected > 0 && {
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

      {numSelected > 0 && (
        <>
            <Tooltip title="Delete">
              <IconButton onClick={handleDelete}>
                  <DeleteIcon sx={{color: 'text.white', fontSize: 'fontSize.icon'}}/>
              </IconButton>
            </Tooltip>
            <Tooltip title="Edit">
              <IconButton onClick={handleAdjust}>
                  <EditIcon sx={{color: 'text.white', fontSize: 'fontSize.icon'}}/>
              </IconButton>
            </Tooltip>
        </>
      )}
    </Toolbar>
  );
}

EnhancedTableToolbar.propTypes = {
  numSelected: PropTypes.number.isRequired,
  handleDelete: PropTypes.func.isRequired,
  handleAdjust: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired
};

export default function ExpiredProductTable(props) {
    const {headCells, title} = props;
    const [order, setOrder] = React.useState('asc');
    const [orderBy, setOrderBy] = React.useState('id');
    const [selected, setSelected] = React.useState(null);
    const [rows, setRows] = React.useState([]);
    const [totalRow, setTotalRow] = React.useState(0);
    const [paginationController, setController] = React.useState({
        page: 0,
        rowsPerPage: 5
    })

    React.useEffect(() => {
        const fetchExpiredProducts = async () => {
            const url = `https://reqres.in/api/users?page=${paginationController.page + 1}&per_page=${paginationController.rowsPerPage}`;
            try {
              const res = await axios.get(url);
              const data = res.data;
              setRows(data.data);
              setTotalRow(data.total);
            } catch (error) {
              console.error('Error fetching expired products:', error);
            }
        }
        fetchExpiredProducts()
    },[paginationController]);

    // console.log(rows);
    // console.log(paginationController.page)
    // console.log(paginationController.rowsPerPage)

    const handleRequestSort = (event, property) => {
        const isAsc = orderBy === property && order === 'asc';
        setOrder(isAsc ? 'desc' : 'asc');
        setOrderBy(property);
    };

    //Handle on row click
    const handleClick = (event, id) => {
        //if row is already selected, remove it from selected
        if (selected === id){
            setSelected(null);
        }
        else{
            setSelected(id);
        }
    };

    const handleChangePage = (event, newPage) => {
        setController({
            ...paginationController,
            page: newPage
        })
    };

    const handleChangeRowsPerPage = (event) => {
        setController({
            ...paginationController,
            rowsPerPage: parseInt(event.target.value, 10),
            page: 0
        })
    };

    const handleOnDeleteIconClick = async () => {
        console.log(selected);
        await axios.delete('http://localhost:8080/v1/api/deleteExpiredProducts', {
        data: { ids: selected },
      });
      setSelected([]); // Clear the selection after deletion
    }

    const handleOnAdjustIconClick = async () => {
        console.log(selected);
    }
    
    const isSelected = (id) => selected === id;

    // Avoid a layout jump when reaching the last page with empty rows.
    const emptyRows =
    paginationController.page > 0 ? Math.max(0, (1 + paginationController.page) * paginationController.rowsPerPage - totalRow) : 0;

    //console.log(emptyRows);

    const visibleRows = React.useMemo(
        () =>
        stableSort(rows, getComparator(order, orderBy)).slice(
            paginationController.page * paginationController.rowsPerPage,
            paginationController.page * paginationController.rowsPerPage + paginationController.rowsPerPage,
        ),
        [order, orderBy, paginationController.page, paginationController.rowsPerPage],
    );

    console.log(visibleRows);

    return (
        <Box sx={{ width: '100%' }}>
        <Paper sx={{ width: '100%', mb: 2 }}>
            <EnhancedTableToolbar 
                numSelected={selected !== null ? 1 : 0} 
                handleDelete={handleOnDeleteIconClick} 
                title={title}
                handleAdjust={handleOnAdjustIconClick}
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
                {rows.map((row, index) => {
                    const isItemSelected = isSelected(row.id);
                    const labelId = `enhanced-table-checkbox-${index}`;

                    return (
                    <TableRow
                        hover
                        onClick={(event) => handleClick(event, row.id)}
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
                count={totalRow}
                rowsPerPage={paginationController.rowsPerPage}
                page={paginationController.page}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
                sx={{bgcolor: 'background.secondary', color: 'text.white'}}
            />
        </Paper>
        </Box>
    );
}
