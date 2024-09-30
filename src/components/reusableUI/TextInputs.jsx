import PropTypes from "prop-types"
import InputText from "./InputText"
import styled from "styled-components"


const TextInputs = ({ inputTexts, onChange}) => {
  return (
    <TextInputsStyled>

        <div className="inputs">
            {inputTexts.map((input, index) => (
                <InputText
                    key={index} 
                    type={input.type}
                    required={false}
                    name={input.name}
                    Icon={input.Icon}
                    placeholder={input.placeholder}
                    inputValue={input.value}
                    onChange={onChange}
                    version={"normal"}
                />
            ))}
        </div>
      
    </TextInputsStyled>
  )
}

export default TextInputs

TextInputs.propTypes = {
    inputTexts: PropTypes.array,
    onChange: () => {}
  };

  const TextInputsStyled = styled.div`
        display: flex;
        gap: 20px;
  `;
