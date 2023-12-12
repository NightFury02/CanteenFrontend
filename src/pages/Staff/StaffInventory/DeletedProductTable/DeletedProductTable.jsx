import * as React from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';

function EnhancedTableHead(props) {
  const { headCells } = props;
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
            sx={{fontWeight: 600, fontSize: '18px', paddingTop: '1rem', paddingBottom: '1rem'}}
          >
            {headCell.label}
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}

EnhancedTableHead.propTypes = {
  headCells: PropTypes.arrayOf(PropTypes.object)
};

function EnhancedTableToolbar(props) {
  const { title } = props;

  return (
    <Toolbar
      sx={{
        pl: { sm: 2 },
        pr: { xs: 1, sm: 1 },
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
    </Toolbar>
  );
}

EnhancedTableToolbar.propTypes = {
  title: PropTypes.string.isRequired
};

export default function DeletedProductTable(props) {
    const {headCells, title} = props;
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

    // Avoid a layout jump when reaching the last page with empty rows.
    const emptyRows =
    paginationController.page > 0 ? Math.max(0, (1 + paginationController.page) * paginationController.rowsPerPage - totalRow) : 0;

    //console.log(emptyRows);
    return (
        <Box sx={{ width: '100%' }}>
        <Paper sx={{ width: '100%', mb: 2 }}>
            <EnhancedTableToolbar title={title} />
            <TableContainer>
            <Table
                sx={{ minWidth: 750, bgcolor: 'background.secondary' }}
                aria-labelledby="tableTitle"
                size={'medium'}
            >
                <EnhancedTableHead headCells={headCells} />
                <TableBody>
                {rows.map((row, index) => {
                    return (
                    <TableRow
                        hover
                        role="checkbox"
                        tabIndex={-1}
                        key={row.id}
                    >
                        <TableCell padding="checkbox"></TableCell>
                        {headCells.map((cell, index) => (
                            <TableCell
                                key={cell.id}
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
