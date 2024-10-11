
import styled from 'styled-components';

const EmptyCommande = () => {
  return (
    <EmptyCommandeStyled>
        <span>VOTRE COMMANDE EST VIDE.</span>
    </EmptyCommandeStyled>
  )
}

export default EmptyCommande

const EmptyCommandeStyled = styled.div`

    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
`;
