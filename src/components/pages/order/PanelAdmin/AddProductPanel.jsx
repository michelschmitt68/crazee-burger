import styled from "styled-components";
import { theme } from "../../../../theme";
import InputText from "../../../reusableUI/InputText";
import ButtonPrimary from "../../../reusableUI/ButtonPrimary";

import { FaHamburger } from "react-icons/fa";
import { BsFillCameraFill } from "react-icons/bs";
import { MdOutlineEuro } from "react-icons/md";


const AddProductPanel = () => {
  return (
    <AddProductPanelStyled>
        <div className="image-add">Aucune Image</div>
        <div className="inputs">
            <InputText
                Icon={<FaHamburger/>}
                placeholder={"Nom du produit (ex: Super Burger)"}
                className={"input-panel-admin"}
            />
            <InputText
                Icon={<BsFillCameraFill/>}
                placeholder={"Lien URL d'une image (ex: https://la-photo-de-mon-produit.png)"}
                className={"input-panel-admin"}
            />
            <InputText
                Icon={<MdOutlineEuro/>}
                placeholder={"Prix"}
                className={"input-panel-admin"}
            />

            <ButtonPrimary
                label={"Ajouter un nouveau produit"}
                className={"button-add-product"}
            />
        </div>
    </AddProductPanelStyled>
  )
}

export default AddProductPanel

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
