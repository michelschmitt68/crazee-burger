import { motion } from "framer-motion";
import styled from "styled-components";
import { theme } from "../../theme";
import PropTypes from "prop-types";


const CasinoEffect = ({quantity}) => {
  return (
    <QuantityContainer
      key={quantity}
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: -20, opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      <span>{quantity}</span>
    </QuantityContainer>
  )
}

export default CasinoEffect;

CasinoEffect.propTypes = {
  quantity: PropTypes.number
}

const QuantityContainer = styled(motion.div)`
  font-family: Open Sans;
  font-size: ${theme.fonts.SM};
  font-weight: ${theme.weights.regular};
  color: ${theme.colors.primary};
  text-align: left;
  position: relative;
  display: flex;
  align-items: center;
`;
