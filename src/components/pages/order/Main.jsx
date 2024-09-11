import styled from "styled-components";
import { theme } from "../../../theme";
import "../../../fakeData/fakeMenu"
import { fakeMenu1, fakeMenu2 } from "../../../fakeData/fakeMenu";
import Item from "./Item";

export default function Main() {
  return (
    <MainStyled>
      {fakeMenu2.map((item, index) => (
        <Item 
          key={index + fakeMenu1.length}
          item={item}
        />
      ))}         
    </MainStyled>
  )
}

const MainStyled = styled.div`  

    display: grid;
    grid-template-columns: repeat(4, 1fr);
    justify-items: center;
    align-items: center;
    padding: 50px 92px;
    gap: 60px 85px;
    background-color: ${theme.colors.background_white};
    height: 100vh;
    box-shadow: 0px 8px 20px 8px rgba(0, 0, 0, 0.2) inset;
    border-bottom-left-radius: ${theme.borderRadius.extraRound};
    border-bottom-right-radius: ${theme.borderRadius.extraRound};

    .grid-item {
      background-color: #a7a7df;
      width: 240px;
      height: 330px;
      display: flex;
      justify-content: center;
      align-items: center;
    }
`;