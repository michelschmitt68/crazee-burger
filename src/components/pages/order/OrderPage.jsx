import { useParams } from "react-router-dom";
import Navbar from "./Navbar";
import Main from "./Main";
import styled from "styled-components";
import { theme } from "../../../theme";

const OrderPage = () => {

     const { username } = useParams();
    // const navigate = useNavigate();

  return (
    <OrderPageStyled>
      {/* <h1>Bonjour {username}</h1>
      <button   
        onClick={() => navigate(`/`)}>Déconnexion</button> */}
    
      <Navbar username={username}></Navbar>
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
