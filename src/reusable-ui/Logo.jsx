import styled from 'styled-components';
import logoOrange from '../images/logo-orange.png';
import {theme} from '../theme/index';

export default function Logo() {
  return (
    <LogoStyled>
      <div>CRAZEE</div>
      <div className='logo'></div>
      <div>BURGER</div>
    </LogoStyled>
  )
}



const LogoStyled = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  font-size: 110px;
  color: ${theme.colors.primary_burger};
  font-family: 'Amatic SC', cursive;
  font-weight: ${theme.weights.bold};
  letter-spacing: 1.3px;

  .logo{
    background-image: url(${logoOrange});
    background-size: cover;
    width: 200px;
    height: 150px;
    margin-left: 20px;
    margin-right: 20px;
  }
`;


