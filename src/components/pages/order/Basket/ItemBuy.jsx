import PropTypes from "prop-types"; // Correction de l'import
import styled from "styled-components";
import { theme } from "../../../../theme";
import defaultImage from "/images/coming-soon.png";
import { useContext, useState } from "react";
import RedButton from "./RedButton";
import OrderContext from "../../../../contexts/OrderContext";
import CasinoEffect from "../../../reusableUI/CasinoEffect";

const ItemBuy = ({ imageSource, title, price, quantity, isSelected, onClick, onDelete }) => {
    const [isHovered, setIsHovered] = useState(false);
    const { isChecked } = useContext(OrderContext);

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
                    src={imageSource || defaultImage} 
                    alt={title} 
                />
            </div>
            <div className="item-info">
                <p>{title}</p>
                <span>{parseFloat(price.toFixed(2))} €</span>
            </div>
            {isHovered ? (
                <RedButton onDelete={onDelete} />
            ) : (
                <span>
                    X
                    <CasinoEffect quantity={quantity} version="minimalist" />
                </span>
            )}
        </ItemBuyStyled>
    );
};

export default ItemBuy;

ItemBuy.propTypes = {
    imageSource: PropTypes.string,
    title: PropTypes.string,
    price: PropTypes.number.isRequired,
    quantity: PropTypes.number.isRequired,
    isSelected: PropTypes.bool,
    onClick: PropTypes.func,
    onDelete: PropTypes.func,
};

const ItemBuyStyled = styled.div`
  width: 100%;
  border-radius: ${theme.borderRadius.round};
  background-color: ${theme.colors.white};
  height: 86px;
  padding: 8px 16px;
  box-shadow: -4px 4px 20px 0px rgba(0, 0, 0, 0.2);
  display: flex;
  align-items: center;
  gap: 16px;
  position: relative;

  ${({ $isSelected, $isChecked }) => $isSelected && $isChecked && `
    background-color: ${theme.colors.primary};
    span {
      color: ${theme.colors.white} !important;
    }
  `}

  ${({ $isChecked }) => $isChecked && `
    &:hover {
      box-shadow: ${theme.shadows.light} ${theme.colors.orangeHighlight};
      cursor: pointer;
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
  .item-info {
    display: flex;
    flex-direction: column;
    width: 50%;
    align-items: flex-start;

    p {
      font-size: ${theme.fonts.P3};
      font-weight: ${theme.weights.bold};
      text-align: left;
    }
  }

  span {
    font-family: Open Sans;
    font-size: ${theme.fonts.SM};
    font-weight: ${theme.weights.regular};
    color: ${theme.colors.primary};
    text-align: left;
    display: inline-flex;
    gap: ${theme.spacing.xs};
  }
`;
