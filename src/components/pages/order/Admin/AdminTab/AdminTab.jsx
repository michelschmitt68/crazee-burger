import styled from "styled-components";
import PropTypes from 'prop-types';
import { theme } from "../../../../../theme";


const TabAdmin = ({Icon, inputValue, onClick, className}) => {
  return (
    <TabAdminStyled onClick={onClick} className={className}>
      {Icon && Icon}
      {inputValue}
    </TabAdminStyled>
  )
}

export default TabAdmin


TabAdmin.propTypes = {
    Icon: PropTypes.element, 
    inputValue: PropTypes.string,
    onClick: PropTypes.func,
    className: PropTypes.string         
  };

const TabAdminStyled = styled.div`
    display: flex;
    align-items: center;
    padding: 20px;
    gap: 20px;
    height: 44px;
    background-color: ${theme.colors.white};
    border: 2px solid ${theme.colors.greyLight};
    color: ${theme.colors.greySemiDark};
    letter-spacing: 0.5px;
    border-top-left-radius: ${theme.borderRadius.round};
    border-top-right-radius: ${theme.borderRadius.round};
    z-index: 2;
    cursor: pointer;
    .icon{
        font-size: 15px;
    }

    &.tab-select{
        background-color: black;
        color: white;

    }
`;
