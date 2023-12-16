import { LockOutlined, UserOutlined } from "@ant-design/icons"
import { Button, Form, Input, Space, Typography } from "antd"
import Link from "next/link"
import { password } from "@/domain/Sign/validations/password"
import { email } from "@/domain/Sign/validations/email"

const { Text } = Typography

interface IProps {
  onSubmit(value: ICredential): void
  hrefToggleForm: string
  pending: boolean
}

interface ICredential {
  email: string
  password: string
}

type TField = Partial<ICredential>

export function UIFormSignIn(props: IProps) {
  const btnSignUpPending = props.pending
  const btnSignWithGoogleDisabled = props.pending

  return (
    <Form
      disabled={props.pending}
      name="form-sign-in"
      onFinish={props.onSubmit}
    >
      <Form.Item<TField> hasFeedback rules={email} name="email">
        <Input prefix={<UserOutlined />} type="email" placeholder="Email" />
      </Form.Item>
      <Form.Item<TField> hasFeedback rules={password} name="password">
        <Input
          prefix={<LockOutlined />}
          type="password"
          placeholder="Password"
        />
      </Form.Item>
      <Form.Item>
        <Space>
          <Button type="primary" htmlType="submit" loading={btnSignUpPending}>
            Sign in
          </Button>

          <Button
            type="text"
            htmlType="submit"
            disabled={btnSignWithGoogleDisabled}
          >
            <Text type="secondary">Sign with Google</Text>
          </Button>

          <span>Or</span>

          <Link href={props.hrefToggleForm}>Sign up</Link>
        </Space>
      </Form.Item>
    </Form>
  )
}
