import { motion } from "framer-motion";
import styled, { css } from "styled-components";
import { theme } from "../../theme";
import PropTypes from "prop-types";


const CasinoEffect = ({quantity, version}) => {
  return (
    <QuantityContainer
      key={quantity}
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: -20, opacity: 0 }}
      transition={{ duration: 0.5 }}
      version={version}
    >
      <span>{quantity}</span>
    </QuantityContainer>
  )
}

export default CasinoEffect;

CasinoEffect.propTypes = {
  quantity: PropTypes.number,
  version: PropTypes.string
};

const QuantityContainer = styled(motion.div)`


  ${({ version }) => {
    if (version === "minimalist") {
      return css`
        font-family: Open Sans;
        font-size: ${theme.fonts.SM};
        font-weight: ${theme.weights.regular};
        color: ${theme.colors.primary};
        text-align: left;
      `;
    }
    
    if (version === "medium") {
      return css`
        font-size: ${theme.fonts.P4};
        text-align: left;
      `;
    }
  }}
`;