
import Navbar from "./Navbar/Navbar";
import Main from "./Main/Main";
import styled from "styled-components";
import { theme } from "../../../theme";
import { useRef, useState } from "react";
import { toast} from 'react-toastify';
import OrderContext from "../../../contexts/OrderContext";
import { EMPTY_PRODUCT, fakeMenu2 } from "../../../fakeData/fakeMenu";


const OrderPage = () => {

  const [isChecked, setIsChecked] = useState(false);
  const [menus, setMenus] = useState(fakeMenu2);
  const [newProduct, setNewProduct] = useState(EMPTY_PRODUCT);
  const [selectedItem, setSelectedItem] = useState(null);
  const [editedProduct, setEditedProduct] = useState(null);
  const [activeTab, setActiveTab] = useState("addProduct");
  const [isVisible, setIsVisible] = useState(false);
  const firstInputRef = useRef(null);

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

  const handleEdit = (updatedItem) => {
    setMenus((prevMenus) =>
      prevMenus.map((menu) =>
        menu.id === updatedItem.id ? updatedItem : menu
      )
    );
    setSelectedItem(updatedItem);
  }

  const resetMenus = () => {
    setMenus(fakeMenu2);
  }

  const handleSelectItem = ( id, title, imageSource, price) => {
    const selected = { id, title, imageSource, price };
    setSelectedItem(selected);
    setEditedProduct(selected);
    setActiveTab("editProduct");
    setIsVisible(true);
    if (firstInputRef.current) {
      firstInputRef.current.focus();
    }
  }



  return (
    <OrderContext.Provider value={{isChecked, handleToggle, menus, setMenus, handleDelete, handleEdit, handleAdd, resetMenus, newProduct, setNewProduct, handleSelectItem, selectedItem, editedProduct, setEditedProduct,activeTab, setActiveTab, isVisible, setIsVisible, firstInputRef}}>
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