import styled from "styled-components";
import ButtonPrimary from "../../../reusableUI/ButtonPrimary";
import { theme } from "../../../../theme";
import { useContext } from "react";
import AdminContext from "../../../../contexts/OrderContext";


const EmptyMenu = () => {

    //useContext
    const {isChecked, resetMenus} = useContext(AdminContext);

  return (
    <EmptyMenuStyled>
    {isChecked ? (
        <>
        <h1>LE MENU EST VIDE ?</h1>
        <h2>CLIQUEZ CI-DESSOUS POUR LE RÉINITIALISER</h2>
        <ButtonPrimary 
            label={"Générer de nouveaux produits"}
            onClick={resetMenus}
        />
        </>
    ) : (
        <>
        <h1>VICTIME DE NOTRE SUCCÈS</h1>
        <h2>DE NOUVELLES RECETTES SONT EN COURS DE PRÉPARATION</h2>
        <h2>À TRÈS VITE !</h2>
        </>
    )}
</EmptyMenuStyled>
  )
}

export default EmptyMenu

const EmptyMenuStyled = styled.div`

    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 20px;
    height: 100%;

    font-family: "Amatic SC", cursive;
    color: ${theme.colors.greyBlue};

    h1{
        margin: 0px;
        font-weight: ${theme.weights.bold};
        font-size: ${theme.fonts.P4}; 
    }
    h2{
        margin: 0px;
        font-weight: ${theme.weights.regular};
        font-size: ${theme.fonts.P4};
    }
    button{
        width: auto;
    }

`;