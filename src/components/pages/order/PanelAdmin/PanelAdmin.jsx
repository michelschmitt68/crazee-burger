import styled from "styled-components";
import { theme } from "../../../../theme";



const PanelAdmin = () => {


  return (
    <PanelAdminStyled>
      <div className="onglets">Onglets</div>
      <div className="description">Ajouter un produit</div>
    </PanelAdminStyled>
  )
}

export default PanelAdmin;

const PanelAdminStyled = styled.div`
  display: flex;
  position: fixed;
  bottom: 20px;
  width: 1400px;
  background-color: white;
  z-index: 1;
  display: flex;
  flex-direction: column;
  border-bottom-left-radius: ${theme.borderRadius.extraRound};
  border-bottom-right-radius: ${theme.borderRadius.extraRound};


  .onglets{
    height: 44px;
    background-color: green;
  }

  .description{
    height: 250px;
  }
    
    
  
`;