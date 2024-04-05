import { UIBtnMenu } from "@/shared/ui/UIBtnMenu/UIBtnMenu"
import { describe, expect, it } from "@jest/globals"
import { render, screen } from "@testing-library/react"
import { userEvent } from "@testing-library/user-event"
import { fn } from "jest-mock"

describe("Components: UIBtnMenu", () => {
  it("should be render open icon", () => {
    // arrange
    render(<UIBtnMenu open={true} onClick={() => {}} />)

    // act
    const element = screen.getByTestId("iconMenuOpen")
    const elementClose = screen.queryByTestId("iconMenuClose")

    // assert
    expect(element).toBeDefined()
    expect(elementClose).toBeFalsy()
  })

  it("should be render close icon", () => {
    // arrange
    render(<UIBtnMenu open={false} onClick={() => {}} />)

    // act
    const element = screen.getByTestId("iconMenuClose")
    const elementOpen = screen.queryByTestId("iconMenuOpen")

    // assert
    expect(element).toBeDefined()
    expect(elementOpen).toBeFalsy()
  })

  it("should be emit event", async () => {
    // arrange
    const user = userEvent.setup()

    let open = false
    const toggle = fn()

    render(<UIBtnMenu open={open} onClick={toggle} />)

    // act
    await user.click(screen.getByRole("button"))

    // assert
    expect(toggle).toBeCalledTimes(1)
  })

  it("should be emit event with accessibility", async () => {
    // arrange
    const user = userEvent.setup()

    let open = false
    const toggle = fn()

    render(<UIBtnMenu open={open} onClick={toggle} />)

    // act
    await user.tab()
    await user.keyboard("[enter]")

    // assert
    expect(toggle).toBeCalledTimes(1)
  })
})
