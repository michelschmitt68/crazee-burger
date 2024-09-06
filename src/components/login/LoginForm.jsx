import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from 'styled-components';

export default function LoginForm() {

    const [inputValue, setInputValue] = useState("");
    const navigate = useNavigate();

    const handleChange = (e) => {
        setInputValue(e.target.value); 
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        navigate(`/order/${inputValue}`);
        setInputValue("");
    };
    
    return(

        <LoginFormStyled action="submit" onSubmit={handleSubmit}>
                <h1>Bienvenue chez nous !</h1>
                <br />
                <h2>Connectez-vous</h2>
            <input
                type="text"
                placeholder="Entrez votre prénom"
                required 
                value={inputValue} 
                onChange={handleChange} 
            />
            <button >
                Accéder à votre espace
            </button>
        </LoginFormStyled>

    )
}


const LoginFormStyled = styled.form`
    
`;
