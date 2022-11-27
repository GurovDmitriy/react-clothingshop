import shopData from "../../data/shopData"

type FetchShopCollectionProps = {
  params: {
    category: string
  }
}

type FetchShopCollectionResponse = Promise<{ collectionList: unknown }>

async function fetchShopCollection(
  props: FetchShopCollectionProps
): FetchShopCollectionResponse {
  const collectionList = await new Promise((resolve) => {
    const data = shopData.filter(
      (item) => item.routeName === props.params.category
    )
    resolve(data)
  })

  return { collectionList }
}

type FetchShopItemsResponse = Promise<{ shopList: unknown }>

async function fetchShopItems(): FetchShopItemsResponse {
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
