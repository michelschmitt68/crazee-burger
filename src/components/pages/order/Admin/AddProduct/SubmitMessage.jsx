import { FiCheck } from "react-icons/fi";
import styled from "styled-components";
import { theme } from "../../../../../theme";


const SubmitMessage = () => {
  return (
    <SubmitMessageStyled>
            <FiCheck className="icon" />
            <span>Ajouté avec succès !</span>
    </SubmitMessageStyled>
  )
}

export default SubmitMessage;

const SubmitMessageStyled = styled.div`
    display: flex;
     align-items: center; 
    vertical-align: middle; 
    color: ${theme.colors.success};
    gap: 5px;

    span {     
        font-size: ${theme.fonts.P0}; 
    }
    .icon {
        border: solid 1px ${theme.colors.success}; 
        border-radius: ${theme.borderRadius.extraRound}; 
        font-size: ${theme.fonts.P1};
        margin-left: 15px;
        }
`;



