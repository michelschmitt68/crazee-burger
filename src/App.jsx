
import ErrorPage from './components/error/ErrorPage';
import OrderPage from './components/order/OrderPage';
import LoginPage from './components/login/LoginPage';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {


  return (
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/order/:username" element={<OrderPage />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
  )
}

export default App
