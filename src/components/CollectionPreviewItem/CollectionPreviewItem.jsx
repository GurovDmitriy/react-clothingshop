import "./styles.scss"
import PropTypes from "prop-types"
import classNames from "classnames"

function CollectionPreviewItem({ dataItem, className }) {
  const classesPreviewItem = classNames("collection-preview-item", className)
  const attrImg = {
    width: dataItem.width,
    height: dataItem.height,
    alt: dataItem.alt,
  }

  return (
    <div className={classesPreviewItem}>
      <div className="collection-preview-item__image-box">
        <img className="collection-preview-item__image" {...attrImg} />
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
  className: PropTypes.string,
}

export default CollectionPreviewItem
