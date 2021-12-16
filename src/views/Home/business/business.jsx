import React, { Component } from "react";
import { Link } from "react-router-dom";
import "@/less/common.less";
import { Table, Space, Button, Input, Select, Switch, Pagination } from "antd";
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
          title: "企业名称",
          dataIndex: "name",
          key: "name",
        },
        {
          title: "企业类型",
          dataIndex: "age",
          key: "age",
        },
        {
          title: "开通时间",
          dataIndex: "address",
          key: "address",
        },
        {
          title: "审核人",
          dataIndex: "address",
          key: "address",
        },
        {
          title: "状态",
          dataIndex: "address",
          key: "address",
        },
        {
          title: "启用/禁用",
          key: "action",
          render: (text, record) => <Switch size="small" defaultChecked onChange={(boolean)=>{
            return this.SwitchChange(boolean,record)
          }} />,
        },
        {
          title: "操作",
          key: "action",
          render: (text, record) => (
            <Space size="middle">
              <Button
              size='small'
              type="link"
                onClick={() => {
                  return this.check(record, 1);
                }}
              >
                详情
              </Button>
              <Button
              size='small'
              type="link"
                onClick={() => {
                  return this.check(record, 2);
                }}
              >
                删除
              </Button>
              <Button
              size='small'
              type="link"
                onClick={() => {
                  return this.check(record, 3);
                }}
              >
                审核
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
      name: "jack",
      type:'jack',
      state:'jack',
      loadings:false
    };
  }
  componentDidMount() {
    console.log(333);
  }
  onpageSize = (page, pageSize) => {
    console.log(page, pageSize);
  };
  SwitchChange = (boolean, item) => {
    console.log(boolean, item);
  };
  check(item, id) {
    console.log(item);
    switch (id) {
      case 1:
        this.props.history.push({ pathname: "/Home/business_datail", state: { type: 1 } });
        break;
      case 2:
        console.log("删除");
        break;
      default:
        console.log(22);
        break;
    }
  }
  onChange = (value,type) => {
    this.setState({
      [type]:value
    })
  };
  searchBtn=()=>{
    console.log(this.state.name,this.state.type,this.state.state)
    this.setState({
      loadings:true
    })
    setTimeout(()=>{
      this.setState({
        loadings:false
      })
    },2000)
  }
  render() {
    const {name,type,state,loadings}=this.state
    return (
      <div className="business">
        <ul className="business_input flex-row justify-between">
          <li className="ul_li items-center">
            <span>企业名称</span>
            <Input
              placeholder="请输入内容"
              style={{ width: 240 }}
              value={name}
              onChange={(event)=>{ return this.onChange(event.target.value,'name') }}
            />
          </li>
          <li className="ul_li items-center">
            <span>企业类型</span>
            <Select
              showSearch
              style={{ width: 240 }}
              placeholder="请选择企业类型"
              name="type"
              optionFilterProp="children"
              onChange={(value)=>{ return this.onChange(value,'type') }}
              value={type}
            >
              <Option value="jack">Jack</Option>
              <Option value="lucy">Lucy</Option>
              <Option value="tom">Tom</Option>
            </Select>
          </li>
          <li className="ul_li items-center">
            <span>状态</span>
            <Select
              showSearch
              style={{ width: 240 }}
              placeholder="请选择状态"
              name="state"
              optionFilterProp="children"
              onChange={(value)=>{ return this.onChange(value,'state') }}
              value={state}
            >
              <Option value="jack">Jack</Option>
              <Option value="lucy">Lucy</Option>
              <Option value="tom">Tom</Option>
            </Select>
          </li>
          <li className="ul_li items-center">
            <Space size="middle">
              <Button type="primary" onClick={this.searchBtn} loading={loadings}>查询</Button>
              <Button>重置</Button>
            </Space>
          </li>
        </ul>
        <Link to={{ pathname: "/Home/business_datail", state: { type: 2 } }}>
          <Button type="primary" style={{ marginTop: "16px" }}>
            添加企业
          </Button>
        </Link>
        <div className="business_table">
          <Table columns={this.state.columns} dataSource={this.state.data} />
          <div className="justify-center Pagination">
            <Pagination defaultCurrent={1} total={50} onChange={this.onpageSize} />
          </div>
        </div>
      </div>
    );
  }
}
