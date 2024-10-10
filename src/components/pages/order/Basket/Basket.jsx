import styled from "styled-components";
import { theme } from "../../../../theme";
import Total from "./Total";
import BasketBody from "./BasketBody";
import Footer from "./Footer";


const Basket = () => {
  return (
    <BasketStyled>
        <Total />
        <BasketBody/>
        <Footer/>    
    </BasketStyled>
  )
}

export default Basket

const BasketStyled = styled.div`
  width: auto;
  display: flex;
  align-items: center;
  flex-direction: column;
  font-size: ${theme.fonts.P4};
  font-family: "Amatic SC", cursive;
  font-weight: ${theme.weights.regular};
  position: sticky;
  top: 0px;
`;
