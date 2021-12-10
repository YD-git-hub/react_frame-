import React, { Component } from "react";
import "./operation_index.less";
import "moment/locale/zh-cn";
import locale from "antd/es/date-picker/locale/zh_CN";
import { Button, Input, Table, Space, Pagination, DatePicker } from "antd";
const { RangePicker } = DatePicker;
export default class role_module extends Component {
  constructor(props) {
    super(props);
    this.state = {
      columns: [
        {
          title: "序号",
          dataIndex: "key",
        },
        {
          title: "操作时间",
          dataIndex: "name",
          key: "name",
        },
        {
          title: "操作日志",
          dataIndex: "age",
          key: "age",
        },
        {
          title: "操作人姓名",
          dataIndex: "age",
          key: "age",
        },
        {
          title: "操作人角色",
          dataIndex: "age",
          key: "age",
        },
        {
          title: "操作结果",
          dataIndex: "age",
          key: "age",
        },
      ],
      data: [
        {
          key: "1",
          name: "John Brown",
          age: 32,
          address: "New York No. 1 Lake Park",
          tags: ["nice", "developer"],
        },
        {
          key: "2",
          name: "Jim Green",
          age: 42,
          address: "London No. 1 Lake Park",
          tags: ["loser"],
        },
        {
          key: "3",
          name: "Joe Black",
          age: 32,
          address: "Sidney No. 1 Lake Park",
          tags: ["cool", "teacher"],
        },
      ],
      openModal: false,
      searchInput: "",
      time: [],
    };
  }
  // 监听查询内容
  on_change_search = (e) => {
    this.setState({ searchInput: e.target.value });
  };
  // 选择时间
  on_change_time = (value, dateString) => {
    // console.log('Selected Time: ', value);
    const { time } = this.state;
    for (let i = 0; i < dateString.length; i++) {
      time.push(dateString[i]);
    }
    this.setState({ time: [...time] });
  };
  //   查询
  search_btn = () => {
    console.log(this.state.searchInput);
    console.log(this.state.time);
  };
  //   分页监听
  onpageSize = (page) => {
    console.log(page);
  };
  render() {
    return (
      <div className="operation_content">
        <div className="items-center search">
          <Input
            onChange={(event) => this.on_change_search(event)}
            allowClear
            placeholder="请输入"
          ></Input>
          <Space direction="vertical" size={12}>
            <RangePicker
              locale={locale}
              placeholder={["开始日期", "结束日期"]}
              showTime={{ format: "HH:mm:ss" }}
              format="YYYY-MM-DD HH:mm:ss"
              onChange={this.on_change_time}
            />
          </Space>
          ,
          <Button type="primary" onClick={this.search_btn}>
            查询
          </Button>
        </div>
        <div className="table_info">
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
