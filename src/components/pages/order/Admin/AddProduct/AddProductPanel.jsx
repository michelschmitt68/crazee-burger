
import { useContext } from "react";
import OrderContext from "../../../../../contexts/OrderContext";
import { getInputTextConfig } from "./inputTextsConfig";
import { EMPTY_PRODUCT } from "../../../../../enums/product";
import AdminForm from "../AdminForm";
import SubmitButton from "./SubmitButton";
import { useSuccessMessage } from "../../../../../hooks/useSuccessMessage";
import { updateMenu } from "../../../../../api/product";


const AddProductPanel = () => {


    const{handleAdd, newProduct, setNewProduct, menus, username} = useContext(OrderContext);
    const {isSubmitted, displaySuccessMessage} = useSuccessMessage();

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
            id: String(menus.length + 1)
        };
        handleAdd(newProductToAdd);
        updateMenu(username, menus);
        setNewProduct(EMPTY_PRODUCT);
        displaySuccessMessage();
    }

    const inputTexts = getInputTextConfig(newProduct);

  return (
    <AdminForm
        product={newProduct}
        inputTexts={inputTexts}
        onChange={handleChange}
        onSubmit={handleSubmit}        
    >
        <SubmitButton isSubmitted={isSubmitted}/>
    </AdminForm>
  )
}

export default AddProductPanel;