import React, { Component } from "react";
import ProList from "../../../components/productionPlant/proList"; //生产列表
import ProDetails from "../../../components/productionPlant/proDetails"; // 添加生产工厂

export default class productionPlant extends Component {
  constructor(props) {
    super(props);
    this.state = {
      active: "1",
    };
  }
  active = (index) => {
    console.log(index);
    this.setState({ active: index });
  };
  goback = (index) => {
    console.log(index);
  };
  render() {
    let userMessage;
    if (this.state.active === "1") {
      userMessage = (
        <ProList
          active={(item) => {
            this.setState({ active: item });
          }}
        ></ProList>
      );
    } else {
      userMessage = (
        <ProDetails
          active={(item) => {
            this.setState({ active: item });
          }}
        ></ProDetails>
      );
    }
    return <div className="pro_index">{userMessage}</div>;
  }
}
