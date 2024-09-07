import LoginForm from "./LoginForm";
import styled from 'styled-components'
import Logo from '../../reusable-ui/Logo'
import backgroundImage from '../../images/burger-background.jpg'

export default function Login() {

    return (
        
            <LoginPageStyled>
                <Logo />
                <LoginForm />
            </LoginPageStyled>
    )
}

const LoginPageStyled = styled.div`
  
    height: 100vh;
    width: 100%;
    background-color: red;
  `
