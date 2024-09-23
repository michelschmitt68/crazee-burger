import styled from "styled-components";
import { theme } from "../../../../theme";
import InputText from "../../../reusableUI/InputText";
import ButtonPrimary from "../../../reusableUI/ButtonPrimary";
import { FaHamburger } from "react-icons/fa";
import { BsFillCameraFill } from "react-icons/bs";
import { MdOutlineEuro } from "react-icons/md";
import { useContext, useState } from "react";
import OrderContext from "../../../../contexts/OrderContext";
import { FiCheck } from "react-icons/fi";



const AddProductPanel = () => {

    const EMPTY_PRODUCT = {
        id:"",
        title:"",
        imageSource:"",
        price: 0
    }
    const [newProduct, setNewProduct] = useState(EMPTY_PRODUCT);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const{handleAdd} = useContext(OrderContext);


    const handleChange = (event) => {
        const { name, value } = event.target;
        const newValue = name === "price" ? parseFloat(value) || 0 : value;
        setNewProduct((prevState) => ({
            ...prevState, 
            [name]: newValue 
        }));
    };

    const handleSubmit = (event) => { 
        event.preventDefault();
        const newProductToAdd = {
            ...newProduct,
            id: crypto.randomUUID()
        };
        handleAdd(newProductToAdd);
        setNewProduct(EMPTY_PRODUCT);
        setIsSubmitted(true);
        setTimeout(() => {setIsSubmitted(false)}, 2000)
    }

  return (
    <AddProductPanelStyled action="submit" onSubmit={handleSubmit}>
        <div className="image-add">
            {newProduct.imageSource ? ( 
                <img alt={""} src={newProduct.imageSource} />
            ) : (
                <p>Aucune image</p>
            )}
        </div>
        <div className="inputs">
            <InputText
                type={"text"}
                required={false}
                name="title"
                Icon={<FaHamburger/>}
                placeholder={"Nom du produit (ex: Super Burger)"}
                value={newProduct.title}
                onChange={handleChange}
                version={"normal"}
            />
            <InputText
                type={"text"}
                required={false}
                name="imageSource"
                Icon={<BsFillCameraFill/>}
                placeholder={"Lien URL d'une image (ex: https://la-photo-de-mon-produit.png)"}
                value={newProduct.imageSource}
                onChange={handleChange}
                version={"normal"}
            />
            <InputText
                type={"number"}
                required={false}
                name="price"
                Icon={<MdOutlineEuro/>}
                placeholder={"Prix"}
                value={newProduct.price}
                onChange={handleChange}
                version={"normal"}
            />

            <div className="end">
                <ButtonPrimary
                    label={"Ajouter un nouveau produit"}
                    version={"green-button"}
                />
                {isSubmitted && <div className="end">
                    <FiCheck className="icon" />
                    <span>Ajouté avec succès !</span>
                    </div>}
            </div>
        </div>
    </AddProductPanelStyled>
  )
}

export default AddProductPanel;

const AddProductPanelStyled = styled.form`

    display: flex;
    gap: 20px;


    .image-add{
        display: flex;
        justify-content: center;
        align-items: center;
        color: ${theme.colors.greySemiDark};
        border: 1px solid ${theme.colors.greyLight};
        width: 215px;
        height: 120px;

        img{
            width: 100%;
            height: 100%;
            object-fit: contain;
        }
    }

    .inputs{
        display: flex;
        width: 645px;
        height: 121px;
        flex-direction: column;
        gap: 8px;
    }

    .end {
        display: flex;
        align-items: center; 
        vertical-align: middle; 
        color: #60BD4F;
        gap: 5px;

        span {     
            font-size: ${theme.fonts.P0}; 
        }
        .icon {
            border: solid 1px #60BD4F; 
            border-radius: ${theme.borderRadius.extraRound}; 
            font-size: ${theme.fonts.P1};
            margin-left: 15px;
        }
}

`;
