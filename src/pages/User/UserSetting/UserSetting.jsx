import React from "react";
import {Input, TextField, Toolbar, Typography, Box, Paper, Button, Grid, Pagination, Stack } from '@mui/material';
import CustomButton from "../../../components/CustomButton/CustomButton";
import axios from "axios";
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

const UserSetting = () => {
  const [user, setUser] = React.useState({
    id: '',
    name: '',
    dob: '',
    phone: '',
    address: '',
    email: '',
    password: '',
  });

  React.useEffect(() => {
    const fetchuser = async () => {
      const url = `https://reqres.in/api/users?per_page=1`;
      try {
        const res = await axios.get(url);
        const data = res.data;
        setUser(data.data[0]);
      } catch (error) {
        console.error('Error fetching Reports:', error);
      }
    };

    fetchuser();
  }, []);

  const handleInputChange = (field, value) => {
    setUser((prevuser) => ({
      ...prevuser,
      [field]: value,
    }));
  };

  const handleSave = async () => {
    console.log(user);
    /*try {
      const url = `https://reqres.in/api/users/${user.id}`;
      await axios.put(url, user);
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
      {user && (
        <div className="flex flex-col min-w-[700px]">
            <input
                variant='outlined'
                label="Họ và tên"
                name="name"
                value={user.name}
                onChange={(e) => {handleInputChange("name", e.target.value) }}
            />
            <input
                variant='outlined'
                label="Email"
                name="email"
                value={user.email}
                onChange={(e) => {handleInputChange("email", e.target.value) }}
            />
            <input
                variant='outlined'
                label="Mật khẩu"
                name="password"
                type="password"
                value={user.password}
                onChange={(e) => {handleInputChange("password", e.target.value) }}
            />
            <input
                label="Ngày sinh"
                value={user.dob}
                onChange={(e) => {handleInputChange("dob", e.target.value) }}
            />
            <input
                variant='outlined'
                label="Số điện thoại"
                name="phone"
                value={user.phone}
                onChange={(e) => {handleInputChange("phone", e.target.value) }}
            />
            <input
                variant='outlined'
                label="Địa chỉ"
                name="address"
                value={user.address}
                onChange={(e) => {handleInputChange("address", e.target.value) }}
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

export default UserSetting;
