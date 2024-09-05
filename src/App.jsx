
import OrderPage from './components/OrderPage';
import LoginPage from './pages/LoginPage'
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/order/:username" element={<OrderPage />} />
        </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
