import styled from "styled-components";
import ImagePreview from "./AddProduct/ImagePreview";
import PropTypes from "prop-types";
import InputText from "../../../reusableUI/InputText";
import { forwardRef } from "react";

const AdminForm = forwardRef(({ product, inputTexts, onChange, onSubmit, onFocus, onBlur, children }, ref) => {

  return (
    <AdminFormStyled onSubmit={onSubmit}>
      <ImagePreview imageSource={product.imageSource} title={product.title} />
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
            onFocus={onFocus}
            onBlur={onBlur}
            version={"normal"}
            ref={ref && index === 0 ? ref : null}
          />
        ))}

        {children}
      </div>
    </AdminFormStyled>
  )
});

AdminForm.displayName = "AdminForm";
AdminForm.propTypes = {
  product: PropTypes.object,
  inputTexts: PropTypes.array,
  onChange: PropTypes.func,
  children: PropTypes.object,
  onSubmit: PropTypes.func,
  onFocus: PropTypes.func,
  onBlur: PropTypes.func
};

export default AdminForm;

const AdminFormStyled = styled.form`
  display: flex;
  gap: 20px;

  .inputs {
    display: flex;
    width: 645px;
    height: 121px;
    flex-direction: column;
    gap: 8px;
  }

  .submit {
    display: flex;
  }
`;
