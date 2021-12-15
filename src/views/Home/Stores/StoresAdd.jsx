import React, { Component } from "react";
import Upload from "@/components/Upload/Upload.jsx";
import cityOptions from "@/utils/areadata.js"
import { Form, Input, Button, Cascader, Space, PageHeader } from "antd";
const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};
const tailLayout = {
  wrapperCol: {
    offset: 8,
    span: 16,
  },
};
class business_datail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      form: {
        account: "",
        pass: "",
        company_name: "",
        company_type: "",
        higher_company_type: "",
        linkman: "",
        phone: "",
      },
    };
  }
  formRef = React.createRef();
  componentDidMount() {
    // this.formRef.current.setFieldsValue({
    //   account: "张三",
    //   pass: "123456",
    //   company_name: "四川",
    //   company_type: "企业",
    //   linkman: "李四",
    //   phone: "17336867848",
    //   company_type1:['zhejiang', 'hangzhou', 'xihu']
    // });
  }
  onFinish = (values) => {
    console.log(values, 1);
  };
  onReset = () => {
    this.formRef.current.resetFields();
  };
  onFill = () => {
    this.formRef.current.setFieldsValue({
      account: "张三",
      pass: "123456",
      company_name: "四川",
      company_type: "企业",
      higher_company_type: "自己",
      linkman: "李四",
      phone: "17336867848",
      company_type1: ["zhejiang", "hangzhou", "xihu"],
    });
  };
  cancel = () => {
    this.props.active("1");
  };
  // 地区
  onCityChange = (value) => {
    console.log(value);
  };
  render() {
    return (
      <div className="business_datail" style={{ padding: "0px 20px" }}>
        <PageHeader
          className="site-page-header"
          onBack={() => this.props.history.go(-1)}
          title="返回"
        />
        <h2>添加生产工厂</h2>
        <Form
          {...layout}
          ref={this.formRef}
          name="control-ref"
          onFinish={this.onFinish}
          layout="vertical"
        >
          <Form.Item
            name="account"
            label="账号"
            rules={[
              {
                required: true,
                message: "请输入账号",
              },
            ]}
          >
            <Input placeholder="请输入账号" />
          </Form.Item>
          <Form.Item
            name="pass"
            label="密码"
            rules={[
              {
                required: true,
                message: "请输入密码",
              },
            ]}
          >
            <Input placeholder="请输入密码" />
          </Form.Item>
          <Form.Item
            name="company_name"
            label="企业名称"
            rules={[
              {
                required: true,
                message: "请输入企业名称",
              },
            ]}
          >
            <Input placeholder="请输入企业名称" />
          </Form.Item>
          <Form.Item
            label="营业执照"
            rules={[
              {
                required: true,
                message: "请选择营业执照",
              },
            ]}
          >
            <Upload />
          </Form.Item>
          <Form.Item
            name="company_type"
            label="企业类型"
            rules={[
              {
                required: true,
                message: "请选择企业类型",
              },
            ]}
          >
            <Input placeholder="请输入企业类型" />
          </Form.Item>
          <Form.Item
            name="higher_company_type"
            label="上级企业"
            rules={[
              {
                required: true,
                message: "请输入上级企业",
              },
            ]}
          >
            <Input placeholder="请输入上级企业" />
          </Form.Item>
          <Form.Item
            name="company_type1"
            label="公司地址"
            rules={[
              {
                required: true,
                message: "请选择公司地址",
              },
            ]}
          >
            <Cascader
              options={cityOptions}
              onChange={this.onCityChange}
              placeholder="请选择公司地址"
            />
          </Form.Item>
          <Form.Item
            name="company_name"
            rules={[
              {
                required: true,
                message: "请输入公司详细地址",
              },
            ]}
          >
            <Input placeholder="请输入公司详细地址" />
          </Form.Item>
          <Form.Item
            name="company_name"
            label="联系人"
            rules={[
              {
                required: true,
                message: "请输入联系人",
              },
            ]}
          >
            <Input placeholder="请输入联系人" />
          </Form.Item>
          <Form.Item
            name="phone"
            label="联系电话"
            rules={[
              {
                required: true,
                message: "请输入联系电话",
              },
            ]}
          >
            <Input placeholder="请输入联系电话" />
          </Form.Item>
          <Form.Item {...tailLayout}>
            <Space size="middle">
              <Button onClick={this.cancel}>取消</Button>
              <Button type="primary" htmlType="submit">
                提交
              </Button>
              <Button htmlType="button" onClick={this.onReset}>
                重置
              </Button>
            </Space>
            <Button type="link" htmlType="button" onClick={this.onFill}>
              格式
            </Button>
          </Form.Item>
        </Form>
      </div>
    );
  }
}

export default business_datail;
