import classNames from "classnames"
import PropTypes from "prop-types"
import "./style.scss"

function ButtonIcon(props) {
  const {
    tag,
    icon,
    isHiddenLabel,
    className,
    handleClick,
    children,
    ...propsButton
  } = props

  const TagCustom = tag
  const IconCustom = icon
  const buttonClass = classNames("button-icon", className)
  const labelClass = classNames("button-icon__label", {
    "button-icon__label--hidden": isHiddenLabel,
  })

  return (
    <TagCustom className={buttonClass} onClick={handleClick} {...propsButton}>
      <span className={labelClass}>{children}</span>
      <span className="button-icon__icon-box">
        <IconCustom />
      </span>
    </TagCustom>
  )
}

ButtonIcon.defaultProps = {
  tag: "button",
  isHiddenLabel: false,
  icon: null,
}

ButtonIcon.propTypes = {
  handleClick: PropTypes.func,
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.element]),
  tag: PropTypes.any,
  className: PropTypes.string,
  isHiddenLabel: PropTypes.bool,
  icon: PropTypes.object,
}

export default ButtonIcon
