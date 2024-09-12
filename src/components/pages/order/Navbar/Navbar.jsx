import styled from "styled-components";
import { theme } from "../../../../theme";
import UserInfo from "./UserInfo";
import PropTypes from 'prop-types';
import Logo from "../../../reusableUI/Logo";
import { refreshPage } from "../../../../utils/window";
import ToggleButton from "./ToggleButton";
import { useState } from "react";

const Navbar = ({username}) => {

  const [isChecked, setIsChecked] = useState(false);

  const handleToggle = () => {
    setIsChecked(!isChecked);
  }

  return (
    <NavbarStyled>
        <Logo onClick={() => refreshPage()}/>
          <div className="right-nav">
            <ToggleButton 
              isChecked={isChecked}
              onToggle={handleToggle}
              labelIfChecked={"DÉSACTIVER LE MODE ADMIN"}
              labelIfUnchecked={"ACTIVER LE MODE ADMIN"}
            />  
          <UserInfo username={username}/>
        </div>
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
    padding: 0 20px;
    width: 100%;
    background-color: ${theme.colors.white};
    height: 98px;
    top: 0;  
    left: 0;
    border-top-right-radius: ${theme.borderRadius.extraRound};
    border-top-left-radius: ${theme.borderRadius.extraRound};
    border-bottom: 1px solid ${theme.colors.greyLight};
    
    & > :first-child {
        transform: scale(1);
        cursor: pointer;
        }
    
    .right-nav{
      display: flex;
      display: inline-flex;
      gap: 50px;
    }
`;