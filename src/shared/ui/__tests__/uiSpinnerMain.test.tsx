import { UISpinnerMain } from "@/shared/ui/UISpinnerMain/UISpinnerMain"
import { describe, expect, it } from "@jest/globals"
import { render, screen } from "@testing-library/react"

describe("Components: UISpinnerMain", () => {
  it("should be defined", () => {
    // arrange
    render(<UISpinnerMain />)

    // act
    const element = screen.getByTestId("spinnerMain")
    const spinner = element.innerHTML

    // assert
    expect(spinner).toBeTruthy()
  })
})
