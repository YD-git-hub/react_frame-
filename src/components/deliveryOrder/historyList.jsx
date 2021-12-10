import React, { Component } from "react";
import "./order.less";
import "moment/locale/zh-cn";
import { InfoCircleTwoTone } from "@ant-design/icons";
import locale from "antd/es/date-picker/locale/zh_CN";
import {
  Button,
  Table,
  Space,
  Pagination,
  Input,
  DatePicker,
  PageHeader,
} from "antd";

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
          title: "月份",
          dataIndex: "order",
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
      input: "",
      time: "",
      timeValue: "",
      searchLoading: false,
    };
  }
  componentDidMount() {}
  //   查看详情
  checkDetail = (data) => {
    this.props.active("4", data, "history"); // 查看详情
  };
  //   日期选择
  timeChange = (value, time) => {
    this.setState({ time: value });
    this.setState({ timeValue: time });
  };
  //   查询
  search_btn = () => {
    let data = {};
    data.input = this.state.input;
    data.timeValue = this.state.timeValue;
    this.setState({ searchLoading: true });
    setTimeout(() => {
      this.setState({ searchLoading: false });
    }, 1500);
    console.log(data);
  };
  //   重置
  reset_btn = () => {
    this.setState({ input: "" });
    this.setState({ time: "" });
    this.setState({ timeValue: "" });
  };
  //   打开历史月报
  go_history = () => {
    this.props.active(3);
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
              <span className="items-center">原材料</span>
              <Input
                value={this.state.input}
                onChange={(item) => this.setState({ input: item.target.value })}
                allowClear
                placeholder="请输入"
              />
            </label>
            <label className="items-center">
              <span className="items-center">选择月份</span>
              <DatePicker
                locale={locale}
                picker="month"
                value={this.state.time}
                format="YYYY-MM"
                onChange={this.timeChange}
              />
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
