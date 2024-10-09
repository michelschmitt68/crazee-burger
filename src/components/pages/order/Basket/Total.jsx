import styled from "styled-components";
import { theme } from "../../../../theme";


const Total = () => {
  return (
    <TotalStyled>
        <span>Total</span>
        <span>0,00€</span>
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
`;
