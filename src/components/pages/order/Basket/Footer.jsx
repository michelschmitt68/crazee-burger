import styled from "styled-components";
import { theme } from "../../../../theme";


const Footer = () => {
  return (
    <FooterStyled>
        <div className="end">
            <p>CODÉ AVEC ❤️ ET REACT.JS</p>
        </div>
    </FooterStyled>
  )
}

export default Footer

const FooterStyled = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 70px;
    width: 100%;
    background-color: ${theme.colors.background_dark};
    color: ${theme.colors.primary};
    padding: 17px 12px;  
    font-size: ${theme.fonts.P2};
    color: ${theme.colors.white};
    background-color: ${theme.colors.background_dark};
`;
