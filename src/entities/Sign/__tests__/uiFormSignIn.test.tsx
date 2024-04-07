import { UIFormSignIn } from "@/entities/Sign"
import { afterEach, beforeEach, describe, expect, it } from "@jest/globals"
import { render, screen } from "@testing-library/react"
import { userEvent } from "@testing-library/user-event"
import { fn } from "jest-mock"

describe("Components: UIFormSignIn", () => {
  let user: ReturnType<typeof userEvent.setup>
  let email: string
  let password: string

  const onSubmit = fn()

  beforeEach(() => {
    user = userEvent.setup()
    email = "test@example.com"
    password = "123456"

    render(
      <UIFormSignIn
        pending={false}
        onSubmit={onSubmit}
        onSignGoogle={() => {}}
        hrefToggleForm={"/sign-up"}
      />,
    )
  })

  afterEach(() => {
    onSubmit.mockClear()
  })

  it("should be render email and password field", () => {
    // arrange

    // act
    const elementEmail = screen.getByPlaceholderText("Email")
    const elementPassword = screen.getByPlaceholderText("Password")

    // assert
    expect(elementEmail).toBeTruthy()
    expect(elementPassword).toBeTruthy()
  })

  it("should be display value in email and password field", async () => {
    // arrange
    const elementEmail = screen.getByPlaceholderText("Email")
    const elementPassword = screen.getByPlaceholderText("Password")

    // act
    await user.type(elementEmail, email)
    await user.type(elementPassword, password)

    // assert
    // @ts-ignore
    expect(elementEmail.value).toBe(email)
    // @ts-ignore
    expect(elementPassword.value).toBe(password)
  })

  it("should be render signIn button", async () => {
    // arrange

    // act
    const element = screen.getByRole("button", {
      name: /sign in/i,
    })

    // assert
    expect(element).toBeTruthy()
  })

  it("should be emit submit", async () => {
    // arrange
    const elementEmail = screen.getByPlaceholderText("Email")
    const elementPassword = screen.getByPlaceholderText("Password")
    const element = screen.getByRole("button", {
      name: /sign in/i,
    })
    await user.type(elementEmail, email)
    await user.type(elementPassword, password)

    // act
    await user.click(element)

    // assert
    expect(onSubmit).toBeCalledTimes(1)
  })
})
