import { LockOutlined, UserOutlined } from "@ant-design/icons"
import { Button, Form, Input, Space } from "antd"
import Link from "next/link"

interface IProps {
  onSubmit(value: any): void
  hrefToggleForm: string
}

export function UIFormSignIn(props: IProps) {
  return (
    <Form name="form-sign-in" onFinish={props.onSubmit}>
      <Form.Item name="email">
        <Input prefix={<UserOutlined />} type="email" placeholder="Email" />
      </Form.Item>
      <Form.Item name="password">
        <Input
          prefix={<LockOutlined />}
          type="password"
          placeholder="Password"
        />
      </Form.Item>
      <Form.Item>
        <Space>
          <Button type="primary" htmlType="submit">
            Sign in
          </Button>

          <span>Or</span>

          <Link href={props.hrefToggleForm}>Sign up</Link>
        </Space>
      </Form.Item>
    </Form>
  )
}
