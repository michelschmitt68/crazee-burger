
import ErrorPage from './components/ErrorPage';
import OrderPage from './components/OrderPage';
import LoginPage from './components/LoginPage';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/order/:username" element={<OrderPage />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
