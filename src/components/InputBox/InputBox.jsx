import classNames from "classnames"
import PropTypes from "prop-types"
import "./style.scss"

function InputBox(props) {
  const { children, isHiddenLabel, className, ...propsInput } = props

  const inputBoxClass = classNames("input-box", className)
  const labelClass = classNames("input-box__label", {
    "input-box__label--hidden": isHiddenLabel,
  })

  return (
    <div className={inputBoxClass}>
      <label className={labelClass} htmlFor={propsInput.id}>
        {children}
      </label>
      <input className="input-box__input" {...propsInput} />
    </div>
  )
}

InputBox.defaultProps = {
  isHiddenLabel: false,
}

InputBox.propTypes = {
  onInput: PropTypes.func,
  children: PropTypes.string,
  className: PropTypes.string,
  isHiddenLabel: PropTypes.bool,
}

export default InputBox
