import styled from "styled-components";
import { theme } from "../../../theme";
import UserInfo from "./UserInfo";
import PropTypes from 'prop-types';
import Logo from "../../reusableUI/Logo";

const Navbar = ({username}) => {


  return (
    <NavbarStyled>
        <Logo />    
        <UserInfo username={username}/>
    </NavbarStyled>
  )
}

export default Navbar;

Navbar.propTypes= {
  username: PropTypes.string.isRequired
}

const NavbarStyled = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
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
        cursor: pointer;

  }
`;