import styled from "styled-components";
import { theme } from "../../../../theme";
import InputText from "../../../reusableUI/InputText";
import ButtonPrimary from "../../../reusableUI/ButtonPrimary";
import { FaHamburger } from "react-icons/fa";
import { BsFillCameraFill } from "react-icons/bs";
import { MdOutlineEuro } from "react-icons/md";
import { useContext, useState } from "react";
import MenusContext from "../../../../contexts/MenusContext";


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
            imageSource: imageInputValue,
            title: nameInputValue,
            price: priceInputValue,
            quantity: 0,
            isAvailable: true,
            isAdvertised: false,
        };

        setMenus([...menus, newMenu]);
        setNameInputValue("");
        setImageInputValue("");
        setPriceInputValue("");
    }

  return (
    <AddProductPanelStyled action="submit" onSubmit={handleSubmit}>
        <div className="image-add">Aucune Image</div>
        <div className="inputs">
            <InputText
                required={false}
                Icon={<FaHamburger/>}
                placeholder={"Nom du produit (ex: Super Burger)"}
                className={"input-panel-admin"}
                inputValue={nameInputValue}
                onChange={(event) => {setNameInputValue(event.target.value)}}
            />
            <InputText
                equired={false}
                Icon={<BsFillCameraFill/>}
                placeholder={"Lien URL d'une image (ex: https://la-photo-de-mon-produit.png)"}
                className={"input-panel-admin"}
                inputValue={imageInputValue}
                onChange={(event) => {setImageInputValue(event.target.value)}}
            />
            <InputText
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
        }

`;
