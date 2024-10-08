import styled from "styled-components";
import ImagePreview from "./AddProduct/ImagePreview";
import PropTypes from "prop-types";
import InputText from "../../../reusableUI/InputText";

const AdminForm = ({product, inputTexts, onChange}) => {
    console.log("bb", inputTexts)
    return (
    <AdminFormStyled>
      <ImagePreview
        imageSource={product.imageSource}
        title={product.title}
        />
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
                ref={index === 0 ? input.ref : null}
            />
        ))}
      </div>
    </AdminFormStyled>
  )
}

export default AdminForm

AdminForm.propTypes = {
    product: PropTypes.object,
    inputTexts: PropTypes.array,
    onChange: PropTypes.func
  };

const AdminFormStyled = styled.div`
  display: flex;
  gap: 20px;

  .inputs{
        display: flex;
        width: 645px;
        height: 121px;
        flex-direction: column;
        gap: 8px;
    }

    .submit{
        display: flex;
    }
`;