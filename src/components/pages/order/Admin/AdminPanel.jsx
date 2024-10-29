import styled from "styled-components";
import { theme } from "../../../../theme";
import AdminTab from "./AdminTab/AdminTab";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import { useContext } from "react";
import { motion } from "framer-motion";
import AdminContext from "../../../../contexts/OrderContext";
import AddProductPanel from "./AddProduct/AddProductPanel";
import tabsConfig from "./AdminTab/tabsConfig";
import DefaultEditProduct from "./UpdateProduct/DefaultEditProduct";
import EditProductPanel from "./UpdateProduct/EditProductPanel";
import { EMPTY_PRODUCT } from "../../../../enums/product";

const PanelAdmin = () => {
  const { isChecked, selectedItem, activeTab, handleActiveTab, isVisible, handleIsVisible } = useContext(AdminContext);

  if (!isChecked) return null;

  const descriptionVariants = {
    hidden: { height: "0px", opacity: 0, overflow: "hidden", display: "none", transition: { duration: 0.2 } },
    visible: { height: "250px", opacity: 1, overflow: "visible", display: "block", transition: { duration: 1 } },
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
      <motion.div
        className="description"
        variants={descriptionVariants}
        initial="hidden"
        animate={isVisible ? "visible" : "hidden"}
      >
        {activeTab === "addProduct" && <AddProductPanel />}
        {activeTab === "editProduct" && (
          selectedItem === EMPTY_PRODUCT ? <DefaultEditProduct /> : <EditProductPanel selectedItem={selectedItem} />
        )}
      </motion.div>
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
    margin-left: ${theme.spacing.xxl};
    background-color: ${theme.colors.background};
    display: inline-flex;
    align-items: center;
    position: sticky;
    z-index: 2;
  }

  .description {
    background-color: white;
    border: 1px solid ${theme.colors.greyLight};
    padding: 30px 70px;
    box-shadow: 0 -2px 5px rgba(0, 0, 0, 0.1);
    overflow: hidden;
  }`;
