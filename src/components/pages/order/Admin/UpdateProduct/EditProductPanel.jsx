import { getInputTextConfig } from "../AddProduct/inputTextsConfig";
import PropTypes from "prop-types";
import OrderContext from "../../../../../contexts/OrderContext";
import { useContext } from "react";
import InfoMessage from "../../../../reusableUI/InfoMessage";
import AdminForm from "../AdminForm";
import { useState } from "react";
import { useSuccessMessage } from "../../../../../hooks/useSuccessMessage";
import { BsCloudCheck } from "react-icons/bs";


const EditProductPanel = () => {
    const { username, editedProduct, handleEdit, firstInputRef } = useContext(OrderContext);
    const inputTexts = getInputTextConfig(editedProduct);
    const [valueOnFocus, setValueOnFocus] = useState();
    const {isSubmitted : isSaved, displaySuccessMessage} = useSuccessMessage();

    const handleChange = (event) => {
      const { name, value } = event.target;
      const newValue = name === "price" ? parseFloat(value) || 0 : value;
      const updatedProduct = {
        ...editedProduct,
        [name]: newValue,
      };
    handleEdit(updatedProduct, username);
    };
    const handleFocus = (event) => {
      setValueOnFocus(event.target.value);
    }
    const handleBlur = (event) => {
      if(event.target.value !== valueOnFocus){
        displaySuccessMessage();

      }
    }

  return (
    <AdminForm 
      product={editedProduct}
      inputTexts={inputTexts}
      onChange={handleChange}
      onFocus={handleFocus}
      onBlur={handleBlur}
      ref={firstInputRef}
    >
      {isSaved ? 
        <InfoMessage  icon={<BsCloudCheck />} label="Modifications enregistrées !" type="update"/>
        :
        <InfoMessage label="Cliquer sur un produit du menu pour le modifier en temps réel" type="alert"/> 
      }

    </AdminForm>
      
  )
}

export default EditProductPanel


EditProductPanel.propTypes = {
    selectedItem: PropTypes.object.isRequired
  };
