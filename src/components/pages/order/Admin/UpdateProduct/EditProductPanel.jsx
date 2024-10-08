import styled from "styled-components";
import TextInputs from "../../../../reusableUI/TextInputs";
import { getInputTextConfig } from "../AddProduct/inputTextsConfig";
import ImagePreview from "../AddProduct/ImagePreview";
import PropTypes from "prop-types";
import OrderContext from "../../../../../contexts/OrderContext";
import { useContext } from "react";
import InfoMessage from "../../../../reusableUI/InfoMessage";
import AdminForm from "../AdminForm";


const EditProductPanel = () => {
    const { editedProduct, setEditedProduct, handleEdit, firstInputRef } = useContext(OrderContext);


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
    <>
      <AdminForm 
        product={editedProduct}
        inputTexts={inputTexts}
        onChange={handleChange}
      />
      <InfoMessage label="Cliquer sur un produit du menu pour le modifier en temps réel" type="alert"/> 
    </>
  )
}

export default EditProductPanel


EditProductPanel.propTypes = {
    selectedItem: PropTypes.object.isRequired
  };
