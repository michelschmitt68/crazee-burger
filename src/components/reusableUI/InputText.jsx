import PropTypes from 'prop-types';
import styled from 'styled-components';
import { theme } from '../../theme';


const InputText = ({inputValue, onChange, placeholder, Icon, className}) => {
  return (
    <InputStyled className={className}>
      {Icon && Icon}
      <input
        type="text"
        required
        value={inputValue}
        onChange={onChange}
        placeholder={placeholder}
      />
    </InputStyled>
  )
}

InputText.propTypes = {
  inputValue: PropTypes.string,
  onChange: PropTypes.func,  
  placeholder: PropTypes.string,
  Icon: PropTypes.element,
  className: PropTypes.string         
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
