import styled from "styled-components";
import { theme } from "../../../../theme";
import "../../../../fakeData/fakeMenu"
import Menu from "./Menu";
import PanelAdmin from "../PanelAdmin/PanelAdmin";


export default function Main() {
  return (
    <MainStyled className="main">
      {/* <div className="basket"></div> */}
      <Menu />
      <PanelAdmin/>
    </MainStyled>
  )
}

const MainStyled = styled.div`
  background: ${theme.colors.background_white};
  flex: 1; // or you can also use this : height: calc(95vh - 10vh);

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