import PropTypes from 'prop-types';
import styled from 'styled-components';
import { theme } from '../../theme';


const InputText = ({inputValue, onChange, placeholder, Icon}) => {
  return (
    <InputStyled >
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
  inputValue: PropTypes.string.isRequired, 
  onChange: PropTypes.func.isRequired,     
  placeholder: PropTypes.string,
  Icon: PropTypes.element            
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
        font-size: ${theme.fonts.P0};
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
