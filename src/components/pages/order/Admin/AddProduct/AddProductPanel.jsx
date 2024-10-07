import styled from "styled-components";
import ButtonPrimary from "../../../../reusableUI/ButtonPrimary";
import { useContext, useState } from "react";
import OrderContext from "../../../../../contexts/OrderContext";
import ImagePreview from "./ImagePreview";
import { getInputTextConfig } from "./inputTextsConfig";
import TextInputs from "../../../../reusableUI/TextInputs";
import InfoMessage from "../../../../reusableUI/InfoMessage";
import { FiCheck } from "react-icons/fi";
import { EMPTY_PRODUCT } from "../../../../../enums/product";


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
    <AddProductPanelStyled action="submit" onSubmit={handleSubmit}>
        <ImagePreview
            imageSource={newProduct.imageSource}
            title={newProduct.title}
        />
        <div className="inputs">
            <TextInputs 
                inputTexts= {inputTexts}
                onChange={handleChange}
            />         
            <div className="submit">
                <ButtonPrimary
                    label={"Ajouter un nouveau produit"}
                    version={"green-button"}
                />
                {isSubmitted && 
                    <InfoMessage icon={<FiCheck className="icon" />} label="Ajouté avec succès !" type="success"/>
                }
            </div>
        </div>
    </AddProductPanelStyled>
  )
}

export default AddProductPanel;

const AddProductPanelStyled = styled.form`

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
