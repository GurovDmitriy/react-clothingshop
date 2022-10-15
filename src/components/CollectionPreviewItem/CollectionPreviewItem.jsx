import PropTypes from "prop-types"
import "./styles.scss"

function CollectionPreviewItem(props) {
  return (
    <div className="collection-preview-item">
      <div className="collection-preview-item__image-box">
        <img
          className="collection-preview-item__image"
          src={props.dataItem.imageUrl}
          alt=""
        />
      </div>
      <div className="collection-preview-item__caption">
        {props.dataItem.name}
      </div>
      <div className="collection-preview-item__price">
        ${props.dataItem.price}
      </div>
    </div>
  )
}

CollectionPreviewItem.defaultProps = {
  dataItem: {},
}

CollectionPreviewItem.propTypes = {
  dataItem: PropTypes.object,
}

export default CollectionPreviewItem
