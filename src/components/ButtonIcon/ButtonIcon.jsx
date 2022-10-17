import PropTypes from "prop-types"
import "./styles.scss"

function ButtonIcon({ dataItem, handleClick }) {
  const {
    to,
    href,
    target,
    isVisibleLabel,
    icon,
    type,
    tag,
    customClass,
    label,
  } = dataItem

  const CustomTag = tag
  const Icon = icon
  const classLabelHidden = !isVisibleLabel ? "button-icon__label--hidden" : null

  const emitButtonClick = () => {
    handleClick(dataItem)
  }

  return (
    <CustomTag
      to={to}
      href={href}
      type={type}
      target={target}
      className={`button-icon ${customClass}__button-icon`}
      onClick={emitButtonClick}
    >
      <span className={`button-icon__label ${classLabelHidden}`}>{label}</span>
      <span className="button-icon__icon-box">
        <Icon className="button-icon__icon" />
      </span>
    </CustomTag>
  )
}

ButtonIcon.defaultProps = {
  dataItem: {
    id: 1,
    label: "Button",
    isVisibleLabel: false,
    value: "button",
    tag: "button",
    href: null,
    target: null,
    type: "button",
    to: null,
    customClass: null,
    icon: null,
  },

  handleClick: () => {},
}

ButtonIcon.propTypes = {
  dataItem: PropTypes.object,
  handleClick: PropTypes.func,
}

export default ButtonIcon
