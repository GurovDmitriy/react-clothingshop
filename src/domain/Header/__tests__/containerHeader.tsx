import { ContainerHeader } from "@/domain/Header/_domain/Header/ContainerHeader"
import { ContainerHeaderSign } from "@/domain/Header/_domain/HeaderSign/ContainerHeaderSign"
import { describe, expect, it } from "@jest/globals"
import { fireEvent, render, screen } from "@testing-library/react"

describe("Component: ContainerHeader", () => {
  it("should be render logo", () => {
    // Assert
    render(<ContainerHeader onClick={() => false} open={false} />)

    // Act
    const content = screen.getByText("Clothing Shop")

    // Arrange
    expect(content).toBeTruthy()
  })

  it("should be change state menu open", () => {
    // Assert
    const state = {
      open: false,
    }

    function toggle() {
      state.open = !state.open
    }

    render(<ContainerHeader onClick={toggle} open={state.open} />)

    // Act
    fireEvent.click(screen.getByRole("button"))

    // Assert
    expect(state.open).toBeTruthy()
  })
})

describe("Component: ContainerHeaderSign", () => {
  it("should be render logo", () => {
    // Assert
    render(<ContainerHeaderSign />)

    // Act
    const content = screen.getByText("Clothing Shop")

    // Arrange
    expect(content).toBeTruthy()
  })
})
