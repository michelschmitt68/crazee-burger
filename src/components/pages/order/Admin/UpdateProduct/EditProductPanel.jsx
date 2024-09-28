import styled from "styled-components";
import { theme } from "../../../../../theme";
import { HiOutlineCursorClick } from "react-icons/hi";


const EditProductPanel = () => {
  return (
    <EditProductPanelStyled>
      <p>CLIQUER SUR UN PRODUIT POUR LE MODIFIER 
        <HiOutlineCursorClick className="icon"/>
      </p>

      
    </EditProductPanelStyled>
  )
}

export default EditProductPanel


const EditProductPanelStyled = styled.div`

  padding-top: 50px;
  line-height: 0px;

  font-size: ${theme.fonts.P3};
  color: ${theme.colors.greyBlue};
  font-family: "Amatic SC", cursive;
  font-weight: ${theme.weights.regular};

  .icon{
    margin-left: 9px;
  }
`;