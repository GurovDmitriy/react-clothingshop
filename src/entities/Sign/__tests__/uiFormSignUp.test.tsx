import { describe, expect, it } from "@jest/globals"
import { render, screen } from "@testing-library/react"
import { userEvent } from "@testing-library/user-event"
import { UIFormSignUp } from "../ui/UIFormSignUp/UIFormSignUp"

describe("Components: UIFormSignUp", () => {
  it("should be render email and password field", () => {
    // arrange
    render(
      <UIFormSignUp
        pending={false}
        onSubmit={() => {}}
        onSignGoogle={() => {}}
        hrefToggleForm={"/sign-in"}
      />,
    )

    // act
    const elementEmail = screen.getByPlaceholderText("Email")
    const elementPassword = screen.getByPlaceholderText("Password")

    // assert
    expect(elementEmail).toBeTruthy()
    expect(elementPassword).toBeTruthy()
  })

  it("should be display value in email and password field", async () => {
    // arrange
    const user = userEvent.setup()
    const email = "test@example.com"
    const password = "123456"

    render(
      <UIFormSignUp
        pending={false}
        onSubmit={() => {}}
        onSignGoogle={() => {}}
        hrefToggleForm={"/sign-in"}
      />,
    )

    // act
    const elementEmail = screen.getByPlaceholderText("Email")
    const elementPassword = screen.getByPlaceholderText("Password")
    await user.type(elementEmail, email)
    await user.type(elementPassword, password)

    // assert
    // @ts-ignore
    expect(elementEmail.value).toBe(email)
    // @ts-ignore
    expect(elementPassword.value).toBe(password)
  })
})
