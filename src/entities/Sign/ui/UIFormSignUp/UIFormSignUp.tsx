import { IFormSign, ISignPayload } from "@/entities/Sign"
import { email, password } from "@/entities/Sign/validations"
import { LockOutlined, UserOutlined } from "@ant-design/icons"
import { Button, Form, Input, Space, Typography } from "antd"
import Link from "next/link"

const { Text } = Typography

interface IProps extends IFormSign {
  pending: boolean
}

type TField = Partial<ISignPayload>

export function UIFormSignUp(props: IProps) {
  const btnSignUpPending = props.pending
  const btnSignWithGoogleDisabled = props.pending

  return (
    <Form
      disabled={props.pending}
      name="form-sign-up"
      onFinish={props.onSubmit}
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
          <Button type="primary" htmlType="submit" loading={btnSignUpPending}>
            Sign up
          </Button>

          <Button
            onClick={props.onSignGoogle}
            type="text"
            htmlType="button"
            disabled={btnSignWithGoogleDisabled}
          >
            <Text type="secondary">Sign with Google</Text>
          </Button>

          <span>Or</span>

          <Link href={props.hrefToggleForm}>Sign in</Link>
        </Space>
      </Form.Item>
    </Form>
  )
}
