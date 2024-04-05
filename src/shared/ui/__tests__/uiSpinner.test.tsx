import { UISpinner } from "@/shared/ui/UISpinner/UISpinner"
import { describe, expect, it } from "@jest/globals"
import { render, screen } from "@testing-library/react"

describe("Components: UISpinner", () => {
  it("should be defined", () => {
    // arrange
    render(<UISpinner />)

    // act
    const element = screen.getByTestId("spinner")
    const spinner = element.innerHTML

    // assert
    expect(spinner).toBeDefined()
  })
})
