import styled from "styled-components";
import { theme } from "../../../../theme";
import Total from "./Total";
import BasketBody from "./BasketBody";
import Footer from "./Footer";
import OrderContext from "../../../../contexts/OrderContext";
import { useContext } from "react";


const Basket = () => {

  const { basket } = useContext(OrderContext);

  return (
    <BasketStyled>
        <Total />
        <BasketBody basket={basket}/>
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
