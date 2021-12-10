import React, { Component } from "react";
import "./index.less";
import Logon from "@/components/Logon/logon.jsx";
import Reset from "@/components/Logon/Reset.jsx";
export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      datas: "",
    };
  }
  des = (index) => {
    this.setState({
      datas: index,
    });
  };
  render() {
    return (
      <div className="login justify-between">
        <div className="lgin_left"></div>
        <div className="lgin_right justify-center">
          {this.state.datas === 2 ? (
            <Reset data={this.des} datas={this.state.datas}></Reset>
          ) : (
            <Logon data={this.des}  history={this.props.history} datas={this.state.datas}></Logon>
          )}
        </div>
      </div>
    );
  }
}
