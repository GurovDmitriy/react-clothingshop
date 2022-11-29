import { getCollecitonList, getShopItems } from "../../data/shopItems"

type FetchShopCollectionProps = {
  params: {
    category: string
  }
}

type FetchShopCollectionResponse = Promise<{ collectionList: unknown }>

async function fetchShopCollection(
  props: FetchShopCollectionProps
): FetchShopCollectionResponse {
  const collectionList = getCollecitonList(props.params.category)

  return { collectionList }
}

type FetchShopItemsResponse = Promise<{ shopList: unknown }>

async function fetchShopItems(): FetchShopItemsResponse {
  const shopList = await getShopItems()
  return { shopList }
}

export { fetchShopItems, fetchShopCollection }
