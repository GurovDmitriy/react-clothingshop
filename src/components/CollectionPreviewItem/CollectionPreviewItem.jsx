import classNames from "classnames"
import PropTypes from "prop-types"
import ButtonDefault from "../ButtonDefault/ButtonDefault"
import "./style.scss"

function CollectionPreviewItem(props) {
  const { entities, className, handleAddToCart } = props

  const previewItemClass = classNames("collection-preview-item", className)

  return (
    <div className={previewItemClass}>
      <div className="collection-preview-item__image-box">
        <img
          className="collection-preview-item__image"
          width="100"
          height="100"
          alt="cloth"
          src={entities.imageUrl}
        />
        <ButtonDefault
          className="collection-preview-item__button"
          handleClick={() => handleAddToCart(entities)}
        >
          Add to cart
        </ButtonDefault>
      </div>
      <div className="collection-preview-item__caption">{entities.name}</div>
      <div className="collection-preview-item__price">${entities.price}</div>
    </div>
  )
}

CollectionPreviewItem.defaultProps = {
  entities: {
    name: "name",
    price: 100,
  },
}

CollectionPreviewItem.propTypes = {
  entities: PropTypes.object,
  className: PropTypes.string,
  handleAddToCart: PropTypes.func,
}

export default CollectionPreviewItem
