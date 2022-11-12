import classNames from "classnames"
import PropTypes from "prop-types"
import "./style.scss"

function ButtonIcon({
  tag,
  icon,
  isHiddenLabel,
  className,
  handleClick,
  children,
  ...propsButton
}) {
  const TagCustom = tag
  const IconCustom = icon
  const classesButton = classNames("button-icon", className)
  const classesLabel = classNames("button-icon__label", {
    "button-icon__label--hidden": isHiddenLabel,
  })

  return (
    <TagCustom className={classesButton} onClick={handleClick} {...propsButton}>
      <span className={classesLabel}>{children}</span>
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
  children: PropTypes.any,
  tag: PropTypes.any,
  className: PropTypes.string,
  isHiddenLabel: PropTypes.bool,
  icon: PropTypes.object,
}

export default ButtonIcon
