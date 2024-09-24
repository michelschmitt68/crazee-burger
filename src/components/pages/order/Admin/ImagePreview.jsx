import PropTypes from "prop-types"
import styled from "styled-components";
import { theme } from "../../../../theme";


const ImagePreview = ({imageSource, title}) => {
  return (
    <ImagePreviewStyled >
    {imageSource ? ( 
        <img alt={title} src={imageSource} />
    ) : (
        <p>Aucune image</p>
    )}
    </ImagePreviewStyled>
    )
}

ImagePreview.propTypes = {
    imageSource: PropTypes.string,
    title: PropTypes.string
  };

export default ImagePreview

const ImagePreviewStyled = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    color: ${theme.colors.greySemiDark};
    border: 1px solid ${theme.colors.greyLight};
    width: 215px;
    height: 120px;

    img{
    width: 100%;
    height: 100%;
    object-fit: contain;
    }
`;
