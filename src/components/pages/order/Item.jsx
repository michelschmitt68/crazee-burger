import PropTypes from 'prop-types';
import styled from 'styled-components';
import { theme } from '../../../theme';

const Item = ({item}) => {
  return (
    <ItemStyled>
        
       <div className='item-container'>
        <img src={item.imageSource} className='item-image'></img>
        {item.title}
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
    height: 100%;
    width: 100%;
    border-radius: ${theme.borderRadius.extraRound};

    .item-container{
        display: flex;
        flex-direction: column;
        padding: 20px;
        gap: 15px;

        .item-image{
            width: 100%;
            height: 145px;
            padding-top: 30px;
            object-fit: contain;
        }

    }
  `;