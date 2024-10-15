
import styled from "styled-components";
import ItemBuy from "./ItemBuy";
import EmptyCommande from "./EmptyCommande";
import PropTypes from 'prop-types';
import { findObjectById } from "../../../../utils/arrays";
import { useContext } from "react";
import OrderContext from "../../../../contexts/OrderContext";

const BasketBody = ({ basket }) => {

  const {menus} = useContext(OrderContext);
  const hasItemsInBasket = basket.some((menu) => menu.quantity > 0);
  console.log("basket:", basket)

  return (
    <BasketBodyStyled className="body">
      {hasItemsInBasket ? (
        basket.map((basketProduct) => {
          const menuProduct = findObjectById(basketProduct.id, menus);
            return (
              <ItemBuy
                key={menuProduct.id}
                id={menuProduct.id}
                title={menuProduct.title}
                imageSource={menuProduct.imageSource}
                price={menuProduct.price}
                quantity={basketProduct.quantity}
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
