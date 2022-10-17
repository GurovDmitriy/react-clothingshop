import PropTypes from "prop-types"
import "./styles.scss"

function ButtonDefault({ dataItem, handleClick }) {
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
      className={`button-default ${customClass}__button-default`}
      onClick={emitButtonClick}
    >
      {label}
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
}

export default ButtonDefault
