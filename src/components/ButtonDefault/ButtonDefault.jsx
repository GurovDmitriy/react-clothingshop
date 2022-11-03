import classNames from "classnames"
import PropTypes from "prop-types"
import "./styles.scss"

function ButtonDefault({
  tag,
  className,
  handleClick,
  children,
  ...propsButton
}) {
  const TagCustom = tag
  const classesButton = classNames("button-default", className)

  return (
    <TagCustom className={classesButton} onClick={handleClick} {...propsButton}>
      {children}
    </TagCustom>
  )
}

ButtonDefault.defaultProps = {
  tag: "button",
}

ButtonDefault.propTypes = {
  handleClick: PropTypes.func,
  children: PropTypes.any,
  tag: PropTypes.any,
  className: PropTypes.string,
}

export default ButtonDefault
