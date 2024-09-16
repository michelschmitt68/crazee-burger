import styled from "styled-components";
import { theme } from "../../../../theme";
import TabAdmin from "./tabAdmin";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import { IoAdd } from "react-icons/io5";
import { FaPen } from "react-icons/fa6";
import { useContext, useState } from "react";
import AdminContext from "../../../../contexts/AdminContext";



const PanelAdmin = () => {
    const [isVisible, setIsVisible] = useState(true);
    const [activeTab, setActiveTab] = useState("addProduct");
    const [description, setDescription] = useState("Ajouter un produit")
    const { isChecked } = useContext(AdminContext);


    const handleVisibility = () => {
        setIsVisible(!isVisible)
      };

      const tabs = [
        {
          id: "toggle",
          Icon: !isVisible ? <FiChevronUp className="icon" /> : <FiChevronDown />,
          onClick: handleVisibility,
          className: !isVisible ? "tab-select" : ""
        },
        {
          id: "addProduct",
          Icon: <IoAdd className="icon" />,
          inputValue: "Ajouter un produit",
          onClick: () => {
            setActiveTab("addProduct");
            setDescription("Ajouter un produit");
            setIsVisible(true);
          },
          className: activeTab === "addProduct" ? "tab-select" : ""
        },
        {
          id: "editProduct",
          Icon: <FaPen className="icon" />,
          inputValue: "Modifier un produit",
          onClick: () => {
            setActiveTab("editProduct");
            setDescription("Modifier un produit");
            setIsVisible(true);
          },
          className: activeTab === "editProduct" ? "tab-select" : ""
        }
      ];


if (!isChecked) return null;
  return (

   <PanelAdminStyled>
      <div className="onglets">
        {tabs.map((tab) => (
          <TabAdmin
            key={tab.id}
            Icon={tab.Icon}
            inputValue={tab.inputValue}
            onClick={tab.onClick}
            className={tab.className} // Pass className here
          />
        ))}
      </div>
      {isVisible && (
        <div className="description">{description}</div>
      )}
    </PanelAdminStyled>

  )
}

export default PanelAdmin;

const PanelAdminStyled = styled.div`
  display: flex;
  position: fixed;
  bottom: 32px;
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
    border-bottom-left-radius: ${theme.borderRadius.extraRound};
    border-bottom-right-radius: ${theme.borderRadius.extraRound};
}
    
    
  
`;