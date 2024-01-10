import { ContainerFooter } from "@/domain/Footer/_domain/Footer/ContainerFooter"
import { ContainerFooterSign } from "@/domain/Footer/_domain/FooterSign/ContainerFooterSign"
import { describe, expect, it } from "@jest/globals"
import { render, screen } from "@testing-library/react"

describe("Component: ContainerFooter", () => {
  it("should be render copyright text", () => {
    // Arrange
    render(<ContainerFooter />)

    // Act
    const content = screen.getByText(
      "Clothing Shop - Real World Clone for React and Next.js 2024",
    )

    // Assert
    expect(content).toBeTruthy()
  })
})

describe("Component: ContainerFooterSign", () => {
  it("should be render copyright text", () => {
    // Arrange
    render(<ContainerFooterSign />)

    // Act
    const content = screen.getByText(
      "Clothing Shop - Real World Clone for React and Next.js 2024",
    )

    // Assert
    expect(content).toBeTruthy()
  })
})
