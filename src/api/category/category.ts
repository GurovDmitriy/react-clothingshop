import categoryData, { Category } from "./data"

export type FetchCategoryResponse = Promise<{ menuList: Array<Category> }>

async function fetchCategory(): FetchCategoryResponse {
  const menuList = await new Promise<Array<Category>>((resolve) =>
    resolve(categoryData)
  )
  return { menuList }
}

export { fetchCategory }
