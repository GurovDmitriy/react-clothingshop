import PropTypes from "prop-types"

function InputBox({ config, onInput, value }) {
  return (
    <div className={`input-box ${config.customClass}__input-box`}>
      <label
        className={getClassLabel(config.isVisibleLabel)}
        htmlFor={config.id}
      >
        {config.label}
      </label>
      <input
        className="input-box__input"
        onInput={onInput}
        type={config.type}
        name={config.name}
        placeholder={config.placeholder}
        id={config.id}
        required={config.required}
        value={value}
      />
    </div>
  )
}

function getClassLabel(isVisibleLabel) {
  const data = ["input-box__label"]

  if (!isVisibleLabel) {
    data.push("input-box__label--hidden")
  }

  return data.join(" ")
}

InputBox.defaultProps = {
  config: {
    type: "text",
    name: "name",
    placeholder: "name",
    required: false,
    id: "name-field",
    label: "name",
    isVisibleLabel: true,
    className: null,
  },
  value: null,
}

InputBox.propTypes = {
  onInput: PropTypes.func,
  value: PropTypes.any,
  config: PropTypes.object,
}

export default InputBox
