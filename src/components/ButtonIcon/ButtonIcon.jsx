import PropTypes from "prop-types"

function ButtonIcon({ dataItem, handleClick }) {
  const tag = dataItem.tag
  const label = dataItem.label
  const icon = dataItem.icon
  const CustomTag = tag.name

  const emitButtonClick = () => {
    handleClick(dataItem)
  }

  return (
    <CustomTag
      to={tag.to}
      href={tag.href}
      type={tag.type}
      className="button-icon"
      onClick={emitButtonClick}
    >
      <Label dataItem={label} />
      <Icon dataItem={icon} />
    </CustomTag>
  )
}

function Icon({ dataItem }) {
  const component = dataItem.component

  return component ? (
    <span className="button-icon__icon">{component}</span>
  ) : null
}

function Label({ dataItem }) {
  return <span className={getClassLabel(dataItem)}>{dataItem.content}</span>
}

function getClassLabel(dataItem) {
  const data = ["button-icon__label"]

  if (dataItem.isVisible === false) {
    data.push("button-icon__icon--hidden")
  }

  return data
}

ButtonIcon.defaultProps = {
  dataItem: {
    id: 1,
    label: {
      isVisible: true,
      content: "Shop",
      value: "shop",
    },
    tag: {
      name: "button",
      type: null,
      href: null,
      to: "/shop",
    },
    icon: {
      component: null,
    },
  },

  handleClick: () => console.log("click"),
}

ButtonIcon.propTypes = {
  dataItem: PropTypes.object,
  handleClick: PropTypes.func,
}

Icon.defaultProps = {
  dataItem: {
    component: null,
  },
}

Icon.propTypes = {
  dataItem: PropTypes.object,
}

Label.defaultProps = {
  dataItem: {
    isVisible: true,
    content: "Shop",
    value: "shop",
  },
}

Label.propTypes = {
  dataItem: PropTypes.object,
}

export default ButtonIcon
