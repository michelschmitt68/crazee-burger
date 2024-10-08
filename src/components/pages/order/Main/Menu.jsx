import styled from "styled-components";
import Item from "./Item";
import { useContext } from "react";
import { theme } from "../../../../theme";
import OrderContext from "../../../../contexts/OrderContext";

const Menu = () => {

  const { menus, handleDelete, handleSelectItem, selectedItem, onDeselect } = useContext(OrderContext);

  return (
    <MenuStyled className="menu">
      {menus.map(({ id, title, imageSource, price }) => (
        <Item 
          key={id}
          title={title}
          imageSource={imageSource}
          price={price}
          onClickButton={() => selectedItem && selectedItem.id === id ? onDeselect() : handleDelete(id)}
          onSelect= {() => handleSelectItem(id, title, imageSource, price)}
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
`;
