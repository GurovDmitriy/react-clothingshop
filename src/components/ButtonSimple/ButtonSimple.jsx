import classNames from "classnames"
import PropTypes from "prop-types"
import "./style.scss"

function ButtonSimple({
  tag,
  className,
  handleClick,
  children,
  ...propsButton
}) {
  const TagCustom = tag
  const classesButton = classNames("button-simple", className)

  return (
    <TagCustom className={classesButton} {...propsButton} onClick={handleClick}>
      {children}
    </TagCustom>
  )
}

ButtonSimple.defaultProps = {
  tag: "button",
}

ButtonSimple.propTypes = {
  handleClick: PropTypes.func,
  children: PropTypes.any,
  tag: PropTypes.any,
  className: PropTypes.string,
}

export default ButtonSimple
