import React, { Component } from "react";
import "./order.less";
import { Button, Table, Space, Pagination, Select, Input } from "antd";
const { Option } = Select;

export default class role_module extends Component {
  constructor(props) {
    super(props); //level 1=压板厂 2=代理商 3=品牌方
    this.state = {
      columns: [
        {
          title: "序号",
          dataIndex: "key",
        },
        {
          title: "原材料",
          dataIndex: "order",
        },
        {
          title: "上月结余/平方",
          dataIndex: "order",
        },
        {
          title: this.props.level === 1 ? "本月被授权/平方" : "本月授权/平方",
          dataIndex: "order",
        },
        {
          title: "本月使用/平方",
          dataIndex: "order",
        },
        {
          title: "状态",
          dataIndex: "order",
        },
        {
          title: "操作",
          key: "action",
          render: (item) => {
            return (
              <Space size="middle">
                <Button
                  type="link"
                  onClick={() => {
                    this.callback(2, item);
                  }}
                >
                  详情
                </Button>
              </Space>
            );
          },
        },
      ],
      data: [
        {
          key: "1",
          order: "生产工厂2",
        },
        {
          key: "2",
          order: "生产工厂2",
        },
        {
          key: "3",
          order: "生产工厂2",
        },
      ], // table 参数
      options: [
        {
          value: "黄金糕",
          label: "黄金糕",
        },
        {
          value: "双皮奶",
          label: "双皮奶",
        },
      ],
      nameOption: [
        {
          value: "门店一",
        },
        {
          value: "门店二",
        },
      ],
      select: "",
      input: "",
      searchLoading: false,
    };
  }

  componentDidMount() {
    //   console.log(this.props.ac);
  }
  //   查询
  search_btn = () => {
    let data = {};
    data.input = this.state.input;
    data.select = this.state.select;
    this.setState({ searchLoading: true });
    setTimeout(() => {
      this.setState({ searchLoading: false });
    }, 1500);
    console.log(data);
  };
  //   重置
  reset_btn = () => {
    this.setState({ input: "" });
    this.setState({ select: "" });
  };
  //   打开其他页面
  callback = (index, data) => {
    if (index === 1) {
      this.props.active("2"); // 历史月报
    } else {
      if (this.props.level === 1) {
        this.props.active("4", data, "month"); // 查看详情
      } else {
        this.props.active("3", data); // 详情列表
      }
    }
  };
  //   分页监听
  onpageSize = (page) => {
    console.log(page);
  };
  render() {
    return (
      <div className="proList_index">
        <div className="justify-between search">
          <div className="items-center">
            <label className="items-center">
              <span className="items-center">原材料</span>
              <Input
                value={this.state.input}
                onChange={(item) => this.setState({ input: item.target.value })}
                allowClear
                placeholder="请输入"
              />
            </label>
            <label className="items-center">
              <span className="items-center">状态</span>
              <Select
                placeholder="请选择状态"
                value={this.state.select}
                name="role"
                onChange={(item) => this.setState({ select: item })}
              >
                {this.state.options.map((el, index) => (
                  <Option key={index} value={el.value}>
                    {el.value}
                  </Option>
                ))}
              </Select>
            </label>
          </div>
          <div>
            <Button
              type="primary"
              loading={this.state.searchLoading}
              onClick={this.search_btn}
              style={{ margin: "0 10px 10px 0" }}
            >
              查询
            </Button>
            <Button type="primary" onClick={this.reset_btn}>
              重置
            </Button>
          </div>
        </div>
        <div className="add_user">
          <Button
            type="primary"
            danger
            onClick={() => {
              this.callback(1);
            }}
          >
            历史月报
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
