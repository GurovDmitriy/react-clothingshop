import PropTypes from "prop-types"
import "./styles.scss"

function InputBox({ dataItem, onInput, value }) {
  return (
    <div className={`input-box ${dataItem.customClass}__input-box`}>
      <label
        className={getClassLabel(dataItem.isVisibleLabel)}
        htmlFor={dataItem.id}
      >
        {dataItem.label}
      </label>
      <input
        className="input-box__input"
        onInput={onInput}
        type={dataItem.type}
        name={dataItem.name}
        placeholder={dataItem.placeholder}
        id={dataItem.id}
        required={dataItem.required}
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
  dataItem: {
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
  dataItem: PropTypes.object,
}

export default InputBox
