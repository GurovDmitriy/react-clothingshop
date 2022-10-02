import { useLoaderData, Form, Link, Outlet } from "react-router-dom"
import { listItems } from "./data"

export async function loader(props) {
  const categoryItems = await new Promise((resolve) => {
    const data = listItems.find(
      (item) => item.category.toLowerCase() === props.params.category
    )
    return resolve(data)
  })

  return { categoryItems }
}

export async function action(props) {
  await new Promise((resolve) => {
    const category = listItems.find(
      (item) => item.category.toLowerCase() === props.params.category
    )
    const count = category.items.length + 1
    const item = {
      id: count,
      name: `${category.category} ${count}`,
      details: {
        caption: `caption Hats ${count}`,
        description: `description Hats ${count}`,
      },
    }
    category.items.push(item)
    resolve("new item added")
  })
}

function PageCategory() {
  const { categoryItems } = useLoaderData()
  const categoryList = categoryItems.items.map((item) => {
    return (
      <div key={item.id}>
        <Link to={`${item.id}`}>{item.name}</Link>
      </div>
    )
  })

  return (
    <div className="page-category">
      <Form method="post">
        <button type="submit">add new</button>
      </Form>
      {categoryList}
      <Outlet />
    </div>
  )
}

export default PageCategory
