import { getCountProducts } from "@/feature/Menu/ui/ContainerMenu/utils/getCountProducts"
import { describe, expect, it } from "@jest/globals"

describe("Utils: getCountProducts", () => {
  it("should be return sum value cart", () => {
    // arrange
    const cart = [
      { name: "product 1", count: 1 },
      { name: "product 2", count: 2 },
    ]
    const expectedValue = 3

    // act
    const count = getCountProducts(cart)

    // assert
    expect(count).toEqual(expectedValue)
  })
})
