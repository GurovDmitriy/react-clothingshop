import classNames from "classnames"
import React from "react"
import "./style.scss"

ButtonSimple.defaultProps = {
  tag: "button",
}

type ButtonSimpleProps = {
  handleClick?: () => void
  children: string | number
  tag?: string
  className?: string
  [x: string]: any
} & typeof ButtonSimple.defaultProps

function ButtonSimple(props: ButtonSimpleProps) {
  const { tag, className, handleClick, children, ...otherProps } = props

  const TagCustom = tag as React.ElementType
  const buttonClass = classNames("button-simple", className)

  return (
    <TagCustom className={buttonClass} {...otherProps} onClick={handleClick}>
      {children}
    </TagCustom>
  )
}

export default ButtonSimple
