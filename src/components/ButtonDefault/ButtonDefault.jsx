import PropTypes from "prop-types"
import "./styles.scss"

function ButtonDefault({ dataItem, handleClick, children }) {
  const CustomTag = dataItem.tag

  return (
    <CustomTag
      to={dataItem.to}
      href={dataItem.href}
      type={dataItem.type}
      target={dataItem.target}
      className={`button-default ${dataItem.customClass}__button-default`}
      onClick={handleClick}
    >
      {children || dataItem.label}
    </CustomTag>
  )
}

ButtonDefault.defaultProps = {
  dataItem: {
    id: 1,
    label: "Button",
    value: "button",
    tag: "button",
    href: null,
    target: null,
    type: "button",
    to: null,
    customClass: null,
  },
}

ButtonDefault.propTypes = {
  dataItem: PropTypes.object,
  handleClick: PropTypes.func,
  children: PropTypes.any,
}

export default ButtonDefault
