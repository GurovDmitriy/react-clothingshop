import { getCollectionList, getShopItems, Shop } from "./data"

export type FetchShopCollectionProps = {
  params: {
    category: string
  }
}

export type FetchShopCollectionResponse = Promise<{
  collectionList: Array<Shop>
}>

async function fetchCollectionList(
  props: FetchShopCollectionProps
): FetchShopCollectionResponse {
  const collectionList = await getCollectionList(props.params.category)

  return { collectionList }
}

export type FetchShopResponse = Promise<{ shopList: Array<Shop> }>

async function fetchShopItems(): FetchShopResponse {
  const shopList = await getShopItems()
  return { shopList }
}

export { fetchShopItems, fetchCollectionList }
