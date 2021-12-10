import React, { Component } from "react";
import "./account_index.less";
import { Button, Form, Input, Table, Pagination } from "antd";
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
    };
  }
  revisePass = () => {
    console.log(222);
  };
  onpageSize = (page) => {
    console.log(page);
  };
  render() {
    return (
      <div className="account_index">
        <div className="account_header">
          <Button type="primary">立即提现</Button>
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
          <Table
            dataSource={this.state.data}
            align="center"
            bordered
          >
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
      </div>
    );
  }
}
