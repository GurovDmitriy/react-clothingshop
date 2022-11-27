import classNames from "classnames"
import React from "react"
import "./style.scss"

ButtonIcon.defaultProps = {
  tag: "button",
  isHiddenLabel: false,
}

type ButtonIconProps = {
  handlerClick?: () => void
  children?: string | number
  tag?: string
  className?: string
  isHiddenLabel?: boolean
  icon: JSX.Element
  [x: string]: any
} & typeof ButtonIcon.defaultProps

function ButtonIcon(props: ButtonIconProps) {
  const {
    tag,
    icon,
    isHiddenLabel,
    className,
    handlerClick,
    children,
    ...otherProps
  } = props

  const TagCustom = tag as React.ElementType
  const buttonClass = classNames("button-icon", className)
  const labelClass = classNames("button-icon__label", {
    "button-icon__label--hidden": isHiddenLabel,
  })

  return (
    <TagCustom className={buttonClass} onClick={handlerClick} {...otherProps}>
      <span className={labelClass}>{children}</span>
      <span className="button-icon__icon-box">{icon}</span>
    </TagCustom>
  )
}

export default ButtonIcon
