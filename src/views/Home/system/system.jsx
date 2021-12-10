import React, { Component } from "react";
import RoleModule from "../../../components/system/role_module"; // 角色权限
import PersonnelModule from "../../../components/system/personnel_module"; // 人员管理
import SetPermissions from "../../../components/system/setPermissions"; // 设置权限
// import { Link } from "react-router-dom";
import "./system_index.less";
import { Tabs } from "antd";

const { TabPane } = Tabs;
export default class index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tabList: ["角色权限", "人员管理"],
      active: "0",
      data: []
    };
  }
  //   标签页切换
  callback = (key) => {
    this.setState({ active: key });
    this.setState({ data: [] })
  };
  // 接受子组件切换为设置权限
  permissions = (item) => {
    this.setState({ data: item })
  }
  // 设置权限返回
  setBack = (item) => {
    this.setState({ data: item })
  }
  render() {
    return (
      <div className="system_index">
        <Tabs defaultActiveKey={this.state.active} onChange={this.callback}>
          {this.state.tabList.map((item, index) => {
            return <TabPane label={item} tab={item} key={index}></TabPane>;
          })}
        </Tabs>
        <div className="system_content">
          {this.state.active === "0" ? (
            this.state.data.length === 0 ? <RoleModule permissions={(item) => { this.permissions(item) }}></RoleModule> : <SetPermissions datas={this.state.data} setBack={(item) => { this.setBack(item) }}></SetPermissions>
          ) : (
            <PersonnelModule></PersonnelModule>
          )}
        </div>
      </div>
    );
  }
}
