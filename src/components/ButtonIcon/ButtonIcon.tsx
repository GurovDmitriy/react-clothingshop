import classNames from "classnames"
import React from "react"
import "./style.scss"

function ButtonIcon(props: ButtonIconProps) {
  const {
    as,
    icon,
    isHiddenLabel,
    className,
    handlerClick,
    children,
    ...otherProps
  } = props

  const Component = as
  const buttonClass = classNames("button-icon", className)
  const labelClass = classNames("button-icon__label", {
    "button-icon__label--hidden": isHiddenLabel,
  })

  return (
    <Component className={buttonClass} onClick={handlerClick} {...otherProps}>
      <span className={labelClass}>{children}</span>
      <span className="button-icon__icon-box">{icon}</span>
    </Component>
  )
}

ButtonIcon.defaultProps = {
  as: "button",
  isHiddenLabel: false,
}

interface ButtonIconProps extends React.ComponentPropsWithoutRef<"button"> {
  handlerClick?: () => void
  children?: string | number
  as: React.ElementType
  className?: string
  isHiddenLabel?: boolean
  icon: JSX.Element[]
}

export default ButtonIcon
