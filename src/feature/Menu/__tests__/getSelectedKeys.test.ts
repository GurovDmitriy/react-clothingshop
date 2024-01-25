import { getSelectedKeys } from "@/feature/Menu/ui/ContainerMenu/utils/getSelectedKeys"
import { describe, expect, it } from "@jest/globals"

describe("Utils: getSelectedKeys", () => {
  it("should be return find pathName keys", () => {
    // arrange
    const pathName = "/category"
    const list = [
      { key: "category", icon: "icon" },
      { key: "shop", icon: "icon" },
    ]
    const defaultKey = "shop"
    const expectedValue = "category"

    // act
    const selectedKeys = getSelectedKeys<typeof list>(
      pathName,
      list,
      defaultKey,
    )

    // assert
    expect(selectedKeys).toContain(expectedValue)
    expect(selectedKeys).toHaveLength(1)
  })
})
