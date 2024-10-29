import styled from "styled-components";
import { theme } from "../../../../theme";
import AdminTab from "./AdminTab/AdminTab";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import { useContext } from "react";
import { motion } from "framer-motion"; // Importer motion
import AdminContext from "../../../../contexts/OrderContext";
import AddProductPanel from "./AddProduct/AddProductPanel";
import tabsConfig from "./AdminTab/tabsConfig";
import DefaultEditProduct from "./UpdateProduct/DefaultEditProduct";
import EditProductPanel from "./UpdateProduct/EditProductPanel";
import { EMPTY_PRODUCT } from "../../../../enums/product";

const PanelAdmin = () => {
  const { isChecked, selectedItem, activeTab, handleActiveTab, isVisible, handleIsVisible } = useContext(AdminContext);

  if (!isChecked) return null;

  // Définir les variantes d'animation
  const descriptionVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    exit: { opacity: 0, y: 20, transition: { duration: 0.5 } },
  };

  return (
    <PanelAdminStyled>
      <div className="onglets">
        <AdminTab
          key={"toggle"}
          Icon={!isVisible ? <FiChevronUp className="icon" /> : <FiChevronDown />}
          onClick={() => handleIsVisible(!isVisible)}
          className={isVisible ? "tab-select" : ""}
        />
        {tabsConfig.map((tab) => (
          <AdminTab
            key={tab.id}
            Icon={tab.Icon}
            inputValue={tab.inputValue}
            onClick={() => {
              handleActiveTab(tab.id);
              handleIsVisible(true);
            }}
            className={activeTab === tab.id ? "tab-select" : ""}
          />
        ))}
      </div>
      {isVisible && (
        <motion.div
          className="description"
          variants={descriptionVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
        >
          {activeTab === "addProduct" && <AddProductPanel />}
          {activeTab === "editProduct" && (
            selectedItem === EMPTY_PRODUCT ? <DefaultEditProduct /> : <EditProductPanel selectedItem={selectedItem} />
          )}
        </motion.div>
      )}
    </PanelAdminStyled>
  );
};

export default PanelAdmin;

const PanelAdminStyled = styled.div`
  display: flex;
  position: sticky;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  z-index: 1;
  flex-direction: column;
  border-bottom-left-radius: ${theme.borderRadius.extraRound};
  border-bottom-right-radius: ${theme.borderRadius.extraRound};

  .onglets {
    margin-left: 5vh;
    display: inline-flex;
    align-items: center;
    gap: 1px;
  }

  .description {
    height: 250px;
    background-color: white;
    border: 1px solid ${theme.colors.greyLight};
    padding: 30px 70px;
    box-shadow: 0 -2px 5px rgba(0, 0, 0, 0.1);
  }
`;
