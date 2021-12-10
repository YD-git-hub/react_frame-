import React, { Component } from "react";
// import { Link } from "react-router-dom";
import "@/less/common.less";
import moment from "moment";
import "moment/locale/zh-cn";
import locale from "antd/es/date-picker/locale/zh_CN";
import { Table, Space, Button, Input, Pagination, DatePicker } from "antd";
const { RangePicker } = DatePicker;
export default class index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      columns: [
        {
          title:"序号",
          dataIndex:"key",
          key:"key"
        },
        {
          title: "企业名称",
          dataIndex: "age",
          key: "age",
        },
        {
          title: "账户余额",
          dataIndex: "address",
          key: "address",
        },
        {
          title: "已充值总额",
          dataIndex: "address",
          key: "address",
        },
        {
          title: "已提现总额",
          dataIndex: "address",
          key: "address",
        },
        {
          title: "操作",
          key: "action",
          render: (text, record) => (
            <Space size="middle">
              <Button
                size="small"
                type="link"
                onClick={() => {
                  return this.check(record, 1);
                }}
              >
                详情
              </Button>
              <Button
                size="small"
                type="link"
                onClick={() => {
                  return this.check(record, 2);
                }}
              >
                删除
              </Button>
            </Space>
          ),
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
      date: [
        moment("2021-01-01", "YYYY-MM-DD"),
        moment("2021-01-01", "YYYY-MM-DD"),
      ],
    };
  }
  componentDidMount() {
    console.log(333);
  }
  check(item, id) {
    console.log(item);
    switch (id) {
      case 1:
        // this.props.history.push("/Home/Common_datail");
        this.props.history.push({
          pathname: "/Home/Common_datail",
          state: { name: "caiwu" },
        });
        break;
      case 2:
        console.log("删除");
        break;
      default:
        console.log(22);
        break;
    }
  }
  onpageSize = (page, pageSize) => {
    console.log(page, pageSize);
  };
  onDete = (moment, dateString) => {
    console.log(moment, dateString);
  };
  render() {
    return (
      <div className="business">
        <ul className="business_input flex-row justify-between">
          <li className="ul_li items-center">
            <span>企业名称</span>
            <Input
              placeholder="请输入内容"
              style={{ width: 240 }}
              defaultValue={this.state.value}
            />
          </li>
          <li className="ul_li items-center">
            <span>选择时间</span>
            <RangePicker
              allowClear
              placeholder={["开始日期", "结束日期"]}
              picker="date"
              locale={locale}
              onChange={this.onDete}
              defaultValue={this.state.date}
            />
          </li>
          <li className="ul_li items-center">
            <Space size="middle">
              <Button type="primary">查询</Button>
              <Button>重置</Button>
            </Space>
          </li>
        </ul>
        <div className="business_table">
          <Table columns={this.state.columns} dataSource={this.state.data} />
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
