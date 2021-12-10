import React, { Component } from "react";
import "./index.less"
import {
  Button,
  Input,
  PageHeader,
  Table,
  Pagination,
} from "antd";
export default class Clampmes extends Component {
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
          title: "压板厂名称",
          dataIndex: "name",
          key: "name",
        },
        {
          title: "收款金额",
          dataIndex: "phone",
          key: "phone",
        },
        {
          title: "备注",
          dataIndex: "job",
          key: "job",
        },
      ],
      data: [
        {
          key: "1",
          name: "John Brown",
          phone: "187554255652",
          job: "在职",
          moth: "2021-06",
          money: "20000",
        },
        {
          key: "2",
          name: "John Brown",
          phone: "187554255652",
          job: "离职",
          moth: "2021-07",
          money: "20007",
        },
      ],
    };
  }
  // 分页器
  onpageSize = (page, pageSize) => {
    console.log(page, pageSize);
  };
  render() {
    return (
      <div className="clampmes">
        <PageHeader
          className="site-page-header"
          onBack={() => this.props.history.go(-1)}
          title="返回"
        />
        <div className="salesman_header justify-between">
        <div className="justify-start">
            <span>销售姓名:</span>
            <Input placeholder="请输入销售姓名" />
          </div>

          <div className="justify-start">
            <Button type="primary">查询</Button>
            <Button>重置</Button>
          </div>
        </div>
        <div className="table">
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
