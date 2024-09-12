
import Navbar from "./Navbar/Navbar";
import Main from "./Main/Main";
import styled from "styled-components";
import { theme } from "../../../theme";
import { useParams } from "react-router-dom";

const OrderPage = () => {

  const {username} = useParams();

  return (
  <OrderPageStyled>
    <div className="container">
      <Navbar username={username} />
      <Main />
    </div>
  </OrderPageStyled>
  )
}

export default OrderPage


const OrderPageStyled = styled.div`
  background: ${theme.colors.primary};
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  .container {
    height: 95vh;
    width: 1400px;
    display: flex;
    flex-direction: column;
    border-radius: ${theme.borderRadius.extraRound};
  }
`;