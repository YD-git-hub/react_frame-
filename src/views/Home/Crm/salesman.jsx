import React, { Component } from "react";
import "./index.less";
import {
  Input,
  Button,
  Switch,
  Space,
  Pagination,
  Table,
  Modal,
  Form,
  Radio
} from "antd";
const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};
export default class Salesman extends Component {
  formRef = React.createRef();
  constructor(props) {
    super(props);
    
    this.state = {
      columns: [
        {
          title: "序号",
          dataIndex: "key",
          key: "key",
        },
        {
          title: "创建时间",
          dataIndex: "time",
          key: "time",
        },
        {
          title: "业务员姓名",
          dataIndex: "name",
          key: "name",
        },
        {
          title: "性别",
          dataIndex: "sex",
          key: "sex",
        },
        {
          title: "联系电话",
          dataIndex: "phone",
          key: "phone",
        },
        {
          title: "状态",
          dataIndex: "stautus",
          key: "stautus",
          render: (text, record,stautus) => (
            <Switch
              size="small"
              checked={stautus}
              onChange={(boolean) => {
                return this.SwitchChange(text,record,boolean);
              }}
            />
          ),
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
                  return this.check(record, 2);
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
          time:"2021-02-02",
          name: "John Brown",
          sex: '男',
          phone: "187554255652",
          stautus:false,
          job:'在职'
        },
        {
          key: "2",
          time:"2021-02-02",
          name: "John Brown",
          sex: '女',
          phone: "187554255652",
          stautus:true,
          job:'离职'
        },
      ],
      moduleTitle: "新增",
      openInfo: false,
      loading: false,
    };
    
  }
  

  check = (value, text) => {
    console.log(value);
  };
  // 分页器
  onpageSize = (page, pageSize) => {
    console.log(page, pageSize);
  };
  // 开关
  SwitchChange = (text,record,boolean) => {
    console.log(text,record,boolean);
    record.stautus=boolean
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
  //   关闭按钮
  handleCancel = () => {
    this.formRef.current.resetFields();
    this.setState({ openInfo: false });
  };
  // 确定按钮
  setVisible = () => {
    this.setState({ loading: true });
    setTimeout(() => {
      this.setState({ loading: false });
      this.setState({ openInfo: false });
    }, 1500);
    
  };
  render() {
    return (
      <div className="salesman">
        <div className="salesman_header justify-start">
          <div className="justify-start">
            <span>业务员姓名:</span>
            <Input placeholder="请输入业务员姓名" />
          </div>
          <div className="justify-start">
            <span>联系电话:</span>
            <Input placeholder="请输入联系电话" />
          </div>
          <div className="justify-start">
            <Button type="primary">查询</Button>
            <Button>重置</Button>
          </div>
        </div>
        <div className="salesman_btn">
          <Button
            type="primary"
            onClick={() => {
              this.audit_btn('新增');
            }}
          >
            新增业务员
          </Button>
        </div>
        <div className="table">
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
          title={this.state.moduleTitle}
          visible={this.state.openInfo}
          onCancel={this.handleCancel}
          forceRender={true}
          footer={null}
        >
          <Form
            {...layout}
            ref={this.formRef}
            onFinish={this.setVisible}
            autoComplete="off"
          >
            <Form.Item
              label="销售名字"
              name="name"
              rules={[{ required: true, message: "请输入销售名字!" }]}
            >
              <Input placeholder="请输入销售名字" />
            </Form.Item>

            <Form.Item
              label="联系电话"
              name="phone"
              rules={[{ required: true, message: "请输入联系电话!" }]}
            >
              <Input placeholder="请输入联系电话" />
            </Form.Item>
            <Form.Item name="sex" label="性别" rules={[{ required: true, message: "请选择性别!" }]}>
              <Radio.Group>
                <Radio value="男">男</Radio>
                <Radio value="女">女</Radio>
              </Radio.Group>
            </Form.Item>
            <Form.Item name="job" label="在职状态" rules={[{ required: true, message: "请选择在职状态!" }]}>
              <Radio.Group>
                <Radio value="在职">在职</Radio>
                <Radio value="停职">停职</Radio>
                <Radio value="离职">离职</Radio>
              </Radio.Group>
            </Form.Item>
            <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
              <div className="ModalButton justify-end">
                <Button
                  style={{ marginRight: "10px" }}
                  onClick={this.handleCancel}
                >
                  取消
                </Button>
                <Button type="primary" htmlType="submit" loading={this.state.loading}>
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
