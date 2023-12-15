import { getCollectionList, getShopItems, Shop } from "./data"

export type FetchShopCollectionProps = {
  params: {
    category: string
  }
}

async function fetchCollectionList(
  props: FetchShopCollectionProps
) {
  const collectionList = await getCollectionList(props.params.category)

  return { collectionList }
}

export type FetchShopResponse = Promise<{ shopList: Array<Shop> }>

async function fetchShopItems() {
  const shopList = await getShopItems()
  return { shopList }
}

export { fetchShopItems, fetchCollectionList }
