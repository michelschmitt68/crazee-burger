
import Navbar from "./Navbar/Navbar";
import Main from "./Main/Main";
import styled from "styled-components";
import { theme } from "../../../theme";
import { useEffect, useState } from "react";
import { toast} from 'react-toastify';
import OrderContext from "../../../contexts/OrderContext";
import { EMPTY_PRODUCT } from "../../../enums/product";
import { useMenus } from "../../../hooks/useMenus";
import { useAdminPanel } from "../../../hooks/useAdminPanel";
import { useBasket } from "../../../hooks/useBasket";
import { useParams } from "react-router-dom";
import { getMenu } from "../../../api/product";
import { authenticateUser } from "../../../api/user";



const OrderPage = () => {

  const [isChecked, setIsChecked] = useState(false);
  const [newProduct, setNewProduct] = useState(EMPTY_PRODUCT);
  const {menus, handleMenus, handleDelete, handleAdd, handleEdit, resetMenus, onDeselect, handleSelectItem, selectedItem, editedProduct} = useMenus();
  const{activeTab, isVisible, handleIsVisible, handleActiveTab} = useAdminPanel();
  const { basket, totalBuy, handleAddToBasket, handleDeleteBasketProduct } = useBasket();
  const { username } = useParams();

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

  const initialiseMenu = async () => {

    await authenticateUser(username);
    const menuReceived = await getMenu(username);
    if (menuReceived) {handleMenus(menuReceived);}
}

useEffect(() => {
    initialiseMenu();
}, [username]);

  

  const orderContextValue = {
    username,
    isChecked, 
    handleToggle, 
    menus,
    handleMenus,
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
    onDeselect,
    basket,
    totalBuy,
    handleAddToBasket,
    handleDeleteBasketProduct
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