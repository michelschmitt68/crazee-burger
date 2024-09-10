import { useNavigate, useParams } from "react-router-dom";
import Navbar from "./Navbar";
import Main from "./Main";

const OrderPage = () => {

    const { username } = useParams();
    const navigate = useNavigate();

  return (
    <div className="container">
      <h1>Bonjour {username}</h1>
      <button   
        onClick={() => navigate(`/`)}>Déconnexion</button>
    
      <Navbar></Navbar>
      <Main></Main>
    </div>
  )
}

export default OrderPage
