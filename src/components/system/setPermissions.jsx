import React, { Component } from "react";
import { Button, Table, Checkbox } from "antd";
const columns = [
  {
    title: "一级",
    dataIndex: "one",
    key: "one",
    render: (tags, e, index) => (
      <Checkbox.Group
        key={index}
        options={tags.arr}
        defaultValue={[tags.active]}
      />
    ),
  },
  {
    title: "二级",
    dataIndex: "two",
    key: "two",
    render: (items) => (
      items.map((tags, i) => {
        if (tags) {
          return (<Checkbox.Group
            key={i}
            options={tags.arrData}
            defaultValue={[tags.active]}
          />)
        } else {
          return ''
        }
      })
    )
  }
];

const data = [
  {
    key: "1",
    one: {
      arr: [{ label: "客户管理", value: "1" }],
      active: ''
    },
    two: []
  },
  {
    key: "2",
    one: {
      arr: [{ label: "销售订单管理", value: "2" }],
      active: '2'
    },
    two: [
      {
        arrData: [{ label: "创建订单", value: "3" }],
        active: '3'
      },
      {
        arrData: [{ label: "订单管理", value: "4" }],
        active: '4'
      }
    ],
  },
  {
    key: "3",
    one: {
      arr: [{ label: "原材料管理", value: "1" }],
      active: ''
    },
    two: []
  },
  {
    key: "4",
    one: {
      arr: [{ label: "生产工厂管理", value: "1" }],
      active: ''
    },
    two: []
  },
  {
    key: "5",
    one: {
      arr: [{ label: "CRM管理", value: "1" }],
      active: ''
    },
    two: [
      {
        arrData: [{ label: "业务员管理", value: "3" }],
        active: '2'
      },
      {
        arrData: [{ label: "销售数据", value: "4" }],
        active: '4'
      }
    ],
  },
  {
    key: "6",
    one: {
      arr: [{ label: "账户管理", value: "1" }],
      active: ''
    },
    two: []
  },
  {
    key: "7",
    one: {
      arr: [{ label: "系统设置", value: "1" }],
      active: ''
    },
    two: [
      {
        arrData: [{ label: "消息模板", value: "3" }],
        active: '2'
      },
      {
        arrData: [{ label: "角色权限管理", value: "4" }],
        active: '4'
      },
      {
        arrData: [{ label: "操作记录", value: "4" }],
        active: '4'
      }
    ],
  }
];
export default class setPermissions extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {},
      arr: [],
    };
  }
  componentDidMount() {
    Object.assign(this.state.data, {}, JSON.parse(this.props.datas));
  }
  back = () => {
    this.props.setBack([]);
  };
  confirm = () => {
    this.setState({ arr: [] });
    this.setState({ arr: [] }, () => {
      let arr = this.state.arr;
      let is = document.getElementsByTagName("input");
      for (let i = 0, o = null; (o = is[i]); i++) {
        if (o.type === "checkbox" && o.checked) {
          arr.push(o.value);
        }
      }
      this.setState({ arr: [...arr] });
      console.log(this.state.arr);
    });
  };
  render() {
    return (
      <div>
        {/* <Button type="link" onClick={this.back}>
          返回
        </Button> */}
        <p>角色名称：管理员</p>
        <p>设置权限</p>
        <div>
          <p>一级</p>
          <Table columns={columns} dataSource={data} />
          <div className="justify-center" style={{ marginTop: "20px" }}>
            <Button onClick={this.back} style={{ marginRight: "10px" }}>
              取消
            </Button>
            <Button type="primary" onClick={this.confirm}>
              确认
            </Button>
          </div>
        </div>
      </div>
    );
  }
}
