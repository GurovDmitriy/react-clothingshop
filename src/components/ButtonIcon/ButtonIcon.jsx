import PropTypes from "prop-types"
import "./styles.scss"

function ButtonIcon({ dataItem, handleClick, children }) {
  const CustomTag = dataItem.tag
  const Icon = dataItem.icon
  const classLabelHidden = !dataItem.isVisibleLabel
    ? "button-icon__label--hidden"
    : null

  return (
    <CustomTag
      to={dataItem.to}
      href={dataItem.href}
      type={dataItem.type}
      target={dataItem.target}
      className={`button-icon ${dataItem.customClass}__button-icon`}
      onClick={handleClick}
    >
      <span className={`button-icon__label ${classLabelHidden}`}>
        {children || dataItem.label}
      </span>
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
}

ButtonIcon.propTypes = {
  dataItem: PropTypes.object,
  handleClick: PropTypes.func,
  children: PropTypes.any,
}

export default ButtonIcon
