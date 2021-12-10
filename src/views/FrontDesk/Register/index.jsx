import React, { Component } from "react";
import "./index.less";
import { Form, Input, Button, Checkbox, Select, Row, Col } from "antd";
const { Option } = Select;
export default class Register extends Component {
  constructor(props) {
    super(props);

    this.state = {
      form: {
        username: "",
        pass: "",
        password: "",
        phone: "",
        code: "",
      },
    };
  }
  prefixSelector = (
    <Form.Item name="prefix" noStyle>
      <Select style={{ width: 70 }}>
        <Option value="86">+86</Option>
        <Option value="87">+87</Option>
      </Select>
    </Form.Item>
  );
  tailFormItemLayout = {
    wrapperCol: {
      xs: {
        span: 24,
        offset: 0,
      },
      sm: {
        span: 16,
        offset: 8,
      },
    },
  };
  //  表单
  onFinish = (value) => {
    console.log(value);
    this.props.history.push('/enterprise');
  };

  // onFinishFailed = () => {
  //   console.log("Failed:");
  // };
  render() {
    return (
      <div className="register">
        <div className="header justify-between">
          <div className="header_left">枫鸟智能溯源防伪平台</div>
          <div className="header_right">服务热线：XXXXXXXXXX</div>
        </div>
        <div className="content justify-center">
          <div className="conten_item">
            <h3>注册账号</h3>
            <div className="form">
              <Form
                initialValues={{ remember: true, prefix: "86" }}
                onFinish={this.onFinish}
                // onFinishFailed={this.onFinishFailed}
                autoComplete="off"
                name="register"
              >
                <Form.Item
                  name="username"
                  rules={[{ required: true, message: "请输入账号" }]}
                >
                  <Input placeholder="请输入账号" />
                </Form.Item>
                <Form.Item
                  name="password"
                  rules={[{ required: true, message: "请输入密码" }]}
                >
                  <Input.Password placeholder="请输入密码" />
                </Form.Item>
                <Form.Item
                  name="confirm"
                  dependencies={["password"]}
                  hasFeedback
                  rules={[
                    {
                      required: true,
                      message: "请确认您的密码!",
                    },
                    ({ getFieldValue }) => ({
                      validator(_, value) {
                        if (!value || getFieldValue("password") === value) {
                          return Promise.resolve();
                        }
                        return Promise.reject(
                          new Error("您输入的两个密码不匹配!")
                        );
                      },
                    }),
                  ]}
                >
                  <Input.Password placeholder="请确认密码" />
                </Form.Item>
                <Form.Item
                  name="phone"
                  rules={[
                    {
                      required: true,
                      message: "请输入您的手机号码!",
                    },
                  ]}
                >
                  <Input
                    placeholder="请输入您的手机号码"
                    addonBefore={this.prefixSelector}
                    style={{ width: "100%" }}
                  />
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
                      <Button>发送验证码</Button>
                    </Col>
                  </Row>
                </Form.Item>
                <Form.Item>
                  <Button type="primary" htmlType="submit">
                    同意条款并注册
                  </Button>
                </Form.Item>
                <Form.Item
                  name="agreement"
                  valuePropName="checked"
                  rules={[
                    {
                      validator: (_, value) =>
                        value
                          ? Promise.resolve()
                          : Promise.reject(
                              new Error("应该接受协议")
                            ),
                    },
                  ]}
                  {...this.tailFormItemLayout}
                >
                  <Checkbox>
                    《<span>枫鸟智能溯源防伪平台协议</span>》
                  </Checkbox>
                </Form.Item>
              </Form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
