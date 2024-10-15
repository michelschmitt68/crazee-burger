import { PropTypes } from "prop-types";
import styled from "styled-components";
import { theme } from "../../../../theme";
import defaultImage from "/images/coming-soon.png";
import { useState } from "react";
import RedButton from "./RedButton";


const ItemBuy = ({id, imageSource, title, price, quantity}) => {

    const [isHovered, setIsHovered] = useState(false);
    console.log("infos", id, imageSource, title, price, quantity)

  return (
    <ItemBuyStyled
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
    >
      <div className="image">
        <img 
          src={imageSource ? imageSource : defaultImage} 
          alt={title} 
        />
      </div>
      <div className="item-info">
        <p>{title}</p>
        <span>{price.toFixed(2)} €</span>
      </div>
      {isHovered ? (
        <RedButton id={id}/>
        ) : (
        <span>X {quantity}</span>
        ) 
    }
    </ItemBuyStyled>
  )
}

export default ItemBuy

ItemBuy.propTypes = {
    id: PropTypes.string,
    imageSource: PropTypes.string,
    title: PropTypes.string,
    price: PropTypes.number,
    quantity: PropTypes.number
  };

  const ItemBuyStyled = styled.div`
  width: 100%;
  border-radius: ${theme.borderRadius.round};
  background-color: ${theme.colors.white};
  height: 86px;
  padding: 8px 16px;
  box-shadow: -4px 4px 20px 0px rgb(0 0 0 / 20%);
  display: flex;
  align-items: center;
  gap: 16px;
  position: relative;


  .image {
    height: 100%;
    display: flex;
    align-items: center;
    
    img {
      width: 70px;  
      height: 70px;
      object-fit: contain; 
    }
  }
  .item-info{
    display: flex;
    flex-direction: column;
    width: 50%;
    align-items: left;

    p{
    font-size: ${theme.fonts.P3};
    font-weight: ${theme.weights.bold};
    text-align: left;
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