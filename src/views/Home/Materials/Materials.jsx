import React, { Component } from "react";
// import { Link } from "react-router-dom";
import "@/less/common.less";
import { Table, Space, Button, Input, Select, Pagination } from "antd";
const { Option } = Select;
export default class Materials extends Component {
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
          title: "品牌名称",
          dataIndex: "name",
          key: "name",
        },
        {
          title: "原材料类型",
          dataIndex: "age",
          key: "age",
        },
        {
          title: "原材料名称",
          dataIndex: "address",
          key: "address",
        },
        {
          title: "规格",
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
      value: "jack",
    };
  }
  componentDidMount() {
    console.log(333);
  }
  onpageSize = (page, pageSize) => {
    console.log(page, pageSize);
  };
  onChange = (value) => {
    console.log(`selected ${value}`);
  };
  onSelectChange =(selectedRowKeys,selectedRows)=> {
    let [row]=selectedRows;
    let pitchradio=row.name;
    this.props.materialspitchradio(pitchradio)
  };
  render() {
    const rowSelection = {
      onChange: this.onSelectChange,
      type:'radio'
    }
    return (
      <div className="business">
        <ul className="business_input flex-row justify-between">
          <li className="ul_li items-center">
            <span>原材料名称</span>
            <Input
              placeholder="请输入内容"
              style={{ width: 240 }}
              defaultValue={this.state.value}
            />
          </li>
          <li className="ul_li items-center">
            <span>品牌名称</span>
            <Input
              placeholder="请输入内容"
              style={{ width: 240 }}
              defaultValue={this.state.value}
            />
          </li>
          {
            this.props.Selection!==true ? <li className="ul_li items-center">
              <span>类型</span>
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
            </li> : null
          }
          <li className="ul_li items-center">
            <Space size="middle">
              <Button type="primary">查询</Button>
              <Button>重置</Button>
            </Space>
          </li>
        </ul>
        <div className="business_table">
          <Table rowSelection={this.props.Selection===true ? {...rowSelection} : '' } columns={this.state.columns} dataSource={this.state.data} />
          <div className="justify-center Pagination">
            <Pagination defaultCurrent={1} total={50} onChange={this.onpageSize} />
          </div>
        </div>
      </div>
    );
  }
}
