import { UIAlertError } from "@/entities/Sign/ui/UIAlertError/UIAlertError"
import { describe, expect, it } from "@jest/globals"
import { render, screen } from "@testing-library/react"

describe("Components: UIAlertError", () => {
  it("should be render error element", () => {
    // arrange
    const message = "Error"
    const error = {
      error: {
        message,
      },
    } as unknown as Error

    render(<UIAlertError error={error} />)

    // act
    const element = screen.getByRole("alert")

    // assert
    expect(element).toBeTruthy()
  })

  it("should not be render error component", () => {
    // arrange
    const error = null

    render(<UIAlertError error={error} />)

    // act
    const element = screen.queryByRole("alert")

    // assert
    expect(element).toBeNull()
  })
})
