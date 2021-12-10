import React, { Component } from "react";
import "./index.less";
import { Link } from "react-router-dom";
import { collectPointdata } from "@/axios/api";
import { Space, Input, Button } from "antd";
import { AudioOutlined } from "@ant-design/icons";
import workImg from "@/assets/img/frontImg/work.png";
import rightImg from "@/assets/img/frontImg/right.png";
import coorImg from "@/assets/img/frontImg/coor.png";
const { Search } = Input;
class index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ccc: "跳转B页面",
    };
  }
  fn = () => {
    // this.setState({ccc:this.state.ccc+1})
    // this.props.history.push('/official')
    collectPointdata({ code: "86.888.8888/20210000000035" }).then((res) => {
      console.log(res);
    });
  };

  suffix = (
    <AudioOutlined
      style={{
        fontSize: 16,
        color: "#1890ff",
      }}
    />
  );
  // 搜索
  onSearch = () => {
    this.props.history.push('/inquire');
  };
  render() {
    return (
      <div className="Home justify-center">
        <div className="header justify-between">
          <div className="header_left">枫鸟智能溯源防伪平台</div>
          <div className="header_center justify-start">
            <div className="header_center_item">请输入手机号查询真伪</div>
            <div>
              <Space direction="vertical">
                <Search placeholder="请输入内容" onSearch={this.onSearch} />
              </Space>
            </div>
          </div>
          <div className="header_right">服务热线：XXXXXXXXXX</div>
        </div>
        <div className="content justify-center">
          <div className="content_item flex-col">
            <div className="item_top">
              <div>枫鸟智能溯源防伪平台</div>
              <div>帮助家具品牌鉴真溯源</div>
            </div>
            <Link className="platform" to="/register">
              <Button className="item_btn">立即注册</Button>
            </Link>
          </div>
        </div>
        <div className="footer justify-between">
          <div className="footer_left justify-center">
            <img src={workImg} alt="" />
            <Link className="platform" to="/login">
              登录平台
            </Link>
            <img src={rightImg} alt="" />
          </div>
          <div className="footer_right justify-center">
            <img src={coorImg} alt="" />
            <Link className="platform" to="/login">
              登录系统
            </Link>
            <img src={rightImg} alt="" />
          </div>
        </div>
        <Button type="primary" onClick={this.fn}>主要按钮</Button>
        <Link to='/official'><button>{this.state.ccc}</button></Link>
      </div>
    );
  }
}
export default index;
