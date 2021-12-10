import React, { Component } from "react";
// import { Link } from "react-router-dom";
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
  Divider,
} from "antd";
const { RangePicker } = DatePicker;
export default class ClientMd extends Component {
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
          title: "创建时间",
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
          title: "客户地址",
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
                编辑
              </Button>
              <Button
                size="small"
                type="link"
                danger
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
       console.log('编辑')
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
  onSelectChange =(selectedRowKeys,selectedRows)=> {
    let [row]=selectedRows;
    let pitchradio=row.name;
    this.props.kehupitchradio(pitchradio)
  };
  render() {
    const rowSelection = {
      onChange: this.onSelectChange,
      type:'radio'
    }
    return (
      <div className="business">
        {
          this.props.Selection===true ? null : <div>
            <Space size="middle">
                <Button>导入客户</Button>
                <Button type="primary">导出模板</Button>
            </Space>
            <Divider />
          </div>
        }
        <ul className="business_input flex-row justify-between">
          <li className="ul_li items-center">
            <span>客户名称</span>
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
        <Button type="primary" style={{ marginTop: "16px" }}>
          新增客户
        </Button>
        <div className="business_table">
          <Table rowSelection={this.props.Selection===true ? {...rowSelection} : '' } columns={this.state.columns} dataSource={this.state.data} />
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
