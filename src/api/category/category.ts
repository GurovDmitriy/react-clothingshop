import categoryData from "../../data/categoryData"

type CategoryDataResponse = {
  menuList: {
    id: number
    caption: string
    description: string
    link: string
    image: string
  }[]
}

async function fetchCategory(): Promise<CategoryDataResponse> {
  const menuList = await new Promise((resolve) => resolve(categoryData))
  return { menuList }
}

export { fetchCategory }
