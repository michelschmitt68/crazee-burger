import styled from "styled-components";
import { theme } from "../../../../theme";
import InputText from "../../../reusableUI/InputText";
import ButtonPrimary from "../../../reusableUI/ButtonPrimary";
import { FaHamburger } from "react-icons/fa";
import { BsFillCameraFill } from "react-icons/bs";
import { MdOutlineEuro } from "react-icons/md";
import { useContext, useState } from "react";
import MenusContext from "../../../../contexts/MenusContext";
import { toast } from "react-toastify";


const AddProductPanel = () => {

    const [nameInputValue, setNameInputValue] = useState("");
    const [imageInputValue, setImageInputValue] = useState("");
    const [priceInputValue, setPriceInputValue] = useState("");

    //Context
    const{menus, setMenus} = useContext(MenusContext);

    const handleSubmit = (event) => {
        event.preventDefault();
        const newMenu = {
            id: menus.length + 1,
            imageSource: imageInputValue === "" ? "/images/coming-soon.png" : imageInputValue, 
            title: nameInputValue,
            price: priceInputValue === "" ? 0 : parseFloat(priceInputValue),
            quantity: 0,
            isAvailable: true,
            isAdvertised: false,
        };

        setMenus([...menus, newMenu]);

        toast.info("Ajouté avec succès !", {
            theme: "dark",
            position: "bottom-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });
        
        setNameInputValue("");
        setImageInputValue("");
        setPriceInputValue("");
    }

  return (
    <AddProductPanelStyled action="submit" onSubmit={handleSubmit}>
        <div className="image-add">
            {imageInputValue ? ( 
                <img alt={"a"} src={imageInputValue} />
            ) : (
                <p>Aucune image</p>
            )}
        </div>
        <div className="inputs">
            <InputText
                type={"text"}
                required={false}
                Icon={<FaHamburger/>}
                placeholder={"Nom du produit (ex: Super Burger)"}
                className={"input-panel-admin"}
                inputValue={nameInputValue}
                onChange={(event) => {setNameInputValue(event.target.value)}}
            />
            <InputText
                type={"text"}
                equired={false}
                Icon={<BsFillCameraFill/>}
                placeholder={"Lien URL d'une image (ex: https://la-photo-de-mon-produit.png)"}
                className={"input-panel-admin"}
                inputValue={imageInputValue}
                onChange={(event) => {setImageInputValue(event.target.value)}}
            />
            <InputText
                type={"number"}
                required={false}
                Icon={<MdOutlineEuro/>}
                placeholder={"Prix"}
                className={"input-panel-admin"}
                inputValue={priceInputValue}
                onChange={(event) => {setPriceInputValue(event.target.value)}}
            />

            <ButtonPrimary
                label={"Ajouter un nouveau produit"}
                className={"button-add-product"}
            />
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

        .input-panel-admin{
            height: 35px;
            padding: 10px 20px;
            margin: 0px;
            gap: 20px;
            background-color: ${theme.colors.background_white};
            color: ${theme.colors.greyDark};

            input{
                background-color: ${theme.colors.background_white};
                &::placeholder{
                    background-color: ${theme.colors.background_white};
                }
            }
        }}

        .button-add-product{
            background-color: #60BD4F;
            border: none;
            width: 275px;
            padding: 10px 29px;
        
        &:hover{
            background-color: white;
            color: #60BD4F;
            border-color: #60BD4F;
        }
    }

`;
