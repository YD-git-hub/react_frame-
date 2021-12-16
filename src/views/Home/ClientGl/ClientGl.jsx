import React, { Component } from "react";
// import { Link } from "react-router-dom";
import "@/less/common.less";
import { Table, Space, Button, Input,Pagination } from "antd";
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
          title: "客户姓名",
          dataIndex: "name",
          key: "name",
        },
        {
          title: "联系方式",
          dataIndex: "age",
          key: "age",
        },
        {
          title: "地址",
          dataIndex: "address",
          key: "address",
        },
        {
          title: "最近购买门店",
          dataIndex: "address",
          key: "address",
        },
        {
          title: "最近购买品牌",
          dataIndex: "address",
          key: "address",
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
      thaName: "jack",
      name:'',
      loadings:false
    };
  }
  componentDidMount() {
    console.log(333);
  }
  onpageSize = (page, pageSize) => {
    console.log(page, pageSize);
  };
  check(item, id) {
    console.log(item);
    switch (id) {
      case 1:
        // this.props.history.push("/Home/Common_datail");
        this.props.history.push({pathname:'/Home/Common_datail',state:{name:'kehu'}});
        break;
      case 2:
        console.log("删除");
        break;
      default:
        console.log(22);
        break;
    }
  }
  onChange = (event) => {
    const target = event.target;
    this.setState({
      [target.name]:target.value,
    })
  };
  searchBtn=()=>{
    console.log(this.state.thaName,this.state.name)
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
    const {thaName,name,loadings}=this.state
    return (
      <div className="business">
        <ul className="business_input flex-row justify-between">
          <li className="ul_li items-center">
            <span>企业名称</span>
            <Input
              placeholder="请输入内容"
              name="thaName"
              style={{ width: 240 }}
              value={thaName}
              onChange={this.onChange}
            />
          </li>
          <li className="ul_li items-center">
            <span>客户名称</span>
            <Input
              placeholder="请输入内容"
              name="name"
              style={{ width: 240 }}
              value={name}
              onChange={this.onChange}
            />
          </li>
          <li className="ul_li items-center">
            <Space size="middle">
              <Button type="primary" onClick={this.searchBtn} loading={loadings}>查询</Button>
              <Button>重置</Button>
            </Space>
          </li>
        </ul>
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
