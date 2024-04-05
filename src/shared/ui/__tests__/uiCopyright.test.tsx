import { UICopyright } from "@/shared/ui/UICopyright/UICopyright"
import { describe, expect, it } from "@jest/globals"
import { render, screen } from "@testing-library/react"

describe("Components: UICopyright", () => {
  it("should be render caption tag", () => {
    // arrange
    render(<UICopyright>Caption</UICopyright>)

    // act
    const element = screen.getByRole("heading", {
      level: 3,
    })

    // assert
    expect(element).toBeDefined()
  })
})
