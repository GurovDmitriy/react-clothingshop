import React from "react"
import classNames from "classnames"
import ButtonDefault from "../ButtonDefault/ButtonDefault"
import "./style.scss"

function CollectionPreviewItem(props: CollectionPreviewItemProps) {
  const { entities, className, handlerAddToCart } = props

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
          handlerClick={() => handlerAddToCart(entities)}
        >
          Add to cart
        </ButtonDefault>
      </div>
      <div className="collection-preview-item__caption">{entities.name}</div>
      <div className="collection-preview-item__price">${entities.price}</div>
    </div>
  )
}

type CollectionPreviewItemProps = {
  entities: CollectionPreviewItemEntities
  className?: string
  handlerAddToCart: (entities: CollectionPreviewItemEntities) => void
}

export default CollectionPreviewItem
