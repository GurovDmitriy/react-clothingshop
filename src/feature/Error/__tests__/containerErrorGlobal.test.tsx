import { ContainerErrorGlobal } from "@/feature/Error"
import {
  afterEach,
  beforeEach,
  describe,
  expect,
  it,
  jest,
} from "@jest/globals"
import { fireEvent, render, screen } from "@testing-library/react"
import { fn } from "jest-mock"

let spyConsole: unknown = jest
  .spyOn(global.console, "error")
  .mockImplementation(() => {
    return () => {}
  })

const mockReset = fn()

const props = {
  error: new Error("Error"),
  reset: mockReset,
}

describe("Components: ContainerErrorGlobal", () => {
  beforeEach(() => {
    render(<ContainerErrorGlobal error={props.error} reset={props.reset} />)
  })

  afterEach(() => {
    jest.clearAllMocks()
  })

  it("should be render root elements as html", () => {
    // arrange

    // act
    const container = screen.getByTestId("html-error")

    // assert
    expect(container).toBeDefined()
  })

  it("should be render root elements as body", () => {
    // arrange

    // act
    const container = screen.getByTestId("body-error")

    // assert
    expect(container).toBeDefined()
  })

  it("should be render error text", () => {
    // arrange
    const message = "Something went wrong!"

    // act
    const text = screen.getByRole("heading", { level: 2 }).textContent

    // assert
    expect(text).toEqual(message)
  })

  it("should be render reset button", () => {
    // arrange
    const buttonText = "Try again"

    // act
    const container = screen.getByText(buttonText)

    // assert
    expect(container).toBeDefined()
  })

  it("should be called reset button", () => {
    // arrange

    // act
    fireEvent.click(screen.getByRole("button"))

    // assert
    expect(mockReset).toBeCalled()
  })

  it("should be call console error", () => {
    // arrange

    // act

    // assert
    expect(spyConsole).toBeCalled()
  })
})
