import classNames from "classnames"
import React from "react"
import "./style.scss"

ButtonDefault.defaultProps = {
  tag: "button",
}

type ButtonDefaultProps = {
  tag?: string
  className?: string
  handlerClick?: () => void
  children: string | number
  [x: string]: any
} & typeof ButtonDefault.defaultProps

function ButtonDefault(props: ButtonDefaultProps) {
  const { tag, className, handlerClick, children, ...otherProps } = props

  const TagCustom = tag as React.ElementType
  const buttonClass = classNames("button-default", className)

  return (
    <TagCustom className={buttonClass} onClick={handlerClick} {...otherProps}>
      {children}
    </TagCustom>
  )
}

export default ButtonDefault
