import classNames from "classnames"
import PropTypes from "prop-types"
import ButtonDefault from "../ButtonDefault/ButtonDefault"
import "./style.scss"

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
        <ButtonDefault
          className="collection-preview-item__button"
          handleClick={() => handleAddToCart(dataItem)}
        >
          Add to cart
        </ButtonDefault>
      </div>
      <div className="collection-preview-item__caption">{dataItem.name}</div>
      <div className="collection-preview-item__price">${dataItem.price}</div>
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
