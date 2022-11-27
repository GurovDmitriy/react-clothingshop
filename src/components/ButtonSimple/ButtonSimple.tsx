import classNames from "classnames"
import React from "react"
import "./style.scss"

function ButtonSimple(props: ButtonSimpleProps) {
  const { as, className, handlerClick, children, ...otherProps } = props

  const Component = as
  const buttonClass = classNames("button-simple", className)

  return (
    <Component className={buttonClass} {...otherProps} onClick={handlerClick}>
      {children}
    </Component>
  )
}

ButtonSimple.defaultProps = {
  as: "button",
}

interface ButtonSimpleProps extends React.ComponentPropsWithoutRef<"button"> {
  as: React.ElementType
  handlerClick?: () => void
  children?: string | number
  className?: string
}

export default ButtonSimple
