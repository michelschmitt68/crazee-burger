import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from 'styled-components';
import {theme} from '../../theme/index';
import { HiUserCircle } from "react-icons/hi";

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
            <div className="title">Bienvenue chez nous !</div>
            <div className="orange-bar" />
            <div className="connect-label">Connectez-vous</div>
            
            <div className="input-container">
                <HiUserCircle className="icon" /> {/* Icône ajoutée ici */}
                <input
                    type="text"
                    placeholder="Entrez votre prénom"
                    required
                    value={inputValue}
                    onChange={handleChange}
                />
            </div>
            <button >
                Accéder à mon espace   &gt;
            </button>
        </LoginFormStyled>

    )
}


const LoginFormStyled = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    color: ${theme.colors.white};
    font-family: 'Amatic SC', cursive;
    font-weight: ${theme.weights.bold};

    .title{
        font-size: ${theme.fonts.P5};
        margin: 39px 45px 32px 45px;
    }

    .orange-bar{
        width: 100%;
        background-color: #F56A2C;
        height: 3px;
    }
    .connect-label{
        font-size: ${theme.fonts.P4};
        margin-top: 40px;
    }

    .input-container {
        position: relative;
        width: 400px;


        .icon {
            position: absolute;
            left: 24px;
            top: 37px;
            color: ${theme.colors.greyDark};
            font-size: ${theme.fonts.P2};

        }

        input {
            width: 400px;
            height: 55px;
            padding-left: 60px;
            padding-right: 24px;
            margin-top: 18px;
            margin-bottom: 18px;
            border-radius: ${theme.borderRadius.round};
            border: none;
            box-sizing: border-box;
            font-size: ${theme.fonts.P0};
            letter-spacing: 0.5px;
            &::placeholder {
                color: ${theme.colors.greyMedium}; 
                font-weight: ${theme.weights.light};
                font-size: ${theme.fonts.P0};
                font-family: Arial;
            }
        }
    }


    button{
        width: 400px;
        height: 53px;
        background-color: ${theme.colors.primary};
        color: ${theme.colors.white};
        border: none;
        border-radius: ${theme.borderRadius.round};
        font-weight: ${theme.weights.bold};
        font-family: Arial;
        font-size: ${theme.fonts.P0};
        padding: 18px 24px ;
    }
    

`;
