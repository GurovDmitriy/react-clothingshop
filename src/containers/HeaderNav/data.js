import { Link } from "react-router-dom"
import { ReactComponent as Cart } from "../../assets/images/cart.svg"

const dataNav = [
  {
    id: 1,
    label: {
      isVisible: true,
      content: "Shop",
      value: "shop",
    },
    tag: {
      name: Link,
      type: null,
      href: null,
      to: "/shop",
    },
    icon: {
      component: null,
    },
  },
  {
    id: 2,
    label: {
      isVisible: true,
      content: "Contact",
      value: "contact",
    },
    tag: {
      name: Link,
      type: null,
      href: null,
      to: "/contact",
    },
    icon: {
      component: null,
    },
  },
  {
    id: 3,
    label: {
      isVisible: true,
      content: "Sign in",
      value: "singIn",
    },
    tag: {
      name: Link,
      type: null,
      href: null,
      to: "/sign",
    },
    icon: {
      component: null,
    },
  },
  {
    id: 4,
    label: {
      isVisible: false,
      content: "Cart",
      value: "cart",
    },
    tag: {
      name: "button",
      type: "button",
      href: null,
      to: null,
    },
    icon: {
      component: Cart,
    },
  },
]

export default dataNav
