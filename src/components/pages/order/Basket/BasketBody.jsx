import { useContext } from "react";
import styled from "styled-components";
import OrderContext from "../../../../contexts/OrderContext";
import ItemBuy from "./ItemBuy";

const BasketBody = () => {
  const { menus } = useContext(OrderContext);
  const hasItemsInBasket = menus.some((menu) => menu.quantity > 0);

  return (
    <BasketBodyStyled className="body">
      {hasItemsInBasket ? (
        menus.map((menu) => {
          if (menu.quantity > 0) {
            return (
              <ItemBuy
                key={menu.id}
                id={menu.id}
                title={menu.title}
                imageSource={menu.imageSource}
                price={menu.price}
                quantity={menu.quantity}
              />
            );
          }
        })
      ) : (
        <span>VOTRE COMMANDE EST VIDE.</span>
      )}
    </BasketBodyStyled>
  );
};

export default BasketBody;

const BasketBodyStyled = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  flex: 1;
  padding: 20px 16px;
  gap: 20px;
`;
