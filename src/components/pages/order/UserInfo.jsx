import styled from "styled-components";
import { BsPersonCircle } from "react-icons/bs";
import PropTypes from 'prop-types';
import { theme } from "../../../theme";
import { useNavigate, useParams } from "react-router-dom";


const UserInfo = () => {
  const navigate = useNavigate();
  const { username } = useParams();

  const handleLogout = () => {
    navigate('/');
  }

  return (
    <UserInfoStyled>
      <div className="text-container">
        <p>Hey, <span>{username}</span></p>
        <a onClick={handleLogout}>Se déconnecter</a>
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
  padding-right: 50px;
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
