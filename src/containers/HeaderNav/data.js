import { Link } from "react-router-dom"

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
      handleClick: null,
    },
    icon: {
      component: null,
    },
  },
  {
    id: 2,
    label: {
      isVisible: true,
      content: "Cart",
      value: "cart",
    },
    tag: {
      name: "button",
      type: "button",
      href: null,
      to: null,
      handleClick: (data) => console.log(data),
    },
    icon: {
      component: null,
    },
  },
]

export default dataNav
