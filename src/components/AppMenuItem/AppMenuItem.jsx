import PropTypes from "prop-types"

function AppMenuItem(props) {
  const { caption, description } = props.dataItem

  return (
    <div className="menu-item">
      <h2 className="menu-item__caption">{caption}</h2>
      <p className="menu-item__description">{description}</p>
    </div>
  )
}

AppMenuItem.defaultProps = {
  dataItem: {},
}

AppMenuItem.propTypes = {
  dataItem: PropTypes.object,
}

export default AppMenuItem
