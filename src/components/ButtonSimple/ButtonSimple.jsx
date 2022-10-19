import PropTypes from "prop-types"
import "./styles.scss"

function ButtonSimple({ dataItem, handleClick, children }) {
  const CustomTag = dataItem.tag

  return (
    <CustomTag
      to={dataItem.to}
      href={dataItem.href}
      type={dataItem.type}
      target={dataItem.target}
      className={`button-simple ${dataItem.customClass}__button-simple`}
      onClick={handleClick}
    >
      {children || dataItem.label}
    </CustomTag>
  )
}

ButtonSimple.defaultProps = {
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

ButtonSimple.propTypes = {
  dataItem: PropTypes.object,
  handleClick: PropTypes.func,
  children: PropTypes.any,
}

export default ButtonSimple
