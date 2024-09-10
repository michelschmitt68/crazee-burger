import styled from "styled-components";
import Logo from "../../reusable-ui/Logo";
import { theme } from "../../theme";

export default function Navbar() {
  return (
    <NavbarStyled>
        <Logo />            
        <div >Élément de droite</div>
    </NavbarStyled>
  )
}

const NavbarStyled = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
    background-color: gray;
    width: 100%;
    background-color: ${theme.colors.white};
    height: 98px;
    top: 0;  
    left: 0;
    border-top-right-radius: ${theme.borderRadius.extraRound};
    border-top-left-radius: ${theme.borderRadius.extraRound};
    
    & > :first-child {
        transform: scale(1);
        margin-left: 20px;

  }
`;