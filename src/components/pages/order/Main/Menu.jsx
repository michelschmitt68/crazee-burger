import styled from "styled-components";
import { fakeMenu2 } from "../../../../fakeData/fakeMenu";
import Item from "./Item";
import { useState } from "react";
import { theme } from "../../../../theme";

const Menu = () => {

  const [menu, setmenu] = useState(fakeMenu2)
  return (
    <MenuStyled className="menu">
        {menu.map(({id, title, imageSource, price}) => (
          <Item 
            key={id}
            title={title}
            imageSource={imageSource}
            price={price}
          />
        ))}      
    </MenuStyled>
  )
}

export default Menu

const MenuStyled = styled.div`
  background: ${theme.colors.background_white};
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-row-gap: 60px;
  padding: 50px 50px 150px;
  justify-items: center;
  box-shadow: 0px 8px 20px 8px rgba(0, 0, 0, 0.2) inset;
`;
