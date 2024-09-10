import styled from "styled-components";
import { BsPersonCircle } from "react-icons/bs";
import PropTypes from 'prop-types';
import { theme } from "../../../theme";


const UserInfo = ({username}) => {
  return (
    <UserInfoStyled>
      <div className="text-container">
        <p>Hey, <span>{username}</span></p>
        <a>Se déconnecter</a>
      </div>
      <BsPersonCircle className="icon" />
    </UserInfoStyled>
  )
}

export default UserInfo;

UserInfo.propTypes = {
  username: PropTypes.string.isRequired      
};

const UserInfoStyled = styled.div`  

  display: flex;
  margin-right: 70px;
  align-items: center;
  font-family: "Open Sans", cursive;
  color: ${theme.colors.greyBlue};

  .text-container {
    display: flex;
    flex-direction: column; 
    margin-right: 10px;
    text-align: right;
    
    p{
      font-size: ${theme.fonts.P0};
      font-weight: ${theme.weights.bold};
      span{
        color: ${theme.colors.primary};
      }
    }

    a{
      font-weight: ${theme.weights.regular};
      color: ${theme.colors.greyBlue};
      font-size: ${theme.fonts.XXS};
      cursor: pointer;

      &:hover{
        text-decoration: underline;
      }
    }
  }

  .icon{
    font-size: ${theme.fonts.P4};
    color: ${theme.colors.greyBlue};
  }


`;
