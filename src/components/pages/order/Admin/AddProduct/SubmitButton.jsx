import PropTypes from "prop-types";
import InfoMessage from "../../../../reusableUI/InfoMessage";
import { FiCheck } from "react-icons/fi";
import ButtonPrimary from "../../../../reusableUI/ButtonPrimary"

const SubmitButton = ({isSubmitted}) => {
  return (
    <div className="submit">
        <ButtonPrimary
            label={"Ajouter un nouveau produit"}
            version={"green-button"}
        />
        {isSubmitted && 
            <InfoMessage icon={<FiCheck className="icon" />} label="Ajouté avec succès !" type="success"/>
        }
    </div>
  )
}

export default SubmitButton

SubmitButton.propTypes = {
    isSubmitted: PropTypes.bool
  };