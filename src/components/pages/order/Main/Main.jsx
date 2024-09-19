import styled from "styled-components";
import { theme } from "../../../../theme";
import "../../../../fakeData/fakeMenu"
import Menu from "./Menu";
import AdminPanel from "../Admin/AdminPanel";
import { useState } from "react";
import { fakeMenu2 } from "../../../../fakeData/fakeMenu";
import MenusContext from "../../../../contexts/MenusContext";
import EmptyMenu from "./EmptyMenu";


export default function Main() {

  const [menus, setMenus] = useState(fakeMenu2)
  console.log(menus.length);

  return (
    <MenusContext.Provider value={{menus, setMenus}}>
      <MainStyled className="main">
        {/* <div className="basket"></div> */}
        {menus.length === 0 ? (
          <EmptyMenu />
        ) : (
          <Menu />
        )}      
        <AdminPanel/>
      </MainStyled>
    </MenusContext.Provider>
  )
}

const MainStyled = styled.div`
  background: ${theme.colors.background_white};
  flex: 1; 

  border-bottom-left-radius: ${theme.borderRadius.extraRound};
  border-bottom-right-radius: ${theme.borderRadius.extraRound};
  box-shadow: 0px 8px 20px 8px rgba(0, 0, 0, 0.2) inset;

  display: grid;
  grid-template-columns: 1fr;

  overflow-y: scroll;
  /* .basket {
    background: pink;
  } */
`