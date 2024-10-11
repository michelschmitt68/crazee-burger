
import styled from 'styled-components';
import { theme } from '../../../../theme';
import { MdDeleteForever } from 'react-icons/md';
import OrderContext from '../../../../contexts/OrderContext';
import { useContext } from 'react';
import { PropTypes } from "prop-types";

const RedButton = ({id}) => {

    const { handleDeleteBuyList } = useContext(OrderContext);

  return (
    <RedButtonStyled onClick={() => handleDeleteBuyList(id)}>
        <MdDeleteForever/>
    </RedButtonStyled>
  )
}

export default RedButton

RedButton.propTypes = {
    id: PropTypes.string
  };

const RedButtonStyled = styled.div`
    position: absolute;
    right: 0;
    top: 0;
    bottom: 0;
    background-color: ${theme.colors.red};
    width: 18%;
    border-bottom-right-radius: ${theme.borderRadius.round};
    border-top-right-radius: ${theme.borderRadius.round};
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${theme.colors.white};
    font-size: ${theme.fonts.P3};
    cursor: pointer;

`;
