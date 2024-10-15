
import styled from "styled-components";
import ItemBuy from "./ItemBuy";
import EmptyCommande from "./EmptyCommande";
import PropTypes from 'prop-types';
import { findObjectById } from "../../../../utils/arrays";
import { useContext } from "react";
import OrderContext from "../../../../contexts/OrderContext";

const BasketBody = () => {

  const {
    basket,
    isChecked,
    handleDeleteBasketProduct,
    menus,
    handleSelectItem,
    selectedItem
  } = useContext(OrderContext)
  const hasItemsInBasket = basket.some((menu) => menu.quantity > 0);

  const handleOnDelete = (event, id) => {
    event.stopPropagation()
    handleDeleteBasketProduct(id)
  }

  const handleOnSelect = (id) => {
    const itemSelected = findObjectById(id, menus);
    console.log("id", id)
    console.log("itemSelected", itemSelected)
    handleSelectItem(itemSelected);
  }

  return (
    <BasketBodyStyled className="body">
      {hasItemsInBasket ? (
        basket.map((basketProduct) => {
          const menuProduct = findObjectById(basketProduct.id, menus);
            return (
              <ItemBuy
                {...menuProduct}
                key={menuProduct.id}
                quantity={basketProduct.quantity}
                onDelete={(event) => handleOnDelete(event, basketProduct.id)}
                onClick={isChecked ? () => handleOnSelect(basketProduct.id) : null}
                isSelected={(basketProduct.id === selectedItem.id)}
              />
            );
        })
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
