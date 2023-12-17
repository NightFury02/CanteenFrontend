import React from "react";
import {Input, TextField, Toolbar, Typography, Box, Paper, Button, Grid, Pagination, Stack } from '@mui/material';
import CustomButton from "../../../components/CustomButton/CustomButton";
import axios from "axios";
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

const StaffSetting = () => {
  const [staff, setStaff] = React.useState({
    id: '',
    name: '',
    dob: '',
    phone: '',
    address: '',
    email: '',
    password: '',
  });

  React.useEffect(() => {
    const fetchStaff = async () => {
      const url = `https://reqres.in/api/users?per_page=1`;
      try {
        const res = await axios.get(url);
        const data = res.data;
        setStaff(data.data[0]);
      } catch (error) {
        console.error('Error fetching Reports:', error);
      }
    };

    fetchStaff();
  }, []);

  const handleInputChange = (field, value) => {
    setStaff((prevStaff) => ({
      ...prevStaff,
      [field]: value,
    }));
  };

  const handleSave = async () => {
    console.log(staff);
    /*try {
      const url = `https://reqres.in/api/users/${staff.id}`;
      await axios.put(url, staff);
      console.log("User information updated successfully!");
    } catch (error) {
      console.error("Error updating user information:", error);
    }*/
  };

  const textFieldStyle = {
    marginBottom: '2rem',
  };
  return (
    <div>
      {staff && (
        <div className="flex flex-col min-w-[700px]">
          <TextField
                variant='outlined'
                label="Họ và tên"
                name="name"
                value={staff.name}
                onChange={(e) => {handleInputChange("name", e.target.value) }}
                sx={textFieldStyle}
            />
            <TextField
                variant='outlined'
                label="Email"
                name="email"
                value={staff.email}
                onChange={(e) => {handleInputChange("email", e.target.value) }}
                sx={textFieldStyle}
            />
            <TextField
                variant='outlined'
                label="Mật khẩu"
                name="password"
                value={staff.password}
                onChange={(e) => {handleInputChange("password", e.target.value) }}
                sx={textFieldStyle}
            />
            <DatePicker
                label="Ngày sinh"
                value={staff.dob}
                onChange={(e) => {handleInputChange("dob", e.target.value) }}
                sx={textFieldStyle}
            />
            <TextField
                variant='outlined'
                label="Số điện thoại"
                name="phone"
                value={staff.phone}
                onChange={(e) => {handleInputChange("phone", e.target.value) }}
                sx={textFieldStyle}
            />
            <TextField
                variant='outlined'
                label="Địa chỉ"
                name="address"
                value={staff.address}
                onChange={(e) => {handleInputChange("address", e.target.value) }}
                sx={textFieldStyle}
            />
            <CustomButton
                title='Lưu'
                variant='tertiary'
                onAction={handleSave}
                className="p-2"
            />
        </div>
      )}
    </div>
  );
};

export default StaffSetting;
