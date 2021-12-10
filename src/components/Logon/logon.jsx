import React, { Component } from "react";
import { Form, Input, Button, Checkbox } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
export default class logon extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  onFinish = (values) => {
    console.log("Received values of form: ", values);
    this.props.history.push("/Home/index");
  };
  forget = (index) => {
    this.props.data(index);
  };
  render() {
    return (
      <div>
        <div className="right_item">
          <h3>登录平台</h3>
          <div className="form">
            <Form
              name="normal_login"
              className="login-form"
              initialValues={{ remember: true }}
              onFinish={this.onFinish}
            >
              <Form.Item
                name="username"
                rules={[{ required: true, message: "请输入账号!" }]}
              >
                <Input
                  prefix={<UserOutlined className="site-form-item-icon" />}
                  placeholder="请输入账号"
                />
              </Form.Item>
              <Form.Item
                name="password"
                rules={[{ required: true, message: "请输入密码!" }]}
              >
                <Input
                  prefix={<LockOutlined className="site-form-item-icon" />}
                  type="password"
                  placeholder="请输入密码"
                />
              </Form.Item>

              <Form.Item>
                <Button
                  type="primary"
                  htmlType="submit"
                  className="login-form-button"
                >
                  立即登录
                </Button>
              </Form.Item>
              <Form.Item>
                <div className="justify-between">
                  <Form.Item name="remember" valuePropName="checked" noStyle>
                    <Checkbox>记住密码</Checkbox>
                  </Form.Item>
                  <div className="forgets" onClick={()=>{this.forget(2)}}>忘记密码</div>
                </div>
              </Form.Item>
            </Form>
          </div>
        </div>
      </div>
    );
  }
}
