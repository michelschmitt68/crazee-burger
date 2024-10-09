import styled from "styled-components";


const BasketBody = () => {
  return (
    <BasketBodyStyled className="body">
        <span>VOTRE COMMANDE EST VIDE.</span>    
    </BasketBodyStyled>
  )
}

export default BasketBody

const BasketBodyStyled = styled.div`
    display: flex;
    width: 100%;
    justify-content: center;
    align-items: center;
    flex: 1;
`;
