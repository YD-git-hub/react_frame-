import React, { Component } from "react";
import { Form, Table, Input, Image,PageHeader} from "antd";
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
class Order_datail extends Component {
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
        company_type: "",
        linkman: "",
        phone: "",
      },
    };
  }
  formRef = React.createRef();
  componentDidMount() {
  }
  // 上传列表
  upload_list = (list) => {
    console.log(list, 333);
  };
  onFinish = (values) => {
    console.log(values,1);
  };
  onReset = () => {
    this.formRef.current.resetFields();
  };
  render() {
    return (
      <div className="business">
        <PageHeader
          className="site-page-header"
          onBack={() => this.props.history.go(-1)}
          title="返回"
        />
        <Form
          {...layout}
          ref={this.formRef}
          name="control-ref"
          onFinish={this.onFinish}
        >
          <Form.Item
            name="account"
            label="客户姓名"
            rules={[
              {
                required: true,
                message: "请输入客户姓名",
              },
            ]}
          >
            <Input placeholder="请输入客户姓名" style={{width:380}} />
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
            <Input placeholder="请输入联系电话" style={{width:380}} />
          </Form.Item>
          <Form.Item
            name="company_name"
            label="客户地址"
            rules={[
              {
                required: true,
                message: "请输入客户地址",
              },
            ]}
          >
            <TextArea rows={2} style={{width:380}} />
          </Form.Item>
          <Form.Item label="图纸">
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
          </Form.Item>
          <Form.Item label="原材料">
          </Form.Item>
          <Form.Item>
            <Table
              style={{ paddingLeft: 56 }}
              columns={this.state.columns}
              dataSource={this.state.data}
            />
          </Form.Item>
        </Form>
      </div>
    );
  }
}

export default Order_datail;
