import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./pages";
import { Form } from "./containers";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Form type="login" />} />
        <Route path="/register" element={<Form type="register" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
