import React, { Component } from "react";
import "./order.less";
import "moment/locale/zh-cn";
import { InfoCircleTwoTone } from "@ant-design/icons";
import { Button, Table, Space, Pagination, PageHeader, Select } from "antd";
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
          title: this.props.level === 2 ? "压板厂" : "代理商",
          dataIndex: "order",
        },
        {
          title: "上月结余/平方",
          dataIndex: "order",
        },
        {
          title: "当月授权/平方",
          dataIndex: "order",
        },
        {
          title: "当月使用/平方",
          dataIndex: "order",
        },
        {
          title: "当月结余/平方",
          dataIndex: "order",
        },
        {
          title: "本月使用/平方",
          dataIndex: "order",
        },
        {
          title: "状态",
          dataIndex: "order",
          render: (item) => {
            if (item) {
              return (
                <Space size="middle" className="items-center">
                  <InfoCircleTwoTone
                    twoToneColor="#FF4444"
                    style={{ fontSize: "20px" }}
                  />
                  <span>123213</span>
                </Space>
              );
            }
          },
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
                    this.checkDetail(item);
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
      option: [
        {
          value: "黄金糕",
          label: "黄金糕",
        },
        {
          value: "双皮奶",
          label: "双皮奶",
        },
      ],
      input: "",
      searchLoading: false,
      inputLabel: this.props.level === 2 ? "压板厂" : "代理商",
    };
  }
  componentDidMount() {}
  //   查看详情
  checkDetail = (data) => {
    this.props.active("4", data, "month"); // 查看详情
  };
  //   查询
  search_btn = () => {
    let data = {};
    data.input = this.state.input;
    this.setState({ searchLoading: true });
    setTimeout(() => {
      this.setState({ searchLoading: false });
    }, 1500);
    console.log(data);
  };
  //   重置
  reset_btn = () => {
    this.setState({ input: "" });
  };
  //   分页监听
  onpageSize = (page) => {
    console.log(page);
  };
  render() {
    return (
      <div className="proList_index">
        <PageHeader
          className="site-page-header"
          onBack={() => this.props.active("1")}
          title="返回"
        />
        <div className="justify-between search">
          <div className="items-center">
            <label className="items-center">
              <span className="items-center">{this.state.inputLabel}</span>
              <Select
                placeholder={"请选择" + this.state.inputLabel}
                value={this.state.input}
                name="role"
                onChange={(item) => this.setState({ input: item })}
              >
                {this.state.option.map((el, index) => (
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
        <div className="add_user"></div>
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
