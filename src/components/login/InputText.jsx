
import { BsPersonCircle } from "react-icons/bs";


const InputText = ({inputValue, onChange, placeholder}) => {
    
  return (
    
    <div className="input-container">
                <BsPersonCircle className="icon" /> {/* Icône ajoutée ici */}
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

export default InputText
