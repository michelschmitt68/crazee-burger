import styled from "styled-components";
import { theme } from "../../../../theme";
import AdminTab from "./AdminTab/AdminTab";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import { useContext, useState } from "react";
import AdminContext from "../../../../contexts/OrderContext";
import AddProductPanel from "./AddProduct/AddProductPanel";
import tabsConfig from "./AdminTab/tabsConfig";
import DefaultEditProduct from "./UpdateProduct/DefaultEditProduct";
import EditProductPanel from "./UpdateProduct/EditProductPanel";




const PanelAdmin = () => {
    const [isVisible, setIsVisible] = useState(true);
    const [activeTab, setActiveTab] = useState("addProduct");
    //Context
    const { isChecked, selectedItem } = useContext(AdminContext);
    

if (!isChecked) return null;
  return (

   <PanelAdminStyled>
      <div className="onglets">
        <AdminTab
          key={"toggle"}
          Icon={!isVisible ? <FiChevronUp className="icon" /> : <FiChevronDown />}
          onClick={() => setIsVisible(!isVisible)}
          className={isVisible ? "tab-select" : ""}
        />

        {tabsConfig.map((tab) => (
          <AdminTab
            key={tab.id}
            Icon={tab.Icon}
            inputValue={tab.inputValue}
            onClick={ () => {
              setActiveTab(tab.id);
              setIsVisible(true);
              }
            }
            className= {activeTab === tab.id ? "tab-select" : ""}
          />
        ))}
      </div>
      {isVisible && (
        <div className="description">
          {activeTab === "addProduct" && <AddProductPanel />}
          {activeTab === "editProduct" && (
            selectedItem ? <EditProductPanel selectedItem={selectedItem} /> : <DefaultEditProduct />
    )}
        </div>
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
    padding: 30px 70px;
    box-shadow: 0 -2px 5px rgba(0, 0, 0, 0.1);
    border-bottom-left-radius: ${theme.borderRadius.extraRound};
    border-bottom-right-radius: ${theme.borderRadius.extraRound};
}
    
    
  
`;