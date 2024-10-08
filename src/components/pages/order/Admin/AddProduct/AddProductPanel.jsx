import ButtonPrimary from "../../../../reusableUI/ButtonPrimary";
import { useContext, useState } from "react";
import OrderContext from "../../../../../contexts/OrderContext";
import { getInputTextConfig } from "./inputTextsConfig";
import InfoMessage from "../../../../reusableUI/InfoMessage";
import { FiCheck } from "react-icons/fi";
import { EMPTY_PRODUCT } from "../../../../../enums/product";
import AdminForm from "../AdminForm";


const AddProductPanel = () => {

    const [isSubmitted, setIsSubmitted] = useState(false);
    const{handleAdd, newProduct, setNewProduct} = useContext(OrderContext);
    const handleChange = (event) => {
        const { name, value } = event.target;
        const newValue = name === "price" ? parseFloat(value) || 0 : value;
        setNewProduct((prevState) => ({
            ...prevState, 
            [name]: newValue,
        }));
    };
    const handleSubmit = (event) => { 
        event.preventDefault();
        const newProductToAdd = {
            ...newProduct,
            id: crypto.randomUUID()
        };
        handleAdd(newProductToAdd);
        setIsSubmitted(true);
        setTimeout(() => {setIsSubmitted(false)}, 2000);
        setNewProduct(EMPTY_PRODUCT);
    }

    const inputTexts = getInputTextConfig(newProduct);

  return (
    <AdminForm
        product={newProduct}
        inputTexts={inputTexts}
        onChange={handleChange}
        onSubmit={handleSubmit}        
    >
        <div className="submit">
            <ButtonPrimary
                label={"Ajouter un nouveau produit"}
                version={"green-button"}
            />
            {isSubmitted && 
                <InfoMessage icon={<FiCheck className="icon" />} label="Ajouté avec succès !" type="success"/>
            }
        </div>
    </AdminForm>
  )
}

export default AddProductPanel;