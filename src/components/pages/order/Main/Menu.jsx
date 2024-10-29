import styled from "styled-components";
import Item from "./Item";
import { useContext } from "react";
import { theme } from "../../../../theme";
import OrderContext from "../../../../contexts/OrderContext";
import { findObjectById } from "../../../../utils/arrays";
import { motion, AnimatePresence } from "framer-motion"; // Importer AnimatePresence et motion

const Menu = () => {
  const {
    menus,
    basket,
    handleDelete,
    handleSelectItem,
    selectedItem,
    onDeselect,
    handleActiveTab,
    handleIsVisible,
    handleAddToBasket,
    handleDeleteBasketProduct,
    username,
  } = useContext(OrderContext);

  const handleSelect = (id, title, imageSource, price) => {
    handleSelectItem(id, title, imageSource, price);
    handleActiveTab("editProduct");
    handleIsVisible(true);
  };

  const handleAddOnBasket = (event, id) => {
    event.stopPropagation();
    handleAddToBasket(id, username);
  };

  const onDelete = (id) => {
    const isProductOnBasket = findObjectById(id, basket);
    if (isProductOnBasket) {
      handleDeleteBasketProduct(id, username);
    }
    handleDelete(id, username);
  };

  if (menus === undefined) {
    return <span>Chargement</span>;
  }

  return (
    <MenuStyled className="menu">
      <AnimatePresence>
        {menus.map(({ id, title, imageSource, price }) => (
          <motion.div
            key={id}
            initial={{ opacity: 0, scale: 0.9 }} // État initial
            animate={{ opacity: 1, scale: 1 }} // État d'animation
            exit={{ opacity: 0, scale: 0.9 }} // État de sortie
            transition={{ duration: 0.3 }} // Durée de la transition
          >
            <Item
              id={id}
              title={title}
              imageSource={imageSource}
              price={price}
              onClickButton={() =>
                selectedItem && selectedItem.id === id
                  ? onDeselect()
                  : onDelete(id)
              }
              onSelect={() => handleSelect(id, title, imageSource, price)}
              onAddToBasket={(event) => handleAddOnBasket(event, id)}
              isSelected={selectedItem.id === id}
            />
          </motion.div>
        ))}
      </AnimatePresence>
    </MenuStyled>
  );
};

export default Menu;

const MenuStyled = styled.div`
  background: ${theme.colors.background_white};
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-row-gap: 60px;
  padding: 50px 50px 150px;
  justify-items: center;
  box-shadow: 0px 8px 20px 8px rgba(0, 0, 0, 0.2) inset;
  min-height: 100%;
`;
