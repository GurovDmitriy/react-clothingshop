import shopData from "../data/shopData"

/**
 * @returns {array} shopList - Shop data all
 */
async function fetchShopCollection(props) {
  const collectionList = await new Promise((resolve) => {
    const data = shopData.filter(
      (item) => item.routeName === props.params.category
    )
    resolve(data)
  })

  return { collectionList }
}

/**
 * @returns {array} shopList - Shop data preview
 */
async function fetchShopItems() {
  const shopList = await new Promise((resolve) => {
    const data = shopData.map((item) => {
      return {
        ...item,
        items: item.items.filter((el, index) => index < 4),
      }
    })
    resolve(data)
  })
  return { shopList }
}

export { fetchShopItems, fetchShopCollection }
