import classNames from "classnames"
import PropTypes from "prop-types"
import ButtonDefault from "../ButtonDefault/ButtonDefault"
import "./styles.scss"

function CollectionPreviewItem({ dataItem, className, handleAddToCart }) {
  const classesPreviewItem = classNames("collection-preview-item", className)

  return (
    <div className={classesPreviewItem}>
      <div className="collection-preview-item__image-box">
        <img
          className="collection-preview-item__image"
          width="100"
          height="100"
          alt="cloth"
          src={dataItem.imageUrl}
        />
      </div>
      <div className="collection-preview-item__caption">{dataItem.name}</div>
      <div className="collection-preview-item__price">${dataItem.price}</div>
      <ButtonDefault handleClick={() => handleAddToCart(dataItem)}>
        +
      </ButtonDefault>
    </div>
  )
}

CollectionPreviewItem.defaultProps = {
  dataItem: {
    name: "name",
    price: 100,
  },
}

CollectionPreviewItem.propTypes = {
  dataItem: PropTypes.object,
  className: PropTypes.string,
  handleAddToCart: PropTypes.func,
}

export default CollectionPreviewItem
