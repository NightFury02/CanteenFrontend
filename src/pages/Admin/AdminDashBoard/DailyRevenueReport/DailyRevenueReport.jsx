import * as React from 'react';
import PropTypes from 'prop-types';
import {Box, Paper, Table, TableBody, TableCell, TableContainer, TableRow, Toolbar, Typography, Input } from '@mui/material';

function EnhancedTableToolbar(props) {
    const { title, date } = props;
  
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
            {date}
          </Typography>
        )}
      </Toolbar>
    );
}
  
EnhancedTableToolbar.propTypes = {
    title: PropTypes.string,
    date: PropTypes.object
};

export default function DailyRevenueReport(props) {
    const {title} = props;
    const getCurrentDate = new Date();
    const year = getCurrentDate.getFullYear();
    const month = (getCurrentDate.getMonth() + 1).toString().padStart(2, '0');
    const day = getCurrentDate.getDate().toString().padStart(2, '0');
    const currentDate = `${year}-${month}-${day}`;
    const [selectedDate, setSelectedDate] = React.useState(currentDate);

    const [revenue, setRevenue] = React.useState([
        { label: 'Doanh thu', value: '1000000đ' },
        { label: 'Lợi nhuận', value: '100000đ' },
        { label: 'Tổng số món', value: '10000' },
        { label: 'Tổng số lượt đặt', value: '1000' },
    ]);

    const handleDateChange = (event) => {
        const newDate = event.target.value;
        setSelectedDate(newDate);
    };

    return (
        <Box sx={{ width: '100%' }}>
            <Paper sx={{ width: '100%', mb: 2 }}>
                <EnhancedTableToolbar 
                    title={title}
                    date={<><Input 
                    type="date" 
                    value={selectedDate}
                    max={currentDate}
                    onChange={handleDateChange}
                    /></>}
                />
                <TableContainer>
                <Table
                    sx={{ minWidth: 600, bgcolor: 'background.secondary' }}
                    aria-labelledby="tableTitle"
                    size={'medium'}
                >
                    <TableBody>
                    {revenue.map((rev, index) => (
                        <TableRow key={index}>
                        <TableCell style={{ color: 'white' }}>{rev.label}</TableCell>
                        <TableCell style={{ color: 'white' }}>{rev.value}</TableCell>
                        </TableRow>
                    ))}
                    </TableBody>
                </Table>
                </TableContainer>
            </Paper>
        </Box>
    );
}