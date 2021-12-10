import React, { Component } from "react";
import OrderList from "../../../components/deliveryOrder/orderList"; // 订单列表
import MonthList from "../../../components/deliveryOrder/monthList"; // 订单月报
import HistoryList from "../../../components/deliveryOrder/historyList"; // 历史月报
import DetailsList from "../../../components/deliveryOrder/detailsList"; // 月报详情列表
import Details from "../../../components/deliveryOrder/details"; // 详情
import { Tabs } from "antd";

const { TabPane } = Tabs;
export default class index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tabList: ["订单列表", "订单月报"],
      active: "0", // 0=订单列表 1=订单月报 2=历史月报
      data: [],
      level: 2, // 1=压板厂 2=代理商 3=品牌方
      from:''
    };
  }
  //   标签页切换
  /**
   *
   * @param {显示} key
   * @param {数据} data
   * @param {来自哪里} from
   */
  callback = (key, data, from) => {
    this.setState({ active: key });
    this.setState({ data: [] });
    this.setState({ from: from });
  };
  render() {
    let userMessage;
    switch (this.state.active) {
      case "0":
        userMessage = <OrderList level={this.state.level}></OrderList>;
        break;
      case "1":
        userMessage = (
          <MonthList
            level={this.state.level}
            active={this.callback}
          ></MonthList>
        );
        break;
      case "2":
        userMessage = (
          <HistoryList
            level={this.state.level}
            active={this.callback}
          ></HistoryList>
        );
        break;
      case "3":
        userMessage = (
          <DetailsList
            level={this.state.level}
            active={this.callback}
          ></DetailsList>
        );
        break;
      case "4":
        userMessage = (
          <Details
            level={this.state.level}
            active={this.callback}
            from={this.state.from}
          ></Details>
        );
        break;
      default:
        userMessage = <OrderList level={this.state.level}></OrderList>;
        break;
    }
    return (
      <div className="system_index">
        {this.state.active === "0" || this.state.active === "1" ? (
          <Tabs defaultActiveKey={this.state.active} onChange={this.callback}>
            {this.state.tabList.map((item, index) => {
              return <TabPane label={item} tab={item} key={index}></TabPane>;
            })}
          </Tabs>
        ) : null}
        <div className="system_content">{userMessage}</div>
      </div>
    );
  }
}
