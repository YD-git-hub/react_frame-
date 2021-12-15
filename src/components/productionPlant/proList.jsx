import React, { Component } from "react";
import "./pro.less";
import { InfoCircleTwoTone } from "@ant-design/icons";
import {
  Button,
  Input,
  Table,
  Space,
  Modal,
  Pagination,
  Radio,
  Select,
} from "antd";
const { Option } = Select;
export default class role_module extends Component {
  constructor(props) {
    super(props);
    this.state = {
      columns: [
        {
          title: "序号",
          dataIndex: "key",
          level: [1, 2],
        },
        {
          title: "生产工厂",
          dataIndex: "userName",
          level: [1, 2],
        },
        {
          title: "所属品牌",
          dataIndex: "userName",
          level: [1],
        },
        {
          title: "联系方式",
          dataIndex: "userName",
          level: [1],
        },
        {
          title: "账号",
          dataIndex: "yabanchang",
          level: [2],
        },
        {
          title: "登录密码",
          dataIndex: "yabanchang",
          level: [2],
        },
        {
          title: "关联时间",
          dataIndex: "yabanchang",
          level: [1, 2],
        },
        {
          title: "状态",
          dataIndex: "yabanchang",
          level: [2],
        },
        {
          title: "操作",
          key: "action",
          level: [1],
          render: (item) => (
            <Space size="middle">
              <Button type="link" onClick={this.remove_btn.bind(this, item)}>
                取消关联
              </Button>
            </Space>
          ),
        },
        {
          title: "操作",
          key: "action",
          level: [2],
          render: (item) => {
            if (item.key === "1") {
              return (
                <Space size="middle">
                  <Button type="link" onClick={this.audit_btn.bind(this, item)}>
                    审核
                  </Button>
                  <Button
                    type="link"
                    onClick={this.details_btn.bind(this, item)}
                  >
                    详情
                  </Button>
                </Space>
              );
            } else {
              return (
                <Space size="middle">
                  <Button
                    type="link"
                    onClick={this.details_btn.bind(this, item)}
                  >
                    详情
                  </Button>
                  <Button
                    type="link"
                    onClick={this.remove_btn.bind(this, item)}
                  >
                    取消关联
                  </Button>
                </Space>
              );
            }
          },
        },
      ],
      list: [], // table 列
      data: [
        {
          key: "1",
          userName: "门店1",
          order: "生产工厂1",
          yabanchang: "压板厂2",
        },
        {
          key: "2",
          userName: "门店2",
          order: "生产工厂2",
          yabanchang: "压板厂2",
        },
        {
          key: "3",
          userName: "门店3",
          order: "生产工厂3",
          yabanchang: "压板厂3",
        },
      ], // table 参数
      options: [
        {
          value: "黄金糕",
          label: "黄金糕",
        },
        {
          value: "双皮奶",
          label: "双皮奶",
        },
      ],
      openModal: false,
      openInfo: false,
      openCancelModal: false, //关联弹窗
      input: "",
      select: "",
      brand: "",
      value: "通过",
      loading: false,
      searchLoading: false,
      level: 2, // 1=门店 2=压板厂
    };
  }

  componentDidMount() {
    let arr = [];
    arr = this.state.columns.filter((item) =>
      item.level.includes(this.state.level)
    );
    this.setState({
      list: [...arr],
    });
  }
  // 监听名称
  on_change_search = (e) => {
    this.setState({ input: e.target.value });
  };
  // 监听品牌
  on_change_brand = (e) => {
    this.setState({ brand: e.target.value });
  };

  //   监听下拉框
  select_click = (value, index) => {
    this.setState({ select: value });
  };
  //   查询
  search_btn = () => {
    let data = {};
    switch (this.state.level) {
      case 1:
        data.input = this.state.input;
        data.brand = this.state.brand;
        break;
      default:
        data.input = this.state.input;
        data.select = this.state.select;
        break;
    }
    this.setState({ searchLoading: true });
    setTimeout(() => {
      this.setState({ searchLoading: false });
    }, 1500);
    console.log(data);
  };
  //   重置
  reset_btn = () => {
    this.setState({ input: "" });
    this.setState({ select: "" });
    this.setState({ brand: "" });
  };
  //   审核按钮
  audit_btn = (item) => {
    this.setState({ openModal: true });
  };
  //   解除关联
  remove_btn = (item) => {
    console.log(item);
    this.setState({ openCancelModal: true });
  };
  //   打开详情
  details_btn = (item) => {
    this.setState({ openInfo: true });
  };
  //   关闭按钮
  handleCancel = () => {
    this.setState({ openModal: false });
    this.setState({ openInfo: false });
    this.setState({ openCancelModal: false });
  };
  //   添加生产工厂
  add_pro_btn = () => {
    this.props.active("2");
  };
  //   监听单选
  onChange_Radio = (e) => {
    this.setState({ value: e.target.value });
  };
  // 提交成功
  submit = (type) => {
    this.setState({ loading: true });
    setTimeout(() => {
      this.setState({ loading: false });
      this.handleCancel();
    }, 1500);
    switch (type) {
      case "contact":
        console.log("取消关联");
        break;

      default:
        // 默认为审核
        console.log("审核");
        break;
    }
  };
  //   分页监听
  onpageSize = (page) => {
    console.log(page);
  };
  render() {
    return (
      <div className="proList_index">
        <button
          onClick={() => {
            this.setState({ level: this.state.level === 1 ? 2 : 1 });
          }}
        >
          切换权限显示
        </button>
        <div className="justify-between search">
          <div className="items-center">
            <label className="items-center">
              <span className="items-center">生产工厂</span>
              <Input
                value={this.state.input}
                onChange={(event) => this.on_change_search(event)}
                allowClear
                placeholder="请输入"
              ></Input>
            </label>
            {this.state.level === 1 ? (
              <label className="items-center">
                <span className="items-center">品牌</span>
                <Input
                  value={this.state.brand}
                  onChange={(event) => this.on_change_brand(event)}
                  allowClear
                  placeholder="请输入品牌"
                ></Input>
              </label>
            ) : (
              <label className="items-center">
                <span className="items-center">状态</span>
                <Select
                  placeholder="请选择状态"
                  value={this.state.select}
                  name="role"
                  onChange={this.select_click}
                >
                  {this.state.options.map((el, index) => (
                    <Option key={index} value={el.value}>
                      {el.value}
                    </Option>
                  ))}
                </Select>
              </label>
            )}
          </div>
          <div>
            <Button
              type="primary"
              loading={this.state.searchLoading}
              onClick={this.search_btn}
              style={{ marginRight: "10px" }}
            >
              查询
            </Button>
            <Button type="primary" onClick={this.reset_btn}>
              重置
            </Button>
          </div>
        </div>
        <div className="add_user">
          {this.state.level === 2 ? (
            <Button type="primary" onClick={this.add_pro_btn}>
              添加生产工厂
            </Button>
          ) : null}
        </div>
        <div className="table_info">
          <Table columns={this.state.list} dataSource={this.state.data} />
          <div className="justify-center Pagination">
            <Pagination
              defaultCurrent={1}
              total={50}
              onChange={this.onpageSize}
            />
          </div>
        </div>
        <Modal
          title="审核账号"
          visible={this.state.openModal}
          onCancel={this.handleCancel}
          footer={null}
        >
          <div className="modal_content justify-between">
            <Radio.Group
              className="justify-between"
              onChange={this.onChange_Radio}
              value={this.state.value}
              defaultValue={this.state.value}
            >
              <Radio value="通过">通过</Radio>
              <Radio value="不通过">不通过</Radio>
            </Radio.Group>
          </div>
          <div className="justify-center">
            <Button
              style={{ marginRight: "10px" }}
              onClick={() => this.setState({ openModal: false })}
            >
              取消
            </Button>
            <Button
              loading={this.state.loading}
              type="primary"
              onClick={this.submit}
            >
              确定
            </Button>
          </div>
        </Modal>
        <Modal
          title="企业资料"
          visible={this.state.openInfo}
          onCancel={this.handleCancel}
          footer={null}
        >
          <div className="justify-between">
            <div className="flex-col">
              <p>企业名称：</p>
              <p>企业类型：</p>
              <p>账号：</p>
              <p>密码：</p>
              <p>联系人：</p>
              <p>联系电话：</p>
            </div>
            <div>
              <label className="flex-col">
                营业执照：
                <img
                  className="license"
                  src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fup.enterdesk.com%2Fedpic_source%2F53%2F0a%2Fda%2F530adad966630fce548cd408237ff200.jpg&refer=http%3A%2F%2Fup.enterdesk.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1641534933&t=060de27728dbaf73d03f14b8f9e76557"
                  alt=""
                />
              </label>
            </div>
          </div>
          <div className="modal_content">企业地址：</div>
        </Modal>

        <Modal
          title="取消关联"
          visible={this.state.openCancelModal}
          onCancel={this.handleCancel}
          footer={null}
        >
          <div className="modal_content justify-center">
            <InfoCircleTwoTone
              twoToneColor="#FF4444"
              style={{ fontSize: "20px", marginRight: "10px" }}
            />
            确认要取消关联吗？
          </div>
          <div className="justify-center">
            <Button
              style={{ marginRight: "10px" }}
              onClick={() => this.setState({ openCancelModal: false })}
            >
              取消
            </Button>
            <Button
              loading={this.state.loading}
              type="primary"
              onClick={this.submit.bind(this, "contact")}
            >
              确定
            </Button>
          </div>
        </Modal>
      </div>
    );
  }
}
