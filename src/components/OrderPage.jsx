import { useParams } from "react-router-dom";

const OrderPage = () => {

    const { username } = useParams();

  return (
    <div>
      <h1>Bonjour {username}</h1>
      <button>Déconnexion</button>
    </div>
  )
}

export default OrderPage
