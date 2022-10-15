import PropTypes from "prop-types"
import { Link } from "react-router-dom"
import "./styles.scss"
import CollectionPreviewItem from "../CollectionPreviewItem/CollectionPreviewItem"

function CollectionPreviewList(props) {
  const collectionPreviewItems = getCollectionPreviewItems(props)

  return (
    <div className="collection-preview-list">
      <Link
        className="collection-preview-list__title"
        to={props.dataItem.routeName}
      >
        {props.dataItem.title}
      </Link>
      <div className="collection-preview-list__preview">
        {collectionPreviewItems}
      </div>
    </div>
  )
}

function getCollectionPreviewItems(props) {
  return props.dataItem.items.map((item) => {
    return <CollectionPreviewItem dataItem={item} key={item.id} />
  })
}

CollectionPreviewList.defaultProps = {
  dataItem: {},
}

CollectionPreviewList.propTypes = {
  dataItem: PropTypes.object,
}

export default CollectionPreviewList
