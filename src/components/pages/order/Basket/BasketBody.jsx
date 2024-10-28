
import styled from "styled-components";
import ItemBuy from "./ItemBuy";
import EmptyCommande from "./EmptyCommande";
import PropTypes from 'prop-types';
import { findObjectById } from "../../../../utils/arrays";
import { useContext } from "react";
import OrderContext from "../../../../contexts/OrderContext";
import { motion, AnimatePresence } from "framer-motion";

const BasketBody = () => {

  const {
    basket,
    isChecked,
    handleDeleteBasketProduct,
    menus,
    handleSelectItem,
    selectedItem,
    username
  } = useContext(OrderContext)
  
  const hasItemsInBasket = basket.some((menu) => menu.quantity > 0);

  const handleOnDelete = (event, id) => {
    event.stopPropagation()
    handleDeleteBasketProduct(id, username)
  }

  return (
    <BasketBodyStyled className="body">
      {hasItemsInBasket ? (
        <AnimatePresence >
          {basket.map((basketProduct) => {
            const menuProduct = findObjectById(basketProduct.id, menus);
            
            return (
              <MotionItem
                key={basketProduct.id}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5, exit: {duration: 0.3} }}
              >
                <ItemBuy
                  {...menuProduct}
                  quantity={basketProduct.quantity}
                  onDelete={(event) => handleOnDelete(event, basketProduct.id)}
                  onClick={isChecked ? () => handleSelectItem(basketProduct.id) : null}
                  isSelected={basketProduct.id === selectedItem.id}
                />
              </MotionItem>
            );
          })}
        </AnimatePresence>
      ) : (
        <EmptyCommande />
      )}
    </BasketBodyStyled>
  );
};

export default BasketBody;

BasketBody.propTypes = {
  basket: PropTypes.array,
};

const BasketBodyStyled = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  flex: 1;
  padding: 20px 16px;
  gap: 20px;
  max-height: 969px;
  overflow-y: scroll;
`;

const MotionItem = styled(motion.div)`
  width: 100%; /* Match the width of ItemBuy */
  display: flex;
  justify-content: center;
`;
