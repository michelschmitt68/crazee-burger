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
            console.log("Menu:", menu);
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
  width: 100%;
  justify-content: center;
  align-items: center;
  flex: 1;
`;
