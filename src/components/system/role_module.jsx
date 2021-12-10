import React, { Component } from "react";
import "./system.less";
import {
  Button,
  Form,
  Input,
  Table,
  Space,
  Modal,
  Pagination,
  Popconfirm,
} from "antd";
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
          title: "角色名称",
          dataIndex: "name",
          key: "name",
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
                修改
              </Button>
              <Popconfirm
                title="你是否要删除?"
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
              <span
                className="confirm-btn"
                onClick={this.set_permissions.bind(this, item)}
              >
                <Button type="link">设置权限</Button>
              </span>
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
        },
        {
          key: "2",
          name: "Jim Green",
          age: 42,
          address: "London No. 1 Lake Park",
          tags: ["loser"],
        },
        {
          key: "3",
          name: "Joe Black",
          age: 32,
          address: "Sidney No. 1 Lake Park",
          tags: ["cool", "teacher"],
        },
      ],
      openModal: false,
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
  //   关闭按钮
  handleCancel = () => {
    this.setState({ openModal: false });
  };
  //   修改按钮
  formRef = React.createRef();
  revise_btn = (item) => {
    this.setState({ openModal: true });
    // 将item中的参数传入
    setTimeout(() => {
      this.formRef.current.setFieldsValue({
        username: item.name,
      });
    }, 100);
  };
  //   删除按钮
  del_btn = (item) => {
    console.log(item);
  };
  //   设置权限
  set_permissions = (item) => {
    this.props.permissions(JSON.stringify(item));
  };
  //   分页监听
  onpageSize = (page) => {
    console.log(page);
  };

  // 新增角色
  showModal = () => {
    this.setState({ openModal: true });
    setTimeout(() => {
      this.formRef.current.setFieldsValue({
        username: "",
      });
    }, 100);
  };
  // 提交成功
  onFinish = (values) => {
    console.log("参数提交成功:", values);
  };
  render() {
    return (
      <div>
        <div className="items-center search">
          <span>角色名称</span>
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
            新增角色
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
          title="新增角色"
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
              label="角色名称"
              name="username"
              placeholder="请输入名称"
              rules={[{ required: true, message: "请输入名称!" }]}
            >
              <Input />
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
