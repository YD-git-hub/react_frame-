import React, { Component } from "react";
import { Link } from "react-router-dom";
import "@/less/common.less";
import moment from "moment";
import "moment/locale/zh-cn";
import locale from "antd/es/date-picker/locale/zh_CN";
import {
  Table,
  Space,
  Button,
  Input,
  Pagination,
  DatePicker,
  Select,
} from "antd";
const { RangePicker } = DatePicker;
const { Option } = Select;
export default class index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      columns: [
        {
          title: "序号",
          dataIndex: "key",
          key: "key",
        },
        {
          title: "订单号",
          dataIndex: "name",
          key: "name",
        },
        {
          title: "品牌",
          dataIndex: "age",
          key: "age",
        },
        {
          title: "客户姓名",
          dataIndex: "address",
          key: "address",
        },
        {
          title: "联系电话",
          dataIndex: "address",
          key: "address",
        },
        {
          title: "原材料信息",
          dataIndex: "address",
          key: "address",
        },
        {
          title: "家具投影面积/平方",
          dataIndex: "address",
          key: "address",
        },
        {
          title: "生产工厂",
          dataIndex: "address",
          key: "address",
        },
        {
          title: "创建时间",
          dataIndex: "address",
          key: "address",
        },
        {
          title: "状态",
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
                编辑
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
      value: "jack",
    };
  }
  componentDidMount() {
    console.log(333);
  }
  check(item, id) {
    console.log(item);
    switch (id) {
      case 1:
        this.props.history.push({
          pathname: "/Home/Market_datail",
          state: { type: 1 },
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
            <span>客户姓名</span>
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
            <span>状态</span>
            <Select
              showSearch
              style={{ width: 240 }}
              placeholder="Select a person"
              optionFilterProp="children"
              onChange={this.onChange}
              defaultValue={this.state.value}
            >
              <Option value="jack">Jack</Option>
              <Option value="lucy">Lucy</Option>
              <Option value="tom">Tom</Option>
            </Select>
          </li>
          <li className="ul_li items-center">
            <Space size="middle">
              <Button type="primary">查询</Button>
              <Button>重置</Button>
            </Space>
          </li>
        </ul>
        <Link to={{ pathname: "/Home/Market_datail", state: { type: 2 } }}>
          <Button type="primary" style={{ marginTop: "16px" }}>
            创建订单
          </Button>
        </Link>
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
