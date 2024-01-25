import { UIHeaderSign } from "@/entities/Header"
import { describe, expect, it } from "@jest/globals"
import { render, screen } from "@testing-library/react"

describe("Components: UIHeaderSign", () => {
  it("should be render logo text", async () => {
    // arrange
    render(<UIHeaderSign />)
    const findContent = "Clothing Shop"

    // act
    const content = screen.getByRole("heading", { level: 1 }).textContent

    // assert
    expect(content).toEqual(findContent)
  })

  it("should be render logo text in header sign", async () => {
    // arrange
    render(<UIHeaderSign />)
    const findContent = "Clothing Shop"

    // act
    const content = screen.getByRole("heading", { level: 1 }).textContent

    // assert
    expect(content).toEqual(findContent)
  })
})
