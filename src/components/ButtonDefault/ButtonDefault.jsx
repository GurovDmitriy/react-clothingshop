import classNames from "classnames"
import PropTypes from "prop-types"
import "./style.scss"

function ButtonDefault(props) {
  const { tag, className, handleClick, children, ...propsButton } = props

  const TagCustom = tag
  const buttonClass = classNames("button-default", className)

  return (
    <TagCustom className={buttonClass} onClick={handleClick} {...propsButton}>
      {children}
    </TagCustom>
  )
}

ButtonDefault.defaultProps = {
  tag: "button",
}

ButtonDefault.propTypes = {
  handleClick: PropTypes.func,
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.element]),
  tag: PropTypes.any,
  className: PropTypes.string,
}

export default ButtonDefault
