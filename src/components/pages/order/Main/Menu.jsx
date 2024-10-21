import styled from "styled-components";
import Item from "./Item";
import { useContext } from "react";
import { theme } from "../../../../theme";
import OrderContext from "../../../../contexts/OrderContext";
import { findObjectById } from "../../../../utils/arrays";
import { updateMenu } from "../../../../api/product";

const Menu = () => {

  const { menus, basket, handleDelete, handleSelectItem, selectedItem, onDeselect, handleActiveTab, handleIsVisible, handleAddToBasket, handleDeleteBasketProduct, username } = useContext(OrderContext);

  const handleSelect = (id, title, imageSource, price) => {
    handleSelectItem(id, title, imageSource, price)
    handleActiveTab("editProduct");
    handleIsVisible(true);
  }

  const handleAddOnBasket = (event, id) => {
    event.stopPropagation();
    handleAddToBasket(id);
  }

  const onDelete = (id) => {
    const isProductOnBasket = findObjectById(id, basket);
    if (isProductOnBasket) {
      handleDeleteBasketProduct(id);
    }
    handleDelete(id, username);
  }
  

  return (
    <MenuStyled className="menu">
      {menus.map(({ id, title, imageSource, price }) => (
        <Item 
          key={id}
          id={id}
          title={title}
          imageSource={imageSource}
          price={price}
          onClickButton={() => selectedItem && selectedItem.id === id ? onDeselect() : onDelete(id)}
          onSelect={() => handleSelect(id, title, imageSource, price)}
          onAddToBasket={(event) => handleAddOnBasket(event,id)}
          isSelected={selectedItem.id === id}
        />
      ))}      
    </MenuStyled>
  );
};

export default Menu;

const MenuStyled = styled.div`
  background: ${theme.colors.background_white};
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-row-gap: 60px;
  padding: 50px 50px 150px;
  justify-items: center;
  box-shadow: 0px 8px 20px 8px rgba(0, 0, 0, 0.2) inset;
  min-height: 100%;
`;
