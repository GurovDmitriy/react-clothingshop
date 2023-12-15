import { LockOutlined, UserOutlined } from "@ant-design/icons"
import { Button, Form, Input, Space, Typography } from "antd"
import Link from "next/link"
import { email } from "@/domain/Sign/components/SignUp/validations/email"
import { password } from "@/domain/Sign/components/SignUp/validations/password"

const { Text } = Typography

interface IProps {
  onSubmit(value: ICredential): void
  onSubmitFailure(error: any): void
  hrefToggleForm: string
  pending: boolean
}

interface ICredential {
  email: string
  password: string
}

type TField = Partial<ICredential>

export function UIFormSignUp(props: IProps) {
  const btnSignUpPending = props.pending
  const btnSignWithGoogleDisabled = props.pending
  const btnSignUpDisabled = false

  return (
    <Form
      disabled={props.pending}
      name="form-sign-in"
      onFinish={props.onSubmit}
      onFinishFailed={props.onSubmitFailure}
    >
      <Form.Item<TField> name="email" hasFeedback rules={email}>
        <Input prefix={<UserOutlined />} type="email" placeholder="Email" />
      </Form.Item>
      <Form.Item<TField> name="password" hasFeedback rules={password}>
        <Input
          prefix={<LockOutlined />}
          type="password"
          placeholder="Password"
        />
      </Form.Item>
      <Form.Item>
        <Space>
          <Button
            type="primary"
            htmlType="submit"
            loading={btnSignUpPending}
            disabled={btnSignUpDisabled}
          >
            Sign up
          </Button>

          <Button
            type="text"
            htmlType="submit"
            disabled={btnSignWithGoogleDisabled}
          >
            <Text type="secondary">Sign with Google</Text>
          </Button>

          <span>Or</span>

          <Link href="/sign-in">Sign in</Link>
        </Space>
      </Form.Item>
    </Form>
  )
}
