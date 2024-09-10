import styled from "styled-components";
import { theme } from "../../theme";
import PropTypes from 'prop-types';

export default function ButtonPrimary({label, Icon}) {

  return (
    
    <ButtonPrimaryStyled>
        {label}
        {Icon && Icon}
    </ButtonPrimaryStyled>
  )
}

ButtonPrimary.propTypes = {
    label: PropTypes.string,
    Icon: PropTypes.element     
  };

const ButtonPrimaryStyled = styled.button`
    width: 100%;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    position: relative;
    white-space: nowrap;
    text-decoration: none;
    line-height: 1;
    padding: 18px 24px;
    border-radius: ${theme.borderRadius.round};
    font-size: ${theme.fonts.P0};
    font-weight: ${theme.weights.bold};
    color: ${theme.colors.white};
    background-color: ${theme.colors.primary};
    border: 1px solid ${theme.colors.primary};

    &:hover:not(:disabled){
        background-color: ${theme.colors.white};
        color: ${theme.colors.primary};
        border: 1px solid ${theme.colors.primary};
        transition: all 200ms ease-out;
        cursor: pointer;
    }

    &:active{
        color: ${theme.colors.white};
        background-color: ${theme.colors.primary};
        border: 1px solid ${theme.colors.primary};
    }

    &:disabled{
        opacity: 0.6;
        cursor: not-allowed;
    }

    .icon {
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: ${theme.fonts.P0};
        margin: 1px 0 0 4px; 
        font-weight: ${theme.weights.bold};

    }
`;
