import styled from "styled-components";
import { theme } from "../../../../theme";
import "../../../../fakeData/fakeMenu"
import Menu from "./Menu";
import AdminPanel from "../Admin/AdminPanel";
import EmptyMenu from "./EmptyMenu";
import { useContext } from "react";
import OrderContext from '../../../../contexts/OrderContext';
import Basket from "../Basket/Basket"



export default function Main() {

  const {menus} = useContext(OrderContext);

  return (
      <MainStyled className="main">
        <Basket></Basket>

        <div className="boddd">
          {menus.length === 0 ? (
            <EmptyMenu />
          ) : (
            <Menu />
          )}      
          <AdminPanel/>
        </div>
      </MainStyled>

  )
}

const MainStyled = styled.div`
  background: ${theme.colors.background_white};
  flex: 1; 

  border-bottom-left-radius: ${theme.borderRadius.extraRound};
  border-bottom-right-radius: ${theme.borderRadius.extraRound};
  box-shadow: 0px 8px 20px 8px rgba(0, 0, 0, 0.2) inset;

  display: grid;
  grid-template-columns: 25% 1fr;

  overflow-y: scroll;
  .basket {
    background: pink;
  }
  .boddd{
    position: relative;
  }
`