import PropTypes from "prop-types"
import "./styles.scss"

function CollectionPreviewItem(props) {
  return (
    <div className="collection-preview-list-item">
      <img src={props.dataItem.imageUrl} alt="" width="200px" height="200px" />
      <p>{props.dataItem.name}</p>
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
