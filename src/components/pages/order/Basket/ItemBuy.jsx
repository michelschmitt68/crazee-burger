import { PropTypes } from "prop-types";
import styled from "styled-components";


const ItemBuy = ({title}) => {
    console.log('aa', title)
  return (
    <ItemBuyStyled>
      <div>{title}</div>
    </ItemBuyStyled>
  )
}

export default ItemBuy

ItemBuy.propTypes = {
    title: PropTypes.string
  };

const ItemBuyStyled = styled.div`
  
`;
