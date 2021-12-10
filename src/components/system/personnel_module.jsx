import React, { Component } from "react";
import "./system.less";
import {
  Button,
  Form,
  Input,
  Table,
  Space,
  Modal,
  Select,
  Pagination,
  Popconfirm,
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
        },
        {
          title: "登录账号",
          dataIndex: "name",
          key: "name",
        },
        {
          title: "密码",
          dataIndex: "password",
          key: "password",
        },
        {
          title: "角色",
          dataIndex: "role",
          key: "role",
        },
        {
          title: "最近修改时间",
          dataIndex: "age",
          key: "age",
        },
        {
          title: "Action",
          key: "action",
          render: (item) => (
            <Space size="middle">
              <Button
                type="link"
                className="confirm-btn"
                onClick={this.revise_btn.bind(this, item)}
              >
                编辑
              </Button>
              <Popconfirm
                title={"你是否要删除账号" + item.age + "?"}
                onConfirm={(e) => {
                  this.del_btn(item);
                }}
                okText="是的"
                cancelText="取消"
              >
                <Button type="link" style={{ color: "red" }}>
                  删除
                </Button>
              </Popconfirm>
            </Space>
          ),
        },
      ],
      data: [
        {
          key: "1",
          name: "John Brown",
          age: 32,
          address: "New York No. 1 Lake Park",
          tags: ["nice", "developer"],
          password: "1213",
          role: "张飞",
        },
        {
          key: "2",
          name: "Jim Green",
          age: 42,
          address: "London No. 1 Lake Park",
          tags: ["loser"],
          password: "1213",
          role: "张飞",
        },
        {
          key: "3",
          name: "Joe Black",
          age: 32,
          address: "Sidney No. 1 Lake Park",
          tags: ["cool", "teacher"],
          password: "1213",
          role: "张飞",
        },
      ],
      form: {
        account: "",
        password: "",
        role: "",
      },
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
      searchInput: "",
    };
  }
  // 监听查询内容
  on_change_search = (e) => {
    this.setState({ searchInput: e.target.value });
  };
  //   查询
  search_btn = () => {
    console.log(this.state.searchInput);
  };
  //   修改按钮
  formRef = React.createRef();
  revise_btn = (item) => {
    this.setState({ openModal: true });
    // 将item中的参数传入
    setTimeout(() => {
      this.formRef.current.setFieldsValue({
        username: "张三",
        password: "123456",
        role: "黄金糕",
      });
    }, 100);
  };
  //   删除按钮
  del_btn = (item) => {
    console.log(item);
  };
  // confirm(e) {
  //   console.log(e);
  //   message.success('Click on Yes');
  // }
  //   设置权限
  set_permissions = (item) => {
    console.log(item);
  };
  //   分页监听
  onpageSize = (page) => {
    console.log(page);
  };

  // formRef = React.createRef();
  showModal = () => {
    this.setState({ openModal: true });
    setTimeout(() => {
      this.formRef.current.setFieldsValue({
        username: "",
        password: "",
        role: "",
      });
    }, 100);
  };
  // 提交成功
  onFinish = (values) => {
    console.log("参数提交成功:", values);
  };
  //   关闭按钮
  handleCancel = () => {
    this.setState({ openModal: false });
  };
  render() {
    return (
      <div>
        <div className="items-center search">
          <span>账号</span>
          <Input
            onChange={(event) => this.on_change_search(event)}
            allowClear
            placeholder="请输入"
          ></Input>
          <Button type="primary" onClick={this.search_btn}>
            查询
          </Button>
        </div>
        <div className="add_user">
          <Button type="primary" onClick={this.showModal}>
            新增账号
          </Button>
        </div>
        <div className="table_info">
          <Table columns={this.state.columns} dataSource={this.state.data} />
          <div className="justify-center Pagination">
            <Pagination
              defaultCurrent={1}
              total={50}
              onChange={this.onpageSize}
            />
          </div>
        </div>
        <Modal
          title="新增/编辑账号"
          visible={this.state.openModal}
          onCancel={this.handleCancel}
          footer={null}
        >
          <Form
            ref={this.formRef}
            name="basic"
            labelCol={{ span: 4 }}
            wrapperCol={{ span: 16 }}
            autoComplete="off"
            onFinish={this.onFinish}
          >
            <Form.Item
              label="登录账号"
              name="username"
              placeholder="请输入登录账号"
              rules={[{ required: true, message: "请输入登录账号!" }]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              label="密码"
              name="password"
              type="password"
              placeholder="请输入密码"
              rules={[{ required: true, message: "请输入密码!" }]}
            >
              <Input type="password"></Input>
            </Form.Item>
            <Form.Item
              label="角色"
              name="role"
              placeholder="请选择角色"
              rules={[
                { required: true, message: "Please input your username!" },
              ]}
            >
              <Select name="role">
                {this.state.options.map((el, index) => (
                  <Option key={index} value={el.value}>
                    {el.value}
                  </Option>
                ))}
              </Select>
            </Form.Item>
            <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
              <Button
                style={{ marginRight: "10px" }}
                onClick={() => this.setState({ openModal: false })}
              >
                取消
              </Button>
              <Button type="primary" htmlType="submit">
                确定
              </Button>
            </Form.Item>
          </Form>
        </Modal>
      </div>
    );
  }
}
