import React, { Component, Suspense } from "react";
import "./home.less";
import { Switch, Route } from "react-router-dom";
import { Menu, Button, Spin, Dropdown } from "antd";
import { MenuUnfoldOutlined, MenuFoldOutlined } from "@ant-design/icons";
const { SubMenu } = Menu;
class home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mebu_list: [
        {
          name: "首页",
          to: "/Home/index",
        },
        {
          name: "企业管理",
          to: "/Home/business",
        },
        {
          name: "客户管理",
          to: "/Home/ClientGl",
        },
        {
          name: "订单管理",
          to: "/Home/Order",
        },
        {
          name: "财务管理",
          to: "/Home/Finance",
        },
        {
          name: "销售订单管理",
          to: "/Home/Market",
        },
        {
          name: "客户管理",
          to: "/Home/ClientMd",
        },
        {
          name: "原材料管理",
          to: "/Home/Materials",
        },
        {
          name: "生产工厂管理",
          to: "/Home/productionPlant",
        },
        {
          name: "压板厂管理",
          to: "/Home/Clampmes",
        },
        {
          name: "门店管理",
          to: "/Home/stores",
        },
        {
          name: "生产订单管理",
          to: "/Home/productionOrder",
        },
        {
          name: "CRM管理",
          child: [
            { name: "业务员管理", to: "/Home/salesman" },
            { name: "销售数据", to: "/Home/sales" },
          ],
        },

        {
          name: "账户管理",
          to: "/Home/account",
        },
        {
          name: "系统设置",
          child: [
            { name: "角色权限管理", to: "/Home/system" },
            { name: "操作记录", to: "/Home/operation" },
          ],
        },
        {
          name: "产品管理",
          child: [
            { name: "产品列表", to: "/Home/product" },
            { name: "产品类型管理", to: "/Home/poroductType" },
            { name: "产品规格管理", to: "/Home/specifications" },
          ],
        },
        {
          name: "发货订单管理",
          to: "/Home/deliveryOrder",
        },
      ],
      menuDown: (
        <Menu>
          <Menu.Item>退出</Menu.Item>
        </Menu>
      ),
      mebu_active: sessionStorage.mebu_active
        ? sessionStorage.mebu_active
        : "/Home/index",
      collapsed: false,
      menu_width: 200,
      transition: 0,
    };
  }
  //菜单
  onSelect = (item) => {
    sessionStorage.mebu_active = item.key;
    this.props.history.push(item.key);
  };
  componentDidMount() {
    console.log(3);
  }
  toggleCollapsed = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
    if (!this.state.collapsed) {
      this.setState({
        menu_width: 80,
        transition: 0.3,
      });
    } else {
      this.setState({
        menu_width: 200,
        transition: 0.8,
      });
    }
  };
  render() {
    return (
      <div className="home">
        {/* <Link  to="/"><button>回到A页面2</button></Link> */}
        <div
          className="left_meun"
          style={{
            width: this.state.menu_width + "px",
            transition: this.state.transition + "s",
          }}
        >
          <div
            className="menu_logo items-center justify-center"
            style={{
              width: this.state.menu_width + "px",
              transition: this.state.transition + "s",
            }}
          >
            <img
              src="https://img2.baidu.com/it/u=2208864461,1550133454&fm=26&fmt=auto"
              alt=""
              height="55"
              width="80"
            />
          </div>
          <Menu
            defaultSelectedKeys={this.state.mebu_active}
            mode="inline"
            theme="dark"
            inlineCollapsed={this.state.collapsed}
            onClick={this.onSelect}
            style={{ minHeight: "calc(100% - 70px)" }}
          >
            {this.state.mebu_list.map((item, index) => {
              if (item.name !== "系统设置" && item.name !== "CRM管理" && item.name !=="产品管理") {
                return <Menu.Item key={item.to}>{item.name}</Menu.Item>;
              } else {
                return (
                  <SubMenu key={index} title={item.name}>
                    {item.child.map((child) => {
                      return (
                        <Menu.Item index={child.to} key={child.to}>
                          {child.name}
                        </Menu.Item>
                      );
                    })}
                  </SubMenu>
                );
              }
            })}
          </Menu>
        </div>
        <div className="right_text">
          <header className="header justify-between items-center">
            <Button type="primary" onClick={this.toggleCollapsed}>
              {React.createElement(
                this.state.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined
              )}
            </Button>
            <Dropdown overlay={this.state.menuDown}>
              <div className="items-center">
                <img
                  src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Ffile02.16sucai.com%2Fd%2Ffile%2F2014%2F0829%2Fb871e1addf5f8e96f3b390ece2b2da0d.jpg&refer=http%3A%2F%2Ffile02.16sucai.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1641116693&t=9fc9a0bde4ebadfd2fe92462e190331a"
                  alt=""
                  width="38"
                  height="38"
                />
                <div className="name size14">这是账户名称</div>
              </div>
            </Dropdown>
          </header>
          <div className="content">
            <Suspense
              fallback={
                <div
                  className="justify-center items-center"
                  style={{ height: "calc(100% - 70px)" }}
                >
                  <Spin />
                </div>
              }
            >
              <Switch>
                {this.props.routes.map((item) => {
                  return (
                    <Route
                      exact={item.exact}
                      path={item.path}
                      key={item.path}
                      component={item.component}
                    />
                  );
                })}
              </Switch>
            </Suspense>
          </div>
        </div>
      </div>
    );
  }
}
export default home;
