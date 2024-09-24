import PropTypes from "prop-types"


const ImagePreview = ({imageSource, title}) => {
  return (
    <div className="image-add">
    {imageSource ? ( 
        <img alt={title} src={imageSource} />
    ) : (
        <p>Aucune image</p>
    )}
    </div>
    )
}

ImagePreview.propTypes = {
    imageSource: PropTypes.string,
    title: PropTypes.string
  };

export default ImagePreview
