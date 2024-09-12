import styled from "styled-components";
import { fakeMenu1, fakeMenu2 } from "../../../../fakeData/fakeMenu";
import Item from "./Item";

const Menu = () => {
  return (
    <MenuStyled>
        {fakeMenu2.map((item, index) => (
            <Item 
            key={index + fakeMenu1.length}
            item={item}
            />
        ))}   
      
    </MenuStyled>
  )
}

export default Menu

const MenuStyled = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    justify-items: center;
    padding: 50px 50px 150px;
    grid-row-gap: 60px;

    .grid-item {
      background-color: #a7a7df;
      width: 240px;
      height: 330px;
      display: flex;
      justify-content: center;
      align-items: center;
    }
`;
