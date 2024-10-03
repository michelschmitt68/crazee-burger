import styled from "styled-components";
import TextInputs from "../../../../reusableUI/TextInputs";
import { getInputTextConfig } from "../AddProduct/inputTextsConfig";
import ImagePreview from "../AddProduct/ImagePreview";
import PropTypes from "prop-types";
import OrderContext from "../../../../../contexts/OrderContext";
import { useContext } from "react";


const EditProductPanel = () => {
    const { editedProduct, setEditedProduct, handleEdit } = useContext(OrderContext);
    const inputTexts = getInputTextConfig(editedProduct);
  
    const handleChange = (event) => {
      const { name, value } = event.target;
      const newValue = name === "price" ? parseFloat(value) || 0 : value;
      const updatedProduct = {
        ...editedProduct,
        [name]: newValue,
      };

    setEditedProduct(updatedProduct);
    handleEdit(updatedProduct);
  };

  return (
    <EditProductPanelStyled>
      <ImagePreview
            imageSource={editedProduct.imageSource}
            title={editedProduct.title}
        />
      <div className="inputs">
            <TextInputs 
                inputTexts= {inputTexts}
                onChange={handleChange}
            />         
        </div>

    </EditProductPanelStyled>
  )
}

export default EditProductPanel


EditProductPanel.propTypes = {
    selectedItem: PropTypes.object.isRequired
  };


const EditProductPanelStyled = styled.div`

    display: flex;
    gap: 20px;


    .inputs{
        display: flex;
        width: 645px;
        height: 121px;
        flex-direction: column;
        gap: 8px;
    }
  
`;