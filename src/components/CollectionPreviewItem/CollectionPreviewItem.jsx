import PropTypes from "prop-types"
import "./styles.scss"

function CollectionPreviewItem({ dataItem }) {
  return (
    <div className="collection-preview-item">
      <div className="collection-preview-item__image-box">
        <img
          className="collection-preview-item__image"
          src={dataItem.imageUrl}
          alt=""
        />
      </div>
      <div className="collection-preview-item__caption">{dataItem.name}</div>
      <div className="collection-preview-item__price">${dataItem.price}</div>
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
