import { useNavigate } from "react-router-dom";

useNavigate

const ErrorPage = () => {

    const navigate = useNavigate();


  return (
    <div>
      <h1>ErrorPage</h1>
      <button
        onClick={() => navigate(`/`)}
      >
    Retourner à la page d&apos;accueil</button>

    </div>
  )
}

export default ErrorPage
