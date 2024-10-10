import { PropTypes } from "prop-types";
import styled from "styled-components";
import { theme } from "../../../../theme";
import defaultImage from "/images/coming-soon.png";


const ItemBuy = ({imageSource, title, price, quantity}) => {

  return (
    <ItemBuyStyled>
      <div className="image">
        <img 
          src={imageSource ? imageSource : defaultImage} 
          alt={title} 
        />
      </div>
      <div className="item-info">
        <p>{title}</p>
        <span>{price} €</span>
      </div>
      <span>X {quantity}</span>
    </ItemBuyStyled>
  )
}

export default ItemBuy

ItemBuy.propTypes = {
    imageSource: PropTypes.number,
    title: PropTypes.string,
    price: PropTypes.string
  };

  const ItemBuyStyled = styled.div`
  width: 100%;
  border-radius: ${theme.borderRadius.round};
  background-color: ${theme.colors.white};
  height: 86px;
  padding: 8px 16px;
  padding-right: 0px;
  box-shadow: -4px 4px 20px 0px rgb(0 0 0 / 20%);
  display: flex;
  align-items: center;



  .image {
    height: 100%;
    display: flex;
    align-items: center;
    
    img {
      max-width: 70px;  
      height: 85px;
      object-fit: contain; 
    }
  }
  .item-info{
    display: flex;
    flex-direction: column;
    width: 50%;
    align-items: center;

    p{
    font-size: ${theme.fonts.P3};
    font-weight: ${theme.weights.bold};
    }
  }

  span{
        font-family: Open Sans;
        font-size: ${theme.fonts.SM};
        font-weight: ${theme.weights.regular};
        color: ${theme.colors.primary};
        text-align: left;

    }
`;