import classNames from "classnames"
import { Category } from "../../api/category/data"
import MenuItem from "../MenuItem/MenuItem"
import "./style.scss"

function MenuList(props: MenuListProps) {
  const { className, entities } = props

  function renderAppMenuItems() {
    return entities.map((item) => {
      return (
        <MenuItem
          className="menu-list__item"
          entities={item}
          key={item.id}
          style={{ backgroundImage: `url(${item.image})` }}
        />
      )
    })
  }

  const appMenuItems = renderAppMenuItems()
  const listClass = classNames("menu-list", className)

  return <section className={listClass}>{appMenuItems}</section>
}

type MenuListProps = {
  entities: Array<Category>
  className?: string
}

export default MenuList
