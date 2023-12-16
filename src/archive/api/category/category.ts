import categoryData, { Category } from "./data"

async function fetchCategory() {
  const menuList = await new Promise<Array<Category>>((resolve) =>
    resolve(categoryData)
  )
  return { menuList }
}

export { fetchCategory }
