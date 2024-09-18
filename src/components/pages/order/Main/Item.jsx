import PropTypes from 'prop-types';
import styled from 'styled-components';
import { theme } from '../../../../theme';
import PrimaryButton from '../../../reusableUI/ButtonPrimary';
import { TiDelete } from 'react-icons/ti';
import AdminContext from '../../../../contexts/AdminContext';
import { useContext } from 'react';
import MenusContext from '../../../../contexts/MenusContext';

const Item = ({ title, imageSource, price }) => {

  // context
  const { isChecked } = useContext(AdminContext);
  const { setMenus } = useContext(MenusContext);
  
  const handleClickDelete = () => {
    setMenus(prevMenus => prevMenus.filter(menu => menu.title !== title));
  };

  return (
    <ItemStyled className="produit">
      {isChecked && (
        <PrimaryButton 
          Icon={<TiDelete className="icon" />}
          className={"delete-menu-button"}
          onClick={() => handleClickDelete()} // Corrigé ici
        />
      )}
      <div className="image">
        <img src={imageSource} alt={title} />
      </div>
      <div className="text-info">
        <div className="title">{title}</div>
        <div className="description">
          <div className="left-description">{price.toFixed(2)} €</div>
          <div className="right-description">
            <PrimaryButton className="primary-button" label={"Ajouter"} />
          </div>
        </div>
      </div>
    </ItemStyled>
  );
};

export default Item;

Item.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  imageSource: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
};

const ItemStyled = styled.div`
  background: ${theme.colors.white};
  width: 240px;
  height: 330px;
  display: grid;
  grid-template-rows: 65% 1fr;
  padding: 20px;
  padding-bottom: 10px;
  box-shadow: -8px 8px 20px 0px rgb(0 0 0 / 20%);
  border-radius: ${theme.borderRadius.extraRound};
  position: relative;

  .delete-menu-button {
    position: absolute;
    top: 10px;
    right: 10px;
    padding: 0;
    margin: 0;
    width: 30px;
    background-color: ${theme.colors.white};
    border: none;
    color: ${theme.colors.primary};
    cursor: pointer;
    &:hover:not(:disabled) {
      border: none;
    }
    .icon {
      width: 100%;
      height: 100%;
      margin: 0;
      font-size: 20px;
      padding: 0px;
    }
  }

  .image {
    width: 100%;
    height: auto;
    margin-top: 30px;
    margin-bottom: 20px;

    img {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
  }

  .text-info {
    display: grid;
    grid-template-rows: 30% 70%;
    padding: 5px;

    .title {
      margin: auto 0;
      font-size: ${theme.fonts.P4};
      position: relative;
      bottom: 10px;
      font-weight: ${theme.weights.bold};
      color: ${theme.colors.dark};
      text-align: left;
      white-space: nowrap;
      overflow: hidden;
      width: 100%;
      text-overflow: ellipsis;
      font-family: "Amatic SC", cursive;
    }

    .description {
      display: grid;
      grid-template-columns: 1fr 1fr;

      .left-description {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        font-weight: ${theme.weights.regular};
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        color: ${theme.colors.primary};
      }

      .right-description {
        display: flex;
        justify-content: flex-end;
        align-items: center;
        font-size: ${theme.fonts.P1};

        .primary-button {
          font-size: ${theme.fonts.XS};
          cursor: pointer;
          padding: 12px;
          height: 38px;
          width: 95px;
        }
      }
    }
  }
`;
