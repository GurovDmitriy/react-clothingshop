import { ProviderCart } from "@/entities/Cart"
import { ContainerMenu, MENU } from "@/feature/Menu"
import { describe, expect, it } from "@jest/globals"
import { render, screen, waitFor } from "@testing-library/react"

describe("Components: ContainerMenu", () => {
  it("should be render menu items", async () => {
    // arrange
    const menuArr = Object.values(MENU).map((m) => m.name)
    const regMenuText = new RegExp(menuArr.join("|"))
    const menuLength = menuArr.length

    render(
      <ProviderCart>
        <ContainerMenu />
      </ProviderCart>,
    )

    // act
    const content = await waitFor(() => screen.getAllByText(regMenuText))

    // assert
    expect(content).toHaveLength(menuLength)
  })
})
