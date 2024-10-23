import styled from "styled-components";
import PropTypes from "prop-types";
import { theme } from "../../theme";

const InfoMessage = ({ icon, label, type }) => {
  return (
    <InfoMessageStyled type={type}>
      {icon}
      <span>{label}</span>
    </InfoMessageStyled>
  );
};

InfoMessage.propTypes = {
  icon: PropTypes.element,
  label: PropTypes.string.isRequired,
  type: PropTypes.oneOf(["success", "alert", "update"]),
};

export default InfoMessage;

const InfoMessageStyled = styled.div`
  display: flex;
  align-items: center; 
  vertical-align: middle; 
  color: ${(props) => {
    switch (props.type) {
      case "alert":
        return theme.colors.orangeHighlight;
      case "success":
        return theme.colors.success;
      case "update":
        return theme.colors.blue;
      default:
        return theme.colors.default;
    }
  }};
  gap: 5px;

  span {     
    font-size: ${theme.fonts.P0}; 
  }
  
  .icon {
    border: solid 1px ${(props) =>
      props.type === "success" ? theme.colors.success : theme.colors.orangeHighlight}; 
    border-radius: ${theme.borderRadius.extraRound}; 
    font-size: ${theme.fonts.P1};
    margin-left: 15px;
  }
`;
