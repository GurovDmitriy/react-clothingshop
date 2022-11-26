import classNames from "classnames"
import PropTypes from "prop-types"
import "./style.scss"

function ButtonSimple(props) {
  const { tag, className, handleClick, children, ...propsButton } = props

  const TagCustom = tag
  const buttonClass = classNames("button-simple", className)

  return (
    <TagCustom className={buttonClass} {...propsButton} onClick={handleClick}>
      {children}
    </TagCustom>
  )
}

ButtonSimple.defaultProps = {
  tag: "button",
}

ButtonSimple.propTypes = {
  handleClick: PropTypes.func,
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.element]),
  tag: PropTypes.any,
  className: PropTypes.string,
}

export default ButtonSimple
