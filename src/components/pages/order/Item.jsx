import PropTypes from 'prop-types';
import styled from 'styled-components';
import { theme } from '../../../theme';
import ButtonPrimary from '../../reusableUI/ButtonPrimary';

const Item = ({item}) => {
  return (
    <ItemStyled>
        
       <div className='item-container'>
        <img src={item.imageSource} className='item-image'></img>
        <div className='item-infos'>
            <p>{item.title}</p>
            <div className='item-info-price'>
                <span>{item.price.toFixed(2)}</span>
                <ButtonPrimary label="Ajouter" className/>
            </div>
        </div>
        
       </div>
    </ItemStyled>
  )
}

export default Item;

Item.propTypes= {
    item: PropTypes.object
  }


  const ItemStyled = styled.div`
    background-color: ${theme.colors.white};
    width: 100%;
    border-radius: ${theme.borderRadius.extraRound};
    box-shadow: -8px 8px 20px 0px rgb(0 0 0 / 20%);
    .item-container{
        display: flex;
        flex-direction: column;
        padding: 20px;
        gap: 30px;
        max-height: 330px;

        .item-image{
            width: 100%;
            height: 145px;
            padding-top: 30px;
            object-fit: contain;
        }

        p{
            font-family: "Amatic SC", cursive;
            font-weight: ${theme.weights.bold};
            font-size: ${theme.fonts.P4};
            align-items: left;
        }

        .item-infos{
            display: flex;
            flex-direction: column;
            padding: 0 5px;
        }

        span{
            color: ${theme.colors.primary};
        }

        .item-info-price{
            display: flex;
            justify-content: space-between;
            align-items: center;
        

            & > :last-child {
                width: 95px;
                height: 38px;
                font-weight: ${theme.weights.light};
            }
        }
    }
  `;