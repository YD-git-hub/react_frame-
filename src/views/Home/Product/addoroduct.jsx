import React, { Component } from "react";
import Upload from "@/components/Upload/Upload.jsx";
import { Button, Input, Form, Select, Switch, Image } from "antd";
import { EyeOutlined } from "@ant-design/icons";
import "./index.less";
const { Option } = Select;
const layout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 2 },
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 16 },
  },
};
export default class addoroduct extends Component {
  formRef = React.createRef();
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      switch: "1",
      options: [
        {
          value: "黄金糕",
          label: "黄金糕",
        },
        {
          value: "双皮奶",
          label: "双皮奶",
        },
      ],
    };
  }
  // 上传列表
  upload_list = (list) => {
    console.log(list, 333);
  };
  render() {
    return (
      <div className="addoroduct">
        <h3>添加产品</h3>
        <div className="form">
          <Form
            {...layout}
            ref={this.formRef}
            onFinish={this.setVisible}
            autoComplete="off"
          >
            <Form.Item
              label="产品名称"
              name="name"
              rules={[{ required: true, message: "请输入产品名称!" }]}
            >
              <Input placeholder="请输入产品名称" />
            </Form.Item>
            <Form.Item
              name="type"
              label="产品类型"
              rules={[{ required: true, message: "请选择产品类型!" }]}
            >
              <Select
                placeholder="请选择产品类型"
                allowClear
                style={{ width: 320 }}
              >
                {this.state.options.map((el, index) => (
                  <Option key={index} value={el.value}>
                    {el.value}
                  </Option>
                ))}
              </Select>
            </Form.Item>
            <Form.Item
              name="gender"
              label="规格"
              rules={[{ required: true, message: "请选择规格!" }]}
            >
              <Select
                placeholder="请选择规格"
                allowClear
                style={{ width: 320 }}
              >
                {this.state.options.map((el, index) => (
                  <Option key={index} value={el.value}>
                    {el.value}
                  </Option>
                ))}
              </Select>
            </Form.Item>
            <Form.Item
              name="switch"
              label="规格"
              valuePropName="checked"
              rules={[{ required: true, message: "请选择规格!" }]}
            >
              <Switch size="small" />
            </Form.Item>
            <Form.Item
              label="报关单"
              rules={[{ required: true, message: "请选择营业执照" }]}
            >
              {this.props.location.state.type === 2 ? (
                <Image
                  width={100}
                  src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
                  preview={{
                    mask: (
                      <div>
                        <EyeOutlined />
                        <span>预览</span>
                      </div>
                    ),
                  }}
                />
              ) : (
                <Upload upload_list={this.upload_list} />
              )}
              <span style={{ color: "#A9AFB5", fontSize: "12px" }}>
                注：图片尺寸800*600，不超过1M
              </span>
            </Form.Item>
            <Form.Item
              name="aa"
              label="质检报告"
              rules={[{ required: true, message: "请选择质检报告" }]}
            >
              <Form.Item
                rules={[{ required: true, message: "请选择质检报告" }]}
              >
                {this.props.location.state.type === 2 ? (
                  <Image
                    width={100}
                    src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
                    preview={{
                      mask: (
                        <div>
                          <EyeOutlined />
                          <span>预览</span>
                        </div>
                      ),
                    }}
                  />
                ) : (
                  <Upload upload_list={this.upload_list} />
                )}
                <span style={{ color: "#A9AFB5", fontSize: "12px" }}>
                  注：图片尺寸800*600，不超过1M
                </span>
              </Form.Item>
            </Form.Item>
            <Form.Item wrapperCol={{ offset: 0, span: 8 }}>
              <div className="ModalButton justify-start">
                <Button
                  style={{ marginRight: "10px" }}
                  onClick={this.handleCancel}
                >
                  取消
                </Button>
                <Button
                  type="primary"
                  htmlType="submit"
                  loading={this.state.loading}
                >
                  确定
                </Button>
              </div>
            </Form.Item>
          </Form>
        </div>
      </div>
    );
  }
}
