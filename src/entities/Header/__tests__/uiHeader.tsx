import { UIHeader } from "@/entities/Header"
import { describe, expect, it } from "@jest/globals"
import { render, screen } from "@testing-library/react"

describe("Components: UIHeader", () => {
  it("should be render logo text", async () => {
    // arrange
    render(<UIHeader open={false} onClick={() => {}} />)
    const findContent = "Clothing Shop"

    // act
    const content = screen.getByRole("heading", { level: 1 }).textContent

    // assert
    expect(content).toEqual(findContent)
  })
})
