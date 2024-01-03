import { render, screen } from "@testing-library/react"
import { UICopyright } from "@/domain/Footer/components/UICopyright/UICopyright"
import { describe, it, expect } from "@jest/globals"

describe("UICopyright", () => {
  it("should be render copyright text", () => {
    // Arrange
    render(<UICopyright />)

    // Act
    const content = screen.getByRole("heading", { level: 3 }).textContent

    // Assert
    expect(content).toEqual(
      "Clothing Shop - Real World Clone for React and Next.js 2023",
    )
  })
})
