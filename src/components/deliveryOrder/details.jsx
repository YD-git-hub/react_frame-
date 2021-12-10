import React, { Component } from "react";
import "./order.less";
import moment from "moment";
import "moment/locale/zh-cn";
import locale from "antd/es/date-picker/locale/zh_CN";
import {
  Button,
  Table,
  Pagination,
  Select,
  DatePicker,
  PageHeader,
} from "antd";
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
          title: "订单号",
          dataIndex: "order",
        },
        {
          title: "订单时间",
          dataIndex: "order",
        },
        {
          title: "压板厂",
          dataIndex: "order",
        },
        {
          title: "生产工厂",
          dataIndex: "order",
        },
        {
          title: "门店",
          dataIndex: "order",
        },
        {
          title: "原材料",
          dataIndex: "order",
        },
        {
          title: "板材投影面积/平方",
          dataIndex: "order",
        },
        {
          title: "使用，面积/平方",
          dataIndex: "order",
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
      proOptions: [
        {
          value: "黄金糕",
          label: "黄金糕",
        },
        {
          value: "双皮奶",
          label: "双皮奶",
        },
      ],
      storesOption: [
        {
          value: "门店一",
        },
        {
          value: "门店二",
        },
      ],
      proValue: "",
      storesValue: "",
      time: "",
      timeValue: "",
      searchLoading: false,
    };
  }

  componentDidMount() {
    //   console.log(this.props.ac);
  }
  //   查询
  search_btn = () => {
    let data = {};
    data.storesValue = this.state.storesValue;
    data.proValue = this.state.proValue;
    data.timeValue = this.state.timeValue;
    this.setState({ searchLoading: true });
    setTimeout(() => {
      this.setState({ searchLoading: false });
    }, 1500);
    console.log(data);
  };
  //   重置
  reset_btn = () => {
    this.setState({ storesValue: "" });
    this.setState({ proValue: "" });
    this.setState({ time: "" });
    this.setState({ timeValue: "" });
  };
  //   打开历史月报
  callback = (index, data) => {
    if (index === 1) {
      this.props.active("2");
    } else {
      if (this.props.level === 1) {
        this.props.active("3", data); // 详情列表
      } else {
        this.props.active("4", data); // 查看详情
      }
    }
  };
  //   分页监听
  onpageSize = (page) => {
    console.log(page);
  };
  //   日期选择
  timeChange = (value, time) => {
    this.setState({ time: value });
    this.setState({ timeValue: time });
  };
  disabledDate = (current) => {
    const yearStart = moment().startOf("month"); // 当前月份的第一天
    const yearEnd = moment().endOf("month"); // 当前月份的最后一天
    return yearStart > current || current >= yearEnd;
  };
  back = () => {
    if (this.props.level === 1) {
      this.props.active("1");
    } else {
      // 来自历史月报返回历史月报 反之
      if (this.props.from === "history") {
        this.props.active("2");
      } else {
        this.props.active("3");
      }
    }
  };
  render() {
    return (
      <div className="proList_index">
        <PageHeader
          className="site-page-header"
          onBack={this.back}
          title="返回"
        />
        <div className="justify-between search">
          <div className="items-center">
            <label className="items-center">
              <span className="items-center">选择日期</span>
              <DatePicker
                disabledDate={this.disabledDate}
                locale={locale}
                value={this.state.time}
                format="YYYY-MM-DD"
                onChange={this.timeChange}
              />
            </label>
            <label className="items-center">
              <span className="items-center">生产工厂</span>
              <Select
                placeholder="请选择状态"
                value={this.state.proValue}
                name="role"
                onChange={(item) => this.setState({ proValue: item })}
              >
                {this.state.proOptions.map((el, index) => (
                  <Option key={index} value={el.value}>
                    {el.value}
                  </Option>
                ))}
              </Select>
            </label>
            {this.props.level !== 1 ? (
              <label className="items-center">
                <span className="items-center">门店</span>
                <Select
                  placeholder="请选择状态"
                  value={this.state.storesValue}
                  name="role"
                  onChange={(item) => this.setState({ storesValue: item })}
                >
                  {this.state.storesOption.map((el, index) => (
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
        <div className="add_user justify-center toast">状态异常</div>
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
