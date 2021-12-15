import React, { Component } from "react";
import "./account_index.less";
import { Button, Form, Input, Table, Pagination, Modal, Radio } from "antd";
import { EditOutlined } from "@ant-design/icons";
const { Column } = Table;
export default class index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      columns: [
        {
          label: "时间",
          prop: "date",
          align: "center",
        },
        {
          label: "金额",
          prop: "name",
          align: "center",
        },
        {
          label: "方式",
          prop: "province",
          align: "center",
        },
        {
          label: "类型",
          prop: "address",
          align: "center",
        },
        {
          label: "状态",
          prop: "zip",
          align: "center",
        },
      ],
      // data: [
      //   {
      //     date: "2016-05-02",
      //     name: "1000",
      //     province: "支付宝",
      //     address: "提现",
      //     zip: "成功",
      //   },
      //   {
      //     date: "2016-05-02",
      //     name: "1000",
      //     province: "支付宝",
      //     address: "提现",
      //     zip: "成功",
      //   },
      //   {
      //     date: "2016-05-02",
      //     name: "1000",
      //     province: "支付宝",
      //     address: "提现",
      //     zip: "成功",
      //   },
      // ],
      data: [
        {
          key: "1",
          firstName: "John",
          lastName: "Brown",
          age: 32,
          address: "New York No. 1 Lake Park",
          tags: ["nice", "developer"],
        },
        {
          key: "2",
          firstName: "Jim",
          lastName: "Green",
          age: 42,
          address: "London No. 1 Lake Park",
          tags: ["loser"],
        },
        {
          key: "3",
          firstName: "Joe",
          lastName: "Black",
          age: 32,
          address: "Sidney No. 1 Lake Park",
          tags: ["cool", "teacher"],
        },
      ],
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
      value: "通过",
      openModal: false,
      rechargeModal: false,
      Withdrawal: false,
      loading: false,
      qrCode: false,
    };
  }
  revisePass = () => {
    console.log(222);
    this.setState({ openModal: true });
  };
  onpageSize = (page) => {
    console.log(page);
  };
  //   关闭按钮
  handleCancel = () => {
    this.setState({ openModal: false });
    this.setState({ rechargeModal: false });
    this.setState({ Withdrawal: false });
  };
  // 修改密码
  onFinish = (type, item) => {
    this.setState({ loading: true });
    this.setState({ qrCode: true });
    setTimeout(() => {
      this.setState({ loading: false });
      // this.setState({ rechargeModal: false });
      this.setState({ openModal: false });
    }, 2000);
    switch (type) {
      case "price":
        console.log("充值", item);
        break;
      case "Withdrawal":
        console.log("提现", item);
        break;
      default:
        console.log("密码", item);
        break;
    }
  };
  render() {
    return (
      <div className="account_index">
        <div className="account_header">
          <Button
            type="primary"
            style={{ marginRight: "10px" }}
            onClick={() => this.setState({ rechargeModal: true })}
          >
            立即充值
          </Button>
          <Button
            type="primary"
            onClick={() => this.setState({ Withdrawal: true })}
          >
            立即提现
          </Button>
        </div>
        <div className="account_info">
          <h3>账户信息</h3>
          <Form
            layout="vertical"
            name="formData"
            className="items-center justify-between formInput"
          >
            <Form.Item label="账户名称" name="username">
              <Input disabled />
            </Form.Item>
            <Form.Item label="账户余额" name="username">
              <Input disabled />
            </Form.Item>
            <Form.Item label="登录账号" name="username">
              <Input disabled />
            </Form.Item>
            <Form.Item label="登录密码" className="items-center">
              <Input type="password" value="1212" disabled />
              <EditOutlined
                className="el-icon-edit editor-icon"
                onClick={this.revisePass}
              />
            </Form.Item>
          </Form>
        </div>
        <h3>金额记录</h3>
        <div className="table_info">
          <Table dataSource={this.state.data} align="center" bordered>
            <Column title="时间" dataIndex="lastName" key="lastName" />
            <Column title="金额" dataIndex="age" key="age" />
            <Column title="方式" dataIndex="firstName" key="firstName" />
            <Column title="类型" dataIndex="address" key="address" />
            <Column title="状态" dataIndex="key" key="key" />
          </Table>
          <div className="justify-center Pagination">
            <Pagination
              defaultCurrent={1}
              total={50}
              onChange={this.onpageSize}
            />
          </div>
        </div>
        <Modal
          title="修改密码"
          visible={this.state.openModal}
          onCancel={this.handleCancel}
          footer={null}
        >
          <Form
            labelCol={{ span: 4 }}
            wrapperCol={{ span: 16 }}
            autoComplete="off"
            onFinish={(item) => this.onFinish("pass", item)}
          >
            <Form.Item
              label="新密码"
              name="pass"
              placeholder="请输入新密码"
              rules={[{ required: true, message: "请输入新密码！" }]}
            >
              <Input />
            </Form.Item>
            <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
              <Button
                style={{ marginRight: "10px" }}
                onClick={() => this.setState({ openModal: false })}
              >
                取消
              </Button>
              <Button
                loading={this.state.loading}
                type="primary"
                htmlType="submit"
              >
                确定
              </Button>
            </Form.Item>
          </Form>
        </Modal>
        <Modal
          title="修改密码"
          visible={this.state.rechargeModal}
          onCancel={this.handleCancel}
          footer={null}
        >
          {this.state.qrCode ? (
            <div>
              <img src="../../../assets/img/react.png" alt="" />
              <p className="justify-center">扫描微信/支付宝二维码进行付款</p>
            </div>
          ) : (
            <Form
              labelCol={{ span: 4 }}
              wrapperCol={{ span: 16 }}
              autoComplete="off"
              onFinish={(item) => this.onFinish("price", item)}
            >
              <Form.Item
                label="充值金额"
                name="price"
                placeholder="请输入金额"
                rules={[{ required: true, message: "请输入金额！" }]}
              >
                <Input />
              </Form.Item>
              <Form.Item
                label="充值方式"
                name="Radio"
                rules={[{ required: true, message: "请选择充值方式！" }]}
              >
                <Radio.Group className="justify-between">
                  <Radio value="WX">微信</Radio>
                  <Radio value="Alipay">支付宝</Radio>
                </Radio.Group>
              </Form.Item>
              <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                <Button
                  style={{ marginRight: "10px" }}
                  onClick={() => this.setState({ rechargeModal: false })}
                >
                  取消
                </Button>
                <Button
                  loading={this.state.loading}
                  type="primary"
                  htmlType="submit"
                >
                  立即充值
                </Button>
              </Form.Item>
            </Form>
          )}
        </Modal>
        <Modal
          title="修改密码"
          visible={this.state.Withdrawal}
          onCancel={this.handleCancel}
          footer={null}
        >
          <Form
            labelCol={{ span: 4 }}
            wrapperCol={{ span: 16 }}
            autoComplete="off"
            onFinish={(item) => this.onFinish("Withdrawal", item)}
          >
            <Form.Item
              label="提现金额"
              name="price"
              placeholder="请输入金额"
              rules={[{ required: true, message: "请输入金额！" }]}
            >
              <Input />
            </Form.Item>
            <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
              <Button
                style={{ marginRight: "10px" }}
                onClick={() => this.setState({ openModal: false })}
              >
                取消
              </Button>
              <Button
                loading={this.state.loading}
                type="primary"
                htmlType="submit"
              >
                确定
              </Button>
            </Form.Item>
          </Form>
        </Modal>
      </div>
    );
  }
}
