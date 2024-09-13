import styled from "styled-components";
import { theme } from "../../../../theme";
import TabAdmin from "./tabAdmin";
import { FiChevronDown } from "react-icons/fi";
import { IoAdd } from "react-icons/io5";
import { FaPen } from "react-icons/fa6";
import { useContext } from "react";
import AdminContext from "../../../../contexts/AdminContext";



const PanelAdmin = () => {

    const { isChecked } = useContext(AdminContext);

    console.log(isChecked);
    if (!isChecked) return null;
  return (

    <PanelAdminStyled>
      <div className="onglets">
        <TabAdmin
            Icon={<FiChevronDown className="icon" />}
            inputValue=""a
        />
        <TabAdmin
            Icon={<IoAdd  className="icon"/>}
            inputValue="Ajouter un produit"
        />
        <TabAdmin
            Icon={<FaPen className="icon"/>}
            inputValue="Modifier un produit"
        />
      </div>
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
  z-index: 1;
  display: flex;
  flex-direction: column;
  border-bottom-left-radius: ${theme.borderRadius.extraRound};
  border-bottom-right-radius: ${theme.borderRadius.extraRound};


  .onglets{
    margin-left: 5vh;
    display: inline-flex;
    align-items: center;
    gap: 1px;
  }

  .description{
    height: 250px;
    background-color: white;
    border: 1px solid ${theme.colors.greyLight};
    padding: 20px;
    box-shadow: 0 -2px 5px rgba(0, 0, 0, 0.1);
}
    
    
  
`;