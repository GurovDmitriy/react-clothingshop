import { UILogo } from "@/shared/ui/UILogo/UILogo"
import { describe, expect, it } from "@jest/globals"
import { render, screen } from "@testing-library/react"

describe("Components: UILogo", () => {
  it("should be defined", () => {
    // arrange
    render(<UILogo />)

    // act
    const element = screen.getByText("Clothing Shop")

    // assert
    expect(element).toBeDefined()
  })
})
