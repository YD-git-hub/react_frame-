import React, { Component } from "react";
// import { Link } from "react-router-dom";
import { Button,Table } from 'element-react';
export default class index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      columns: [
        {
          label: "日期",
          prop: "date",
          fixed: "left",
          align: 'center'
        },
        {
          label: "姓名",
          prop: "name",
          align: 'center'
        },
        {
          label: "省份",
          prop: "province",
          align: 'center'
        },
        {
          label: "地址",
          prop: "address",
          align: 'center'
        },
        {
          label: "邮编",
          prop: "zip",
          align: 'center'
        },
        {
          label: "操作",
          prop: "zip",
          fixed: "right",
          width: 100,
          render: () => {
            return (
              <span>
                <Button type="text" size="small">
                  查看
                </Button>
                <Button type="text" size="small">
                  编辑
                </Button>
              </span>
            );
          },
        },
      ],
      data: [
        {
          date: "2016-05-02",
          name: "王小虎",
          province: "上海",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1518 弄",
          zip: 200333,
        },
        {
          date: "2016-05-02",
          name: "王小虎",
          province: "上海",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1518 弄",
          zip: 200333,
        },
        {
          date: "2016-05-02",
          name: "王小虎",
          province: "上海",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1518 弄",
          zip: 200333,
        },
        {
          date: "2016-05-02",
          name: "王小虎",
          province: "上海",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1518 弄",
          zip: 200333,
        },
        {
          date: "2016-05-02",
          name: "王小虎",
          province: "上海",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1518 弄",
          zip: 200333,
        },
      ],
    };
  }
  fn = () => {
    // this.setState({ccc:this.state.ccc+1})
    console.log(111);
  };
  render() {
    return <div className="home_index">
      <Table
      style={{width: '100%'}}
      columns={this.state.columns}
      data={this.state.data}
      border={true}
    />
    </div>;
  }
}
