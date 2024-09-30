import styled from "styled-components";
import TextInputs from "../../../../reusableUI/TextInputs";
import { getInputTextConfig } from "../AddProduct/inputTextsConfig";
import { useContext } from "react";
import OrderContext from "../../../../../contexts/OrderContext";
import ImagePreview from "../AddProduct/ImagePreview";
import ButtonPrimary from "../../../../reusableUI/ButtonPrimary";


const EditProductPanel = () => {

  const{newProduct} = useContext(OrderContext); //useref
  const inputTexts = getInputTextConfig(newProduct);

  return (
    <EditProductPanelStyled>
      <ImagePreview
            imageSource={newProduct.imageSource}
            title={newProduct.title}
        />
      <div className="inputs">
            <TextInputs 
                inputTexts= {inputTexts}
            />         
            <div className="submit">
                <ButtonPrimary
                    label={"Ajouter un nouveau produit"}
                    version={"green-button"}
                />
            </div>
        </div>

    </EditProductPanelStyled>
  )
}

export default EditProductPanel


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