import { BrowserRouter, Route, Routes } from "react-router-dom";
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import Layout from "./components/Layout/Layout";
import { Form } from "./containers";
import {
  UserHome,
  StaffDashBoard,
  StaffHome,
  StaffInventory,
  StaffReport,
  StaffDailyMenu,
  StaffSetting,
  StaffPreorders,
  AdminDashBoard,
  AdminManagement,
} from "./pages";

function App() {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Form type="login" />} />
          <Route path="/register" element={<Form type="register" />} />
          <Route path="/" element={<Layout> <StaffHome /> </Layout>} />
          <Route path="/user/dashboard" element={<Layout> <UserHome /> </Layout>}/>
          <Route path="/staff/dashboard" element={<Layout> <StaffDashBoard /> </Layout>}/>
          <Route path="/staff/inventory" element={<Layout> <StaffInventory /> </Layout>}/>
          <Route path="/staff/dailymenu" element={<Layout> <StaffDailyMenu /> </Layout>}/>
          <Route path="/staff/preorders" element={<Layout> <StaffPreorders /> </Layout>}/>
          <Route path="/staff/report" element={<Layout> <StaffReport /> </Layout>}/>
          <Route path="/staff/setting" element={<Layout> <StaffSetting /> </Layout>}/>
          <Route path="/admin/dashboard" element={<Layout> <AdminDashBoard /> </Layout>}/>
          <Route path="/admin/management" element={<Layout> <AdminManagement /> </Layout>}/>
        </Routes>
      </BrowserRouter>
    </LocalizationProvider>
  );
}

export default App;
