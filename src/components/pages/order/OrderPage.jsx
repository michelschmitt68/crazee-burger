
import Navbar from "./Navbar/Navbar";
import Main from "./Main/Main";
import styled from "styled-components";
import { theme } from "../../../theme";
import { useState } from "react";
import { toast} from 'react-toastify';
import OrderContext from "../../../contexts/OrderContext";
import { EMPTY_PRODUCT } from "../../../enums/product";
import { useMenus } from "../../../hooks/useMenus";



const OrderPage = () => {

  const [isChecked, setIsChecked] = useState(false);
  const [newProduct, setNewProduct] = useState(EMPTY_PRODUCT);
  const {menus, handleDelete, handleAdd, handleEdit, resetMenus, onDeselect, handleSelectItem, selectedItem, editedProduct, activeTab, handleActiveTab, isVisible, handleIsVisible}
  = useMenus();

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

  const orderContextValue = {
    isChecked, 
    handleToggle, 
    menus, 
    handleDelete, 
    handleEdit, 
    handleAdd, 
    resetMenus, 
    newProduct, 
    setNewProduct, 
    handleSelectItem,
    selectedItem, 
    editedProduct, 
    activeTab,
    handleActiveTab, 
    isVisible,
    handleIsVisible,
    onDeselect
  }

  return (
    <OrderContext.Provider value={orderContextValue}>
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