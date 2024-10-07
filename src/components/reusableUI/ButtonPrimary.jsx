import styled, { css } from "styled-components";
import { theme } from "../../theme";
import PropTypes from 'prop-types';

export default function ButtonPrimary({label, Icon, onClick, version}) {

  return (
    
    <ButtonPrimaryStyled 
        version={version}
        onClick={onClick}
    >
        {label}
        {Icon && Icon}
    </ButtonPrimaryStyled>
    
  )
}

ButtonPrimary.propTypes = {
    label: PropTypes.string,
    Icon: PropTypes.element,
    className: PropTypes.string,
    onClick: PropTypes.func,
    version: PropTypes.string   
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
    font-size: ${theme.fonts.SM};
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
        font-size: ${theme.fonts.SM};
        margin: 1px 0 0 4px; 
        font-weight: ${theme.weights.bold};

    }

    ${(props) => props.version === "green-button" && greenButton}
    ${(props) => props.version === "minimalist" && minimalist}
`;

const greenButton = css`
    background-color: ${theme.colors.success};
    border: none;
    width: 275px;
    padding: 10px 29px;

    &:active{
        background-color: white;
        color: ${theme.colors.success};
        border-color: ${theme.colors.success};
    }

    &:hover:not(:disabled){
        background-color: ${theme.colors.white};
        color: ${theme.colors.success};
        border: 1px solid ${theme.colors.success};
        transition: all 200ms ease-out;
        cursor: pointer;
    }
`

const minimalist = css`
    position: absolute;
    top: 10px;
    right: 10px;
    padding: 0;
    margin: 0;
    width: 30px;
    background-color: ${theme.colors.white};
    border: none;
    color: ${theme.colors.primary};
    cursor: pointer;
    &:hover:not(:disabled) {
      border: none;
    }
    .icon {
      width: 100%;
      height: 100%;
      margin: 0;
      font-size: 20px;
      padding: 0px;
    }
`
