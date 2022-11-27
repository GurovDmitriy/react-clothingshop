import classNames from "classnames"
import { Link } from "react-router-dom"
import "./style.scss"

MenuItem.defaultProps = {
  entities: {},
}

type MenuItemProps = {
  entities: {
    link: string
    caption: string
    description: string
  }
  className?: string
  [x: string]: any
}

function MenuItem(props: MenuItemProps) {
  const { entities, className, ...otherProps } = props

  const menuClass = classNames("menu-item", className)

  return (
    <div className={menuClass} {...otherProps}>
      <Link to={entities.link} className="menu-item__box-content">
        <div className="menu-item__caption">{entities.caption}</div>
        <div className="menu-item__description">{entities.description}</div>
      </Link>
    </div>
  )
}

export default MenuItem
