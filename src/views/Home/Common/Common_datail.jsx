import React, { Component } from "react";
// import { Link } from "react-router-dom";
import "@/less/common.less";
import moment from 'moment';
import 'moment/locale/zh-cn';
import locale from 'antd/es/date-picker/locale/zh_CN';
import { Table, Button, Pagination,DatePicker,PageHeader} from "antd";
const { RangePicker } = DatePicker;
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
          title: "金额",
          dataIndex: "name",
          key: "name",
        },
        {
          title: "类型",
          dataIndex: "age",
          key: "age",
        },
        {
          title: "时间",
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
      date: [moment('2021-01-01', 'YYYY-MM-DD'),moment('2021-01-01', 'YYYY-MM-DD')],
    };
  };
  componentDidMount() {
    console.log(this.props.location.state.name);
    if(this.props.location.state.name==='kehu'){
      this.setState({
        columns:[
          {
            title: "序号",
            dataIndex: "key",
            key: "key",
          },
          {
            title: "购买时间",
            dataIndex: "name",
            key: "name",
          },
          {
            title: "购买商品",
            dataIndex: "age",
            key: "age",
          },
          {
            title: "门店",
            dataIndex: "address",
            key: "address",
          },
          {
            title: "品牌",
            dataIndex: "address",
            key: "address",
          },
        ]
      })
    }
  };
  onpageSize = (page, pageSize) => {
    console.log(page, pageSize);
  };
  onDete=(moment,dateString)=>{
    console.log(moment,dateString)
  };
  render() {
    return (
      <div className="business">
        <PageHeader
          className="site-page-header"
          onBack={() => this.props.history.go(-1)}
          title="返回"
        />
        <ul className="business_input flex-row j">
          <li className="ul_li items-center">
            <span>选择时间</span>
            <RangePicker allowClear placeholder={["开始日期","结束日期"]} picker="date" locale={locale}  onChange={this.onDete} defaultValue={this.state.date} />
          </li>
          <li className="ul_li items-center">
            <Button type="primary" style={{ marginLeft: "16px" }}>
              查询
            </Button>
            <Button style={{ marginLeft: "16px" }}>重置</Button>
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