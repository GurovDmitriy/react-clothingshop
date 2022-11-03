import classNames from "classnames"
import PropTypes from "prop-types"
import { Link } from "react-router-dom"
import CollectionPreviewItem from "../CollectionPreviewItem/CollectionPreviewItem"
import "./styles.scss"

function CollectionPreviewList({ dataItem, className }) {
  const classesList = classNames("collection-preview-list", className)
  const collectionPreviewItems = dataItem.items.map((item) => {
    return <CollectionPreviewItem dataItem={item} key={item.id} />
  })

  return (
    <div className={classesList}>
      <Link className="collection-preview-list__title" to={dataItem.routeName}>
        {dataItem.title}
      </Link>
      <div className="collection-preview-list__preview">
        {collectionPreviewItems}
      </div>
    </div>
  )
}

CollectionPreviewList.defaultProps = {
  dataItem: {},
}

CollectionPreviewList.propTypes = {
  dataItem: PropTypes.object,
  className: PropTypes.string,
}

export default CollectionPreviewList
