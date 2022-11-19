import categoryData from "../data/categoryData"

/**
 * @returns {array} menuList - Category data
 */
async function fetchCategory() {
  const menuList = await new Promise((resolve) => resolve(categoryData))
  return { menuList }
}

export { fetchCategory }
