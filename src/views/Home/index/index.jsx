import React, { Component } from "react";
import "./home_index.less";
import Echart from "@/components/Echart/Echart.jsx";
import moment from "moment";
import "moment/locale/zh-cn";
import locale from "antd/es/date-picker/locale/zh_CN";
import { Button, Space, DatePicker, Divider } from "antd";
export default class index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      arrlist: [
        {
          img: require("@/assets/img/md_1.png").default,
          num: 14596,
          text: "企业数量",
          color: "#007AFF",
        },
        {
          img: require("@/assets/img/md_2.png").default,
          num: 14596,
          text: "客户数量",
          color: "#FF3A30",
        },
        {
          img: require("@/assets/img/md_3.png").default,
          num: 14596,
          text: "交易数量",
          color: "#FF9502",
        },
        {
          img: require("@/assets/img/md_4.png").default,
          num: 14596,
          text: "充值金额",
          color: "#34C758",
        },
        {
          img: require("@/assets/img/md_5.png").default,
          num: 14596,
          text: "提现金额",
          color: "#5756D7",
        },
      ],
      firmdate: "",
      dealdate: "",
      time:"",
      firm:1,
      deal:1
    };
  }
  componentDidMount() {
    console.log(444);
  }
  ondealChange = (date, dateString) => {
    this.setState({dealdate:date},()=>{
      console.log(moment(this.state.dealdate).format("YYYY-MM-DD"))
    })
  };
  onfirmChange = (date, dateString) => {
    console.log(date)
    this.setState({firmdate:date})
  };
  dateBtn(id) {
    switch (id) {
      case 1:
        this.setState({ firm: 1,firmdate:"" });
        break;
      case 2:
        this.setState({ firm: 2,firmdate:"" });
        break;
      case 3:
        this.setState({ deal: 1,dealdate: ""});
        break;
      case 4:
        this.setState({ deal: 2,dealdate:'' });
        break;
      default:
        console.log("default");
        break;
    }
  }
  render() {
    return (
      <div className="home_index">
        <div className="justify-between">
          {this.state.arrlist.map((item, index) => {
            return (
              <div className="space_div items-center" key={index}>
                <img src={item.img} alt="" width={70} />
                <div className="div_text">
                  <div className="items-center">
                    <span style={{ color: item.color }}>{item.num}</span>{" "}
                    <img
                      src={[require("@/assets/img/antOutline.png").default]}
                      alt=""
                      width={16}
                    />
                  </div>
                  <div className="items-center">
                    <span>{item.text}</span>{" "}
                    <img
                      src={[require("@/assets/img/md-info.png").default]}
                      alt=""
                      width={12}
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <div className="Echart">
          <div className="justify-between" style={{ marginTop: 50 }}>
            <div style={{ fontWeight: "bold" }}>新增企业数量</div>
            <Space size="middle">
              <div>
                <Button
                  type={this.state.firm === 1 ? "primary" : "default"}
                  onClick={() => this.dateBtn(1)}
                  danger={this.state.firm === 1}
                >
                  本周
                </Button>
                <Button
                  type={this.state.firm === 2 ? "primary" : "default"}
                  danger={this.state.firm === 2}
                  onClick={() => this.dateBtn(2)}
                >
                  本月
                </Button>
              </div>
              <DatePicker
                locale={locale}
                value={this.state.firmdate}
                onChange={this.onfirmChange}
              />
            </Space>
          </div>
          <Divider />
          <Echart />
        </div>
        <div className="Echart">
          <div className="justify-between" style={{ marginTop: 50 }}>
            <div style={{ fontWeight: "bold" }}>新增交易数量</div>
            <Space size="middle">
              <div>
                <Button
                  type={this.state.deal === 1 ? "primary" : "default"}
                  danger={this.state.deal === 1}
                  onClick={() => this.dateBtn(3)}
                >
                  本周
                </Button>
                <Button
                  type={this.state.deal === 2 ? "primary" : "default"}
                  danger={this.state.deal === 2}
                  onClick={() => this.dateBtn(4)}
                >
                  本月
                </Button>
              </div>
              <DatePicker
                locale={locale}
                value={this.state.dealdate}
                onChange={this.ondealChange}
              />
            </Space>
          </div>
          <Divider />
          <Echart />
        </div>
      </div>
    );
  }
}
