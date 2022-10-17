import PropTypes from "prop-types"
import "./styles.scss"

function ButtonSimple({ dataItem, handleClick }) {
  const { to, href, type, tag, customClass, label, target } = dataItem
  const CustomTag = tag

  const emitButtonClick = () => {
    handleClick(dataItem)
  }

  return (
    <CustomTag
      to={to}
      href={href}
      type={type}
      target={target}
      className={`button-simple ${customClass}__button-simple`}
      onClick={emitButtonClick}
    >
      {label}
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

  handleClick: () => {},
}

ButtonSimple.propTypes = {
  dataItem: PropTypes.object,
  handleClick: PropTypes.func,
}

export default ButtonSimple
