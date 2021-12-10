import React, { Component } from "react";
import "./order.less";
import "moment/locale/zh-cn";
import locale from "antd/es/date-picker/locale/zh_CN";
import { Button, Table, Space, Pagination, Select, DatePicker } from "antd";
const { Option } = Select;
const { RangePicker } = DatePicker;

export default class role_module extends Component {
  constructor(props) {
    super(props);//level 1=压板厂 2=代理商 3=品牌方
    this.state = {
      columns: [
        {
          title: "序号",
          dataIndex: "key",
        },
        {
          title: "订单号",
          dataIndex: "order",
        },
        {
          title: "生产工厂",
          dataIndex: "order",
        },
        {
          title: "原材料",
          dataIndex: "order",
        },
        {
          title: "家具投影面积/平方",
          dataIndex: "order",
        },
        {
          title: "板材使用量/平方",
          dataIndex: "order",
        },
        {
          title: "订单时间",
          dataIndex: "order",
        }
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
      nameselect: "",
      time: [],
      searchLoading: false,
    };
  }

  // 选择时间
  on_change_time = (value, dateString) => {
    const { time } = this.state;
    for (let i = 0; i < dateString.length; i++) {
      time.push(dateString[i]);
    }
    this.setState({ time: [...time] });
  };
  //   监听下拉框
  select_click = (value, index) => {
    switch (index) {
      case 1: //门店
        this.setState({ nameselect: value });
        break;
      default:
        // 默认状态
        this.setState({ select: value });
        break;
    }
  };
  //   查询
  search_btn = () => {
    let data = {};
    data.nameselect = this.state.nameselect;
    data.time = this.state.time;
    if (this.props.level === 3) {
      data.select = this.state.select;
    }
    this.setState({ searchLoading: true });
    setTimeout(() => {
      this.setState({ searchLoading: false });
    }, 1500);
    console.log(data);
  };
  //   重置
  reset_btn = () => {
    this.setState({ select: "" });
    this.setState({ nameselect: "" });
    this.setState({ time: [] });
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
              <span className="items-center">生产工厂</span>
              <Select
                value={this.state.nameselect}
                name="role"
                onChange={(item) => this.select_click(item, 1)}
              >
                {this.state.nameOption.map((el, index) => (
                  <Option key={index} value={el.value}>
                    {el.value}
                  </Option>
                ))}
              </Select>
            </label>
            <label className="items-center">
              <span className="items-center">选择时间</span>
              <Space direction="vertical" size={12}>
                <RangePicker
                  allowClear
                  placeholder={["开始日期", "结束日期"]}
                  picker="date"
                  locale={locale}
                  showTime={{ format: "HH:mm:ss" }}
                  format="YYYY-MM-DD HH:mm:ss"
                  onChange={this.on_change_time}
                />
              </Space>
            </label>
            {this.props.level === 3 ? (
              <label className="items-center">
                <span className="items-center">状态</span>
                <Select
                  value={this.state.select}
                  name="role"
                  onChange={(item) => this.select_click(item)}
                >
                  {this.state.options.map((el, index) => (
                    <Option key={index} value={el.value}>
                      {el.value}
                    </Option>
                  ))}
                </Select>
              </label>
            ) : null}
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
