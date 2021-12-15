import React, { Component } from "react";
import "./index.less";
import { Button, Table, Pagination, Space, Modal,Form,Input } from "antd";
import { ExclamationCircleOutlined } from "@ant-design/icons";
const { confirm } = Modal;
const layout = {
    labelCol: {
      xs: { span: 24 },
      sm: { span: 8 },
    },
    wrapperCol: {
      xs: { span: 24 },
      sm: { span: 16 },
    },
  };
export default class poroductType extends Component {
  formRef = React.createRef();
  constructor(props) {
    super(props);

    this.state = {
      columns: [
        {
          title: "产品名称",
          dataIndex: "sex",
          key: "sex",
        },
        {
          title: "操作",
          key: "action",
          render: (text, record) => (
            <Space size="middle">
              <Button
                size="small"
                type="link"
                onClick={() => {
                  this.audit_btn("编辑", record);
                }}
              >
                编辑
              </Button>
              <Button
                size="small"
                type="text"
                onClick={() => {
                  return this.check(record);
                }}
              >
                删除
              </Button>
            </Space>
          ),
        },
      ],
      data: [
        {
          key: "1",
          sex: "男",
        },
        {
          key: "2",
          sex: "女",
        },
      ],
      moduleTitle: "新增",
      openInfo: false,
      loading: false,
      previewVisible: false,
      previewImage: "",
    };
  }
  //  添加产品 和 编辑
  addproduct = (value) => {
    console.log(value);
    this.props.history.push({
      pathname: "/Home/addoroduct",
      state: { type: 1 },
    });
  };
  // 批量操作
  onSelectChange = (selectedRowKeys) => {
    console.log("selectedRowKeys changed: ", selectedRowKeys);
    this.setState({ selectedRowKeys });
  };
  //删除商品
  check = (value) => {
    confirm({
      title: "Do you Want to delete these items?",
      icon: <ExclamationCircleOutlined />,
      content: "Some descriptions",
      onOk() {
        console.log(value);
      },
      onCancel() {
        console.log("Cancel");
      },
    });
  };
  // 分页器
  onpageSize = (page, pageSize) => {
    console.log(page, pageSize);
  };
  //   编辑按钮
  audit_btn = (name, value) => {
    this.setState({ openInfo: true });
    if (name === "新增") {
      this.setState({ moduleTitle: "新增" });
    } else if (name === "编辑") {
      this.setState({ moduleTitle: "编辑" });
      this.formRef.current.setFieldsValue({
        name:value.name,
        phone:value.phone,
        sex:value.sex,
        job:value.job,
      })
    }
  };
  // 确定按钮
  setVisible = () => {
    this.setState({ loading: true });
    setTimeout(() => {
      this.setState({ loading: false });
      this.setState({ openInfo: false });
    }, 1500);
  };
  //   关闭按钮
  handleCancel = () => {
    this.formRef.current.resetFields();
    this.setState({ openInfo: false });
  };
  render() {
    const { selectedRowKeys } = this.state;
    const locales = {
      selectionAll: "全选所有",
      selectInvert: "反选当页",
      selectNone: "清空所有",
    };
    const rowSelection = {
      selectedRowKeys,
      onChange: this.onSelectChange,
      selections: [
        Table.SELECTION_ALL,
        Table.SELECTION_INVERT,
        Table.SELECTION_NONE,
        {
          key: "odd",
          text: "选择奇数行",
          onSelect: (changableRowKeys) => {
            let newSelectedRowKeys = [];
            newSelectedRowKeys = changableRowKeys.filter((key, index) => {
              if (index % 2 !== 0) {
                return false;
              }
              return true;
            });
            this.setState({ selectedRowKeys: newSelectedRowKeys });
          },
        },
        {
          key: "even",
          text: "选择偶数行",
          onSelect: (changableRowKeys) => {
            let newSelectedRowKeys = [];
            newSelectedRowKeys = changableRowKeys.filter((key, index) => {
              if (index % 2 !== 0) {
                return true;
              }
              return false;
            });
            this.setState({ selectedRowKeys: newSelectedRowKeys });
          },
        },
      ],
    };
    return (
      <div className="poroductType">
        <div className="product_add justify-start">
          <Button
            type="primary"
            onClick={() => {
              this.audit_btn("添加");
            }}
          >
            添加产品
          </Button>
          <Button
          type="primary" danger
            onClick={() => {
              this.check("批量删除类型");
            }}
          >
            批量删除类型
          </Button>
        </div>
        <div className="table">
          <Table
            locale={locales}
            rowSelection={rowSelection}
            columns={this.state.columns}
            dataSource={this.state.data}
          />
          <div className="justify-center Pagination">
            <Pagination
              defaultCurrent={1}
              total={50}
              onChange={this.onpageSize}
            />
          </div>
        </div>
        <Modal
          title={this.state.moduleTitle}
          visible={this.state.openInfo}
          onCancel={this.handleCancel}
          forceRender={true}
          footer={null}
          width="600px"
        >
          <Form
            {...layout}
            ref={this.formRef}
            onFinish={this.setVisible}
            autoComplete="off"
          >
            <Form.Item
              label="联系电话"
              name="phone"
              rules={[{ required: true, message: "请输入联系电话!" }]}
            >
              <Input placeholder="请输入联系电话" />
            </Form.Item>

            <Form.Item wrapperCol={{ offset: 10, span: 18 }}>
              <div className="ModalButton ">
                <Button
                  style={{ marginRight: "10px" }}
                  onClick={this.handleCancel}
                >
                  取消
                </Button>
                <Button
                  type="primary"
                  htmlType="submit"
                  loading={this.state.loading}
                >
                  确定
                </Button>
              </div>
            </Form.Item>
          </Form>
        </Modal>
      </div>
    );
  }
}
