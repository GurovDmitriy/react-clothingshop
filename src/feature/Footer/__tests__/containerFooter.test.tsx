import { ContainerFooter } from "@/feature/Footer"
import { describe, expect, it } from "@jest/globals"
import { render, screen } from "@testing-library/react"

describe("Components: ContainerFooter", () => {
  it("should be render copyright", async () => {
    // arrange
    render(<ContainerFooter />)
    const findContent =
      "Clothing Shop - Real World Clone for React and Next.js 2024"
    const findRegex = new RegExp(findContent, "i")

    // act
    const element = screen.getByText(findRegex)

    // assert
    expect(element).toBeTruthy()
  })
})
