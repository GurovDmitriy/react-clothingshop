import { render, screen } from "@testing-library/react"
import HomePage from "./HomePage"

test("renders caption", () => {
  render(<HomePage />)
  const captionElement = screen.getByText(/Shop/i)
  expect(captionElement).toBeInTheDocument()
})
