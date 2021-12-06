import React, { Component, Suspense } from "react";
import { BrowserRouter as Router, Route, Switch,} from "react-router-dom";
import "./home.less";
import {Menu} from "element-react"
class home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {
    console.log(this.props.routes);
  }

  //打开
  onOpen=(val)=>{
      console.log(val)
  }
  //关闭
  onClose=(val)=>{
      console.log(val)
  }
  render() {
    return (
      <div className="home">
        {/* <Link  to="/"><button>回到A页面2</button></Link> */}
        <div className="left_meun">
          <Menu
            defaultActive="2"
            className="el-menu-vertical-demo"
            onOpen={this.onOpen}
            onClose={this.onClose}
            theme="dark"
          >
            <Menu.SubMenu index="1" title="导航一">
              <Menu.ItemGroup title="分组一">
                <Menu.Item index="1-1">选项1</Menu.Item>
                <Menu.Item index="1-2">选项2</Menu.Item>
              </Menu.ItemGroup>
              <Menu.ItemGroup title="分组2">
                <Menu.Item index="1-3">选项3</Menu.Item>
              </Menu.ItemGroup>
            </Menu.SubMenu>
            <Menu.Item index="2">导航二</Menu.Item>
            <Menu.Item index="3">导航三</Menu.Item>
          </Menu>
        </div>
        <div className="right_text">
          <header className="header justify-end items-center">
              <img src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Ffile02.16sucai.com%2Fd%2Ffile%2F2014%2F0829%2Fb871e1addf5f8e96f3b390ece2b2da0d.jpg&refer=http%3A%2F%2Ffile02.16sucai.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1641116693&t=9fc9a0bde4ebadfd2fe92462e190331a" alt="" width='38' height='38' />
              <div className='name size14'>这是账户名称</div>
          </header>
          <div className="content">
            <Router>
              <Suspense fallback={<div>Loading...</div>}>
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
            </Router>
          </div>
        </div>
      </div>
    );
  }
}
export default home;
