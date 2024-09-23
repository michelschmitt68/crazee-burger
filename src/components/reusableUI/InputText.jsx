import PropTypes from 'prop-types';
import styled from 'styled-components';
import { theme } from '../../theme';


const InputText = ({type, required, inputValue, onChange, placeholder, Icon, className, name}) => {
  return (
    <InputStyled className={className}>
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
  inputValue: PropTypes.string,
  onChange: PropTypes.func,  
  placeholder: PropTypes.string,
  Icon: PropTypes.element,
  className: PropTypes.string,
  name: PropTypes.string         
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

`;
