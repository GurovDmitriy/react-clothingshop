import {
  ICategoryAll,
  ICategoryPreview,
  dataCategoryAll,
  dataCategoryPreview,
} from "@/entities/Category/model/data"

const listPreview = dataCategoryPreview

export function fetchListPreview(): Promise<ICategoryPreview[]> {
  return new Promise((resolve) =>
    setTimeout(() => {
      resolve(dataCategoryPreview)
    }, 1200),
  )
}

function fetchListAll(): Promise<ICategoryAll[]> {
  return new Promise((resolve) => {
    setTimeout(() => {
      const resultData = dataCategoryAll.map((item) => {
        return {
          ...item,
          items: item.items.filter((el, index) => index < 4),
        }
      })
      resolve(resultData)
    }, 1000)
  })
}

function fetchListBySlug(slug: string): Promise<ICategoryAll | undefined> {
  return new Promise((resolve) => {
    setTimeout(() => {
      const resultData = dataCategoryAll.find((item) => item.value === slug)
      resolve(resultData)
    }, 1000)
  })
}

export function useModelCategory() {
  return {
    listPreview,
    fetchListPreview,
    fetchListAll,
    fetchListBySlug,
  }
}
