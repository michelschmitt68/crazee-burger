import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { theme } from '../../theme';


const InputText = ({type, required, inputValue, onChange, placeholder, Icon, className, name, version}) => {
  return (
    <InputStyled className={className} version={version}>
      {Icon && Icon}
      <input
        type={type}
        required={required}
        name={name}
        value={inputValue}
        onChange={onChange}
        placeholder={placeholder}
      />
    </InputStyled>
  )
}

InputText.propTypes = {
  type: PropTypes.string,
  required: PropTypes.bool,
  inputValue: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  onChange: PropTypes.func,  
  placeholder: PropTypes.string,
  Icon: PropTypes.element,
  className: PropTypes.string,
  name: PropTypes.string,
  version: PropTypes.string         
};

export default InputText;



const InputStyled = styled.div`

    background-color: ${theme.colors.white};
    border-radius: ${theme.borderRadius.round};
    display: flex;
    align-items: center;
    padding: 18px 24px;
    margin: 18px 0;

    input{
      border: none;
      font-size: ${theme.fonts.SM};
      color: ${theme.colors.dark};
      width: 100%;

        &::placeholder{
            background-color: ${theme.colors.white};
            color: ${theme.colors.greyMedium};
        }
    }
    .icon{
        color: ${theme.colors.greyMedium};
        margin-right: 8px;
    }

    ${(props) => props.version === "normal" && extraStyleNormal}

`;

const extraStyleNormal = css`
  height: 35px;
  padding: 10px 20px;
  margin: 0px;
  gap: 20px;
  background-color: ${theme.colors.background_white};
  color: ${theme.colors.greyDark};

  input{
    background-color: ${theme.colors.background_white};
    &::placeholder{
      background-color: ${theme.colors.background_white};
    }
  }
`
