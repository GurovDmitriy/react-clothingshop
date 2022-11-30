import classNames from "classnames"
import React from "react"
import "./style.scss"

function ButtonDefault(props: ButtonDefaultProps) {
  const { as, className, handlerClick, children, ...otherProps } = props

  const Component = as
  const buttonClass = classNames("button-default", className)

  return (
    <Component className={buttonClass} onClick={handlerClick} {...otherProps}>
      {children}
    </Component>
  )
}

ButtonDefault.defaultProps = {
  as: "button",
}

interface ButtonDefaultProps extends React.ComponentPropsWithoutRef<"button"> {
  handlerClick?: (args: any) => void
  children?: string | number
  as: React.ElementType
  className?: string
}

export default ButtonDefault
