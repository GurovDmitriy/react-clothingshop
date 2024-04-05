import { UICard } from "@/shared/ui/UICard/UICard"
import { describe, expect, it } from "@jest/globals"
import { render, screen } from "@testing-library/react"
import { userEvent } from "@testing-library/user-event"
import { fn } from "jest-mock"

describe("Components: UICard", () => {
  it("should be render caption", () => {
    // arrange
    render(<UICard image="https://placehold.co/600x400" caption="caption" />)

    // act
    const element = screen.getByText("caption")

    // assert
    expect(element).toBeDefined()
  })

  it("should be render description", () => {
    // arrange
    render(
      <UICard image="https://placehold.co/600x400" description="description" />,
    )

    // act
    const element = screen.getByText("description")

    // assert
    expect(element).toBeDefined()
  })

  it("should be render actions", async () => {
    // arrange
    const user = userEvent.setup()
    const action = fn()

    render(
      <UICard
        image="https://placehold.co/600x400"
        actions={[
          <div key="action" data-testid="action" onClick={action}>
            icon action
          </div>,
        ]}
      />,
    )

    // act
    const element = screen.getByTestId("action")
    await user.click(element)

    // assert
    expect(action).toBeCalledTimes(1)
  })
})
