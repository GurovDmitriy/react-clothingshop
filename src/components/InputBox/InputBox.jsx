import classNames from "classnames"
import PropTypes from "prop-types"
import "./styles.scss"

function InputBox({ children, isHiddenLabel, className, ...propsInput }) {
  const classesInputBox = classNames("input-box", className)
  const classesLabel = classNames("input-box__label", {
    "input-box__label--hidden": isHiddenLabel,
  })

  return (
    <div className={classesInputBox}>
      <label className={classesLabel} htmlFor={propsInput.id}>
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
