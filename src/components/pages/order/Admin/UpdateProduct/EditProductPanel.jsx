import { getInputTextConfig } from "../AddProduct/inputTextsConfig";
import PropTypes from "prop-types";
import OrderContext from "../../../../../contexts/OrderContext";
import { useContext } from "react";
import InfoMessage from "../../../../reusableUI/InfoMessage";
import AdminForm from "../AdminForm";
import { updateMenu } from "../../../../../api/product";


const EditProductPanel = () => {
    const { username, menus, editedProduct, handleEdit, firstInputRef } = useContext(OrderContext);
    const inputTexts = getInputTextConfig(editedProduct);

    const handleChange = (event) => {
      const { name, value } = event.target;
      const newValue = name === "price" ? parseFloat(value) || 0 : value;
      const updatedProduct = {
        ...editedProduct,
        [name]: newValue,
      };
    handleEdit(updatedProduct, username);
    };

  return (
    <AdminForm 
      product={editedProduct}
      inputTexts={inputTexts}
      onChange={handleChange}
      ref={firstInputRef}
    >
      <InfoMessage label="Cliquer sur un produit du menu pour le modifier en temps réel" type="alert"/>
    </AdminForm>
      
  )
}

export default EditProductPanel


EditProductPanel.propTypes = {
    selectedItem: PropTypes.object.isRequired
  };
