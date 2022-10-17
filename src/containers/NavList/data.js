import { Link } from "react-router-dom"
import { ReactComponent as CartIcon } from "../../assets/images/cart.svg"

export const dataCartButton = {
  label: "Cart",
  isVisibleLabel: false,
  value: "cart",
  tag: "button",
  href: null,
  target: null,
  type: "button",
  to: null,
  customClass: "nav-list",
  icon: CartIcon,
}

export const dataNav = [
  {
    id: 1,
    label: "Shop",
    value: "shop",
    tag: Link,
    to: "/shop",
    href: null,
    target: null,
    type: null,
    customClass: "nav-list",
  },
  {
    id: 2,
    label: "Contact",
    value: "contact",
    tag: Link,
    to: "/shop",
    href: null,
    target: null,
    type: null,
    customClass: "nav-list",
  },
  {
    id: 3,
    label: "Sing in",
    value: "singIn",
    tag: Link,
    to: "/shop",
    href: null,
    target: null,
    type: null,
    customClass: "nav-list",
  },
]
