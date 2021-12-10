import React, { Component } from "react";
import Upload from "@/components/Upload/Upload.jsx";
import { Form, Table, Input, Space, Image, Button, Modal } from "antd";
import { EyeOutlined } from "@ant-design/icons";
const { TextArea } = Input;
const layout = {
  labelCol: {
    span: 2,
  },
  wrapperCol: {
    span: 22,
  },
};
const tailLayout = {
  wrapperCol: {
    offset: 10,
    span: 14,
  },
};

class business_datail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      columns: [
        {
          title: "Name",
          dataIndex: "name",
          key: "name",
        },
        {
          title: "Age",
          dataIndex: "age",
          key: "age",
        },
        {
          title: "Address",
          dataIndex: "address",
          key: "address",
        },
      ],
      data: [
        {
          key: "1",
          name: "John Brown",
          age: 32,
          address: "New York No. 1 Lake Park",
        },
        {
          key: "2",
          name: "Jim Green",
          age: 42,
          address: "London No. 1 Lake Park",
        },
        {
          key: "3",
          name: "Joe Black",
          age: 32,
          address: "Sidney No. 1 Lake Park",
        },
      ],
      value: "aaaa",
      form: {
        account: "",
        pass: "",
        company_name: "",
        info: "",
        phone: "",
      },
      name: this.props.location.state.type === 1 ? "用户" : "客户",
      kehuModalShow: false,
      modalTitle: "审核通过",
      loading: false,
    };
  }
  formRef = React.createRef();
  componentDidMount() {
    if (this.props.location.state.type) {
      console.log(this.props.location.state.type);
    }

    this.formRef.current.setFieldsValue({
      account: "张三",
      pass: "123456",
      company_name: "四川",
      info: "李四",
      phone: "17336867848",
    });
  }
  // 上传列表
  upload_list = (list) => {
    console.log(list, 333);
  };
  onFinish = (values) => {
    console.log(values);
    Object.assign(this.state.form, this.state.form, values);
    this.setState({ modalTitle: "审核通过" });
    this.setState({ kehuModalShow: true });
  };
  onReset = (index) => {
    if (index === 1) {
      this.props.history.push({
        pathname: "/Home/productionOrder",
        state: { type: 1 },
      });
    } else {
      this.setState({ modalTitle: "审核不通过" });
      this.setState({ kehuModalShow: true });
    }
  };
  handleOk = () => {
    this.setState({ loading: true });
    if (this.state.modalTitle === "审核通过") {
    } else {
    }
    setTimeout(() => {
      this.setState({ loading: false });
      this.setState({ kehuModalShow: false });
    }, 1000);
  };
  handleCancel = () => {
    this.setState({ kehuModalShow: false });
  };
  render() {
    return (
      <div className="business">
        <Form
          {...layout}
          ref={this.formRef}
          name="control-ref"
          onFinish={this.onFinish}
        >
          <Form.Item name="account" label={this.state.name + "姓名"}>
            <Input disabled style={{ width: 380 }} />
          </Form.Item>
          <Form.Item name="phone" label={this.state.name + "电话"}>
            <Input disabled style={{ width: 380 }} />
          </Form.Item>
          <Form.Item name="company_name" label={this.state.name + "地址"}>
            <TextArea disabled rows={2} style={{ width: 380 }} />
          </Form.Item>
          <Form.Item label="图纸">
            {this.props.location.state.type === 2 ? (
              <div style={{ width: 460 }}>
                <Upload upload_list={this.upload_list} />
              </div>
            ) : (
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
            )}
          </Form.Item>
          <Form.Item>
            <Table
              style={{ paddingLeft: 56 }}
              columns={this.state.columns}
              dataSource={this.state.data}
            />
          </Form.Item>
          {this.props.location.state.type === 2 ? (
            <Form.Item name="info" label="审核信息">
              <Input disabled style={{ width: 380 }} />
            </Form.Item>
          ) : null}

          {this.props.location.state.type === 2 ? (
            <Form.Item {...tailLayout}>
              <Space size="middle">
                <Button
                  htmlType="button"
                  onClick={() => {
                    this.onReset(1);
                  }}
                >
                  取消
                </Button>
                <Button type="primary" htmlType="submit">
                  审核通过
                </Button>
                <Button
                  type="primary"
                  htmlType="button"
                  onClick={() => {
                    this.onReset(2);
                  }}
                >
                  审核不通过
                </Button>
              </Space>
            </Form.Item>
          ) : (
            <Form.Item {...tailLayout}>
              <Space size="middle">
                <Button
                  htmlType="button"
                  onClick={() => {
                    this.onReset(1);
                  }}
                >
                  取消
                </Button>
              </Space>
            </Form.Item>
          )}
        </Form>
        <Modal
          title={this.state.modalTitle}
          visible={this.state.kehuModalShow}
          onCancel={this.handleCancel}
          footer={null}
        >
          {this.state.modalTitle === "审核通过" ? (
            <div style={{ padding: "30px 0" }} className="justify-center">
              确认审核通过该订单吗？
            </div>
          ) : (
            <div style={{ padding: "30px 0" }}>
              <TextArea
                placeholder="请输入不通过原因"
                rows={4}
                maxLength={200}
                showCount
                onChange={this.onChange}
              />
            </div>
          )}
          <div className="justify-center">
            <Button
              style={{ marginRight: "10px" }}
              onClick={() => this.setState({ kehuModalShow: false })}
            >
              取消
            </Button>
            <Button
              type="primary"
              onClick={this.handleOk}
              loading={this.state.loading}
            >
              确定
            </Button>
          </div>
        </Modal>
      </div>
    );
  }
}

export default business_datail;
