import styled from "styled-components";
import { theme } from "../../../theme";

export default function Main() {
  return (
    <MainStyled>
      <div className="grid-item">Item 1</div>
      <div className="grid-item">Item 2</div>
      <div className="grid-item">Item 3</div>
      <div className="grid-item">Item 4</div>
      <div className="grid-item">Item 5</div>
      <div className="grid-item">Item 6</div>
      <div className="grid-item">Item 7</div>
      <div className="grid-item">Item 8</div>
      <div className="grid-item">Item 9</div>
      <div className="grid-item">Item 10</div>
    </MainStyled>
  )
}

const MainStyled = styled.div`  
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    justify-items: center;
    align-items: center;
    padding: 50px 92px;

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