import React, { Component } from "react";
import { Form, Input, Button, Row, Col } from "antd";
// import { UserOutlined, LockOutlined } from "@ant-design/icons";
export default class Reset extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  Verification = () => {
    console.log(111);
  };
  LoginClick = (value) => {
    this.props.data(value);
  };
  render() {
    return (
      <div>
        <div className="right_item">
          <h3>重置密码</h3>
          <div className="form">
            <Form
              name="normal_login"
              className="login-form"
              initialValues={{ remember: true }}
              onFinish={this.onFinish}
            >
              <Form.Item
                name="phone"
                rules={[{ required: true, message: "请输入手机号!" }]}
              >
                <Input placeholder="请输入手机号" />
              </Form.Item>
              <Form.Item>
                <Row gutter={8}>
                  <Col span={16}>
                    <Form.Item
                      name="captcha"
                      noStyle
                      rules={[
                        {
                          required: true,
                          message: "请输入你得到的验证码!",
                        },
                      ]}
                    >
                      <Input placeholder="请输入验证码" />
                    </Form.Item>
                  </Col>
                  <Col span={8}>
                    <Button onClick={this.Verification}>发送验证码</Button>
                  </Col>
                </Row>
              </Form.Item>
              <Form.Item
                name="password"
                rules={[{ required: true, message: "请输入新密码!" }]}
              >
                <Input type="password" placeholder="请输入新密码" />
              </Form.Item>

              <Form.Item>
                <Button
                  type="primary"
                  htmlType="submit"
                  className="login-form-button"
                >
                  立即重置
                </Button>
              </Form.Item>
              <Form.Item>
                <div className="justify-end">
                  <div className="forgets" onClick={()=>{this.LoginClick(0)}}>
                    去登录
                  </div>
                </div>
              </Form.Item>
            </Form>
          </div>
        </div>
      </div>
    );
  }
}
