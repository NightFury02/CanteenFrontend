import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import { Form } from "./containers";
import {
  StaffDashboard,
  StaffHome,
  StaffInventory,
} from "./pages";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout> <StaffHome /> </Layout>} />
        <Route path="/staff/dashboard" element={<Layout> <StaffDashboard /> </Layout>}/>
        <Route path="/staff/inventory" element={<Layout> <StaffInventory /> </Layout>}/>
        <Route path="/login" element={<Form type="login" />} />
        <Route path="/register" element={<Form type="register" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
