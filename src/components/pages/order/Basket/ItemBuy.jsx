import { PropTypes } from "prop-types";
import styled from "styled-components";
import { theme } from "../../../../theme";
import defaultImage from "/images/coming-soon.png";
import { useContext, useState } from "react";
import RedButton from "./RedButton";
import OrderContext from "../../../../contexts/OrderContext";


const ItemBuy = ({id, imageSource, title, price, quantity, isSelected, onClick}) => {

    const [isHovered, setIsHovered] = useState(false);
    const {isChecked} = useContext(OrderContext);

  return (
    <ItemBuyStyled
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        $isSelected={isSelected}
        $isChecked={isChecked}
        onClick={onClick}
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
    quantity: PropTypes.number,
    isSelected: PropTypes.bool,
    onClick: PropTypes.func
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

  ${({ $isSelected, $isChecked }) => $isSelected && $isChecked && `
    background-color: ${theme.colors.primary};
    span{
    color: ${theme.colors.white} !important;
    }
  `}


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