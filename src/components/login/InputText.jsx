import PropTypes from 'prop-types';
import { BsPersonCircle } from "react-icons/bs";

const InputText = ({inputValue, onChange, placeholder}) => {
  return (
    <div className="input-container">
      <BsPersonCircle className="icon" />
      <input
        type="text"
        required
        value={inputValue}
        onChange={onChange}
        placeholder={placeholder}
      />
    </div>
  )
}

InputText.propTypes = {
  inputValue: PropTypes.string.isRequired, 
  onChange: PropTypes.func.isRequired,     
  placeholder: PropTypes.string            
};

export default InputText;
