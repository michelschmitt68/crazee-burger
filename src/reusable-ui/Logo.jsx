import styled from 'styled-components';
import {theme} from '../theme/index';
import logoOrange from "../images/logo-orange.png";

export default function Logo() {
  return (
    <LogoStyled>
      <h1>CRAZEE</h1>
      <img src={logoOrange} alt="logo-orange"></img>
      <h1>BURGER</h1>
    </LogoStyled>
  )
}



const LogoStyled = styled.div`
  display: flex;
  align-items: center;
  transform: scale(2.5);

  h1 {
    display: inline;
    text-align: center;
    color: ${theme.colors.primary};
    font-size: ${theme.fonts.P4};
    line-height: 1em;
    font-weight: ${theme.weights.bold};
    text-transform: uppercase;
    letter-spacing: 1.5px;
    font-family: "Amatic SC", cursive;
    }

    img{
      object-fit: contain;
      object-position: center;
      height: 60px;
      width: 80px; // for Safari and Firefox
      margin: 0 5px;
    }
`;


