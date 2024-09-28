
import Navbar from "./Navbar/Navbar";
import Main from "./Main/Main";
import styled from "styled-components";
import { theme } from "../../../theme";
import { useState } from "react";
import { toast} from 'react-toastify';
import OrderContext from "../../../contexts/OrderContext";
import { EMPTY_PRODUCT, fakeMenu2 } from "../../../fakeData/fakeMenu";


const OrderPage = () => {

  const [isChecked, setIsChecked] = useState(false);
  const [menus, setMenus] = useState(fakeMenu2);
  const [newProduct, setNewProduct] = useState(EMPTY_PRODUCT);

  const handleToggle = () => {
    setIsChecked(!isChecked);
    if (!isChecked) {
      toast.info("Mode admin activé", {
        theme: "dark",
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  };

  const handleDelete = (id) => {
    setMenus(prevMenus => prevMenus.filter(menu => menu.id !== id));
  }

  const handleAdd = (newMenu) => {
    setMenus([...menus, newMenu]);
  }

  const resetMenus = () => {
    setMenus(fakeMenu2);
  }

  return (
    <OrderContext.Provider value={{isChecked, handleToggle, menus, setMenus, handleDelete, handleAdd, resetMenus, newProduct, setNewProduct}}>
      <OrderPageStyled>
        <div className="container">
          <Navbar />
          <Main />
        </div>
      </OrderPageStyled>
    </OrderContext.Provider>
  )
}

export default OrderPage


const OrderPageStyled = styled.div`
  background: ${theme.colors.primary};
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  .container {
    height: 95vh;
    width: 1400px;
    display: flex;
    flex-direction: column;
    border-radius: ${theme.borderRadius.extraRound};
  }
`;