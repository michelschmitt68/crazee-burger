import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from 'styled-components';
import {theme} from '../../../theme/index';
import { IoChevronForwardSharp } from "react-icons/io5";
import InputText from "../../reusableUI/InputText";
import { BsPersonCircle } from "react-icons/bs";
import ButtonPrimary from "../../reusableUI/ButtonPrimary";
import { authenticateUser } from "../../../api/user";

export default function LoginForm() {

    const [username, setUsername] = useState("");
    const navigate = useNavigate();

    const handleChange = (event) => {
        setUsername(event.target.value); 
    };
    const handleSubmit = async(event) => {
        event.preventDefault();
        authenticateUser(username);
        navigate(`/order/${username}`);
        setUsername("");
    };
    
    return(

        <LoginFormStyled action="submit" onSubmit={handleSubmit}>
            <div>
                <h1>Bienvenue chez nous !</h1>
                <hr />
                <h2>Connectez-vous</h2>
            </div>
            <InputText
                type={"text"}
                required={true} 
                inputValue={username} 
                onChange={handleChange} 
                placeholder="Entrez votre prénom" 
                Icon={<BsPersonCircle className="icon" />}
                />
       
            <ButtonPrimary 
                label={"Accéder à mon espace"}
                Icon={<IoChevronForwardSharp className="icon"/>}
                className="button-with-icon"
                />
        </LoginFormStyled>

    )
}


const LoginFormStyled = styled.form`
    text-align: center;
    max-width: 500px;
    min-width: 400px;
    margin: 0px auto;
    padding: 2.5rem 2rem;
    border-radius: ${theme.borderRadius.round};
    font-family: 'Amatic SC', cursive;

    hr{
        border: 1.5px solid ${theme.colors.primary};
    }

    h1{
        color: ${theme.colors.white};
        font-size: ${theme.fonts.P5};
    }

    h2{
        color: ${theme.colors.white};
        margin: 20px 10px 10px;
        font-size: ${theme.fonts.P4};
    }
    

`;
