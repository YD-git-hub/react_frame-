import React, { Component } from "react";
import "./index.less";
import { Space, Input, Button } from "antd";
import identityImg from "@/assets/img/frontImg/identity.png";
import cardImg from "@/assets/img/frontImg/card.png";
import bannerImg from "@/assets/img/frontImg/banner.png";
import productImg from "@/assets/img/frontImg/product.png";
import storesImg from "@/assets/img/frontImg/stores.png";
const { Search } = Input;
export default class index extends Component {
  render() {
    return (
      <div className="inquire">
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
        <div className="content">
          <div className="content_item justify-center">
            <div className="item ">
              <div className="item1">
                <div className="item_title justify-start">
                  <img src={identityImg} alt="" />
                  <span>身份卡</span>
                </div>
                <div className="item_center justify-between">
                  <div className="center_left">
                    <div className="left_item">
                      <span>姓名:</span>
                      <span>小明</span>
                    </div>
                    <div className="left_item">
                      <span>联系方式:</span>
                      <span>小明</span>
                    </div>
                    <div className="left_item">
                      <span>地址:</span>
                      <span>小明</span>
                    </div>
                    <div className="left_item">
                      <span>图纸:</span>
                    </div>
                  </div>
                  <div className="center_right">
                    <img src={cardImg} alt="" />
                  </div>
                </div>
                <div className="item_img">
                  <img src={bannerImg} alt="" />
                </div>
              </div>
              <div className="item1">
                <div className="item_title justify-start">
                  <img src={productImg} alt="" />
                  <span>产品信息</span>
                </div>
                <div className="item_center justify-between">
                  <div className="center_left">
                    <div className="left_item">
                      <span>品牌:</span>
                      <span>小明</span>
                    </div>
                    <div className="left_item">
                      <span>产品类型:</span>
                      <span>小明</span>
                    </div>
                    <div className="left_item">
                      <span>产品名称:</span>
                      <span>小明</span>
                    </div>
                    <div className="left_item">
                      <span>产品型号:</span>
                      <span>小明</span>
                    </div>
                    <div className="left_item justify-start">
                      <Button type="primary" >点击查看报关单</Button>
                      <Button type="primary" >点击查看质检报告</Button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="item1">
                <div className="item_title justify-start">
                  <img src={storesImg} alt="" />
                  <span>门店信息</span>
                </div>
                <div className="item_center justify-between">
                  <div className="center_left">
                    <div className="left_item">
                      <span>门店名称:</span>
                      <span>小明</span>
                    </div>
                    <div className="left_item">
                      <span>门店联系方式:</span>
                      <span>小明</span>
                    </div>
                    <div className="left_item">
                      <span>门店地址:</span>
                      <span>小明</span>
                    </div>
                    <div className="left_item">
                      <span>门店授权:</span>
                      <span>小明</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
