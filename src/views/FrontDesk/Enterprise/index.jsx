import React, { Component } from "react";
import "./index.less";
import { Form, Input, Select, Button, Upload, Modal,message } from "antd";
import { PlusOutlined } from "@ant-design/icons";
const { Option } = Select;

// function getBase64(file) {
//   return new Promise((resolve, reject) => {
//     const reader = new FileReader();
//     reader.readAsDataURL(file);
//     reader.onload = () => resolve(reader.result);
//     reader.onerror = (error) => reject(error);
//   });
// }
export default class Enterprise extends Component {
  constructor(props) {
    super(props);

    this.state = {
      previewVisible: false,
      previewImage: "",
      previewTitle: "",
      fileList: [],
    };
  }
  formItemLayout = {
    labelCol: {
      xs: { span: 24 },
      sm: { span: 8 },
    },
    wrapperCol: {
      xs: { span: 24 },
      sm: { span: 16 },
    },
  };
  
  handleCancel = () => this.setState({ previewVisible: false });
  // 点击文件链接或预览图标时的回调
  handlePreview = async (file) => {
    if (!file.url && !file.preview) {
      file.preview = await (file.originFileObj);
    }
    this.setState({
      previewImage: file.url || file.preview,
      previewVisible: true,
      previewTitle:
        file.name || file.url.substring(file.url.lastIndexOf("/") + 1),
    });
  };
  beforeUpload(file) {
    console.log(file);
    const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
    if (!isJpgOrPng) {
      message.error('You can only upload JPG/PNG file!');
    }
    const isLt2M = file.size / 1024 / 1024 < 2;
    if (!isLt2M) {
      message.error('Image must smaller than 2MB!');
    }
    return isJpgOrPng && isLt2M;
  }
  // 上传文件改变时的状态
  handleChange = ({ fileList }) => {
    console.log(fileList);
    this.setState({ fileList });
  }
  //  表单
  onFinish = (value) => {
    console.log(value);
    // this.props.history.push('/enterprise');
  };
  render() {
    const { previewVisible, previewImage, fileList, previewTitle } = this.state;
    const uploadButton = (
      <div>
        <PlusOutlined />
        <div style={{ marginTop: 8 }}>上传图片</div>
      </div>
    );
    return (
      <div className="enterprise">
        <div className="header justify-between">
          <div className="header_left">枫鸟智能溯源防伪平台</div>
          <div className="header_right">服务热线：XXXXXXXXXX</div>
        </div>
        <div className="content justify-center">
          <div className="conten_item">
            <h3>企业信息认证</h3>
            <div className="form">
              <Form
                {...this.formItemLayout}
                name="register"
                onFinish={this.onFinish}
                initialValues={{
                  residence: ["zhejiang", "hangzhou", "xihu"],
                  prefix: "86",
                }}
                scrollToFirstError
              >
                <Form.Item
                  name="email"
                  label="企业名字"
                  rules={[
                    {
                      required: true,
                      message: "请输入企业名字!!",
                    },
                  ]}
                >
                  <Input placeholder="请输入企业名字!" />
                </Form.Item>
                <Form.Item {...this.formItemLayout} label="营业执照">
                  <Upload
                    action="#"
                    listType="picture-card"
                    fileList={fileList}
                    onPreview={this.handlePreview}
                    onChange={this.handleChange}
                    beforeUpload={this.beforeUpload}
                  >
                    {fileList.length >=1 ? null : uploadButton}
                  </Upload>
                  <Modal
                    visible={previewVisible}
                    title={previewTitle}
                    footer={null}
                    onCancel={this.handleCancel}
                  >
                    <img
                      alt="example"
                      style={{ width: "100%" }}
                      src={previewImage}
                    />
                  </Modal>
                </Form.Item>
                <Form.Item
                  name="gender"
                  label="企业类型"
                  rules={[{ required: true, message: "请选择企业类型!" }]}
                >
                  <Select placeholder="请选择企业类型">
                    <Option value="1">品牌</Option>
                    <Option value="2">代理</Option>
                    <Option value="3">压板厂</Option>
                    <Option value="4">门店</Option>
                  </Select>
                </Form.Item>
                <Form.Item
                  name="gender"
                  label="从属品牌"
                  rules={[{ required: true, message: "请选择从属品牌!" }]}
                >
                  <Select placeholder="请选择从属品牌">
                    <Option value="1">品牌</Option>
                    <Option value="2">代理</Option>
                    <Option value="3">压板厂</Option>
                    <Option value="4">门店</Option>
                  </Select>
                </Form.Item>
                <Form.Item
                  name="gender"
                  label="上级企业"
                  rules={[{ required: true, message: "请选择上级企业!" }]}
                >
                  <Select placeholder="请选择上级企业">
                    <Option value="1">品牌</Option>
                    <Option value="2">代理</Option>
                    <Option value="3">压板厂</Option>
                    <Option value="4">门店</Option>
                  </Select>
                </Form.Item>
                <Form.Item
                  name="gender"
                  label="公司地址"
                  rules={[{ required: true, message: "请选择公司地址!" }]}
                >
                  <Select placeholder="请选择公司地址">
                    <Option value="1">品牌</Option>
                    <Option value="2">代理</Option>
                    <Option value="3">压板厂</Option>
                    <Option value="4">门店</Option>
                  </Select>
                </Form.Item>
                <Form.Item
                  name="email"
                  label="详细地址"
                  rules={[
                    {
                      required: true,
                      message: "请输入详细地址!",
                    },
                  ]}
                >
                  <Input placeholder="请输入详细地址!" />
                </Form.Item>
                <Form.Item
                  name="email"
                  label="联系人"
                  rules={[
                    {
                      required: true,
                      message: "请输入联系人姓名!",
                    },
                  ]}
                >
                  <Input placeholder="请输入联系人姓名!" />
                </Form.Item>
                <Form.Item
                  name="email"
                  label="联系电话"
                  rules={[
                    {
                      required: true,
                      message: "请输入联系人电话!",
                    },
                  ]}
                >
                  <Input placeholder="请输入联系人电话!" />
                </Form.Item>
                <Form.Item>
                  <div className="submitBtn">
                    <Button type="primary" htmlType="submit">
                      确定
                    </Button>
                  </div>
                </Form.Item>
              </Form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
