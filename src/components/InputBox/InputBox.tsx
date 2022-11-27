import classNames from "classnames"
import "./style.scss"

InputBox.defaultProps = {
  isHiddenLabel: false,
}

type InputBoxProps = {
  children?: string | number
  className?: string
  isHiddenLabel?: boolean
  id?: string
  [x: string]: any
} & typeof InputBox.defaultProps

function InputBox(props: InputBoxProps) {
  const { children, isHiddenLabel, className, id, ...otherProps } = props

  const inputBoxClass = classNames("input-box", className)
  const labelClass = classNames("input-box__label", {
    "input-box__label--hidden": isHiddenLabel,
  })

  return (
    <div className={inputBoxClass}>
      <label className={labelClass} htmlFor={id}>
        {children}
      </label>
      <input className="input-box__input" id={id} {...otherProps} />
    </div>
  )
}

export default InputBox
