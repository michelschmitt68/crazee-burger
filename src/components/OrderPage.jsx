import { useNavigate, useParams } from "react-router-dom";

const OrderPage = () => {

    const { username } = useParams();
    const navigate = useNavigate();

  return (
    <div>
      <h1>Bonjour {username}</h1>
      <button   
        onClick={() => navigate(`/`)}>Déconnexion</button>
    </div>
  )
}

export default OrderPage
