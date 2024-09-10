
import Navbar from "./Navbar";
import Main from "./Main";
import styled from "styled-components";
import { theme } from "../../../theme";

const OrderPage = () => {


  return (
    <OrderPageStyled>
      <Navbar />
      <Main></Main>
    </OrderPageStyled>
  )
}

export default OrderPage


const OrderPageStyled = styled.div`
    display: flex;
    flex-direction: column;
    margin: 25px 56px;
    max-width: 1400px;
    width: 100%;
    

    &::before{
      content: '';
      background-color: ${theme.colors.primary};
      position: absolute; 
      top: 0;
      left: 0;
      width: 100vw;
      height: 100vh; 
      z-index: -1; 
    }
`;
