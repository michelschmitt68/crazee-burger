import styled from "styled-components";
import { theme } from "../../../../theme";
import { useContext } from "react";
import OrderContext from "../../../../contexts/OrderContext";
import { calculateSumToPay } from "./Helper";
import CasinoEffect from "../../../reusableUI/CasinoEffect";


const Total = () => {

  const {basket, menus} = useContext(OrderContext);
  
  const sumToPay = calculateSumToPay(basket, menus)
  
  return (
    <TotalStyled>
        <span>Total</span>      
        <span>
          <CasinoEffect quantity={parseFloat(sumToPay.toFixed(2))} version="medium" />
          €
        </span>
    </TotalStyled>
  )
}

export default Total

const TotalStyled = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 70px;
    background-color: ${theme.colors.background_dark};
    color: ${theme.colors.primary};
    padding: 17px 12px; 
    span{
      display: inline-flex;
      gap: ${theme.spacing.xs};
    }
`;
