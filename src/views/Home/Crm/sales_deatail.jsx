import React, { Component } from "react";
import {
  Button,
  DatePicker,
  PageHeader,
  Table,
  Pagination,
  Space,
  Input,
  Modal,
  Form,
} from "antd";
// import moment from "moment";
import "moment/locale/zh-cn";
import locale from "antd/es/date-picker/locale/zh_CN";
const { TextArea } = Input;
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
export default class Sales_deatail extends Component {
  formRef = React.createRef();
  constructor(props) {
    super(props);

    this.state = {
      //   date: [moment("2021-01", "YYYY-MM"), moment("2021-01", "YYYY-MM")],
      columns: [
        {
          title: "序号",
          dataIndex: "key",
          key: "key",
        },
        {
          title: "收款时间",
          dataIndex: "name",
          key: "name",
        },
        {
          title: "收款金额",
          dataIndex: "phone",
          key: "phone",
        },
        {
          title: "备注",
          dataIndex: "job",
          key: "job",
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
          name: "John Brown",
          phone: "187554255652",
          job: "在职",
          moth: "2021-06",
          money: "20000",
        },
        {
          key: "2",
          name: "John Brown",
          phone: "187554255652",
          job: "离职",
          moth: "2021-07",
          money: "20007",
        },
      ],
      moduleTitle: "编辑",
      openInfo: false,
      loading: false,
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
    };
  }
  check = (value, text) => {
    console.log(value);
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
    } else if (name === "新增收款") {
      this.setState({ moduleTitle: "新增收款" });
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
      <div className="sales_deatail">
        <PageHeader
          className="site-page-header"
          onBack={() => this.props.history.go(-1)}
          title="返回"
        />
        <div className="salesman_header justify-between">
          <div className="justify-start">
            <span>选择月份:</span>
            <DatePicker picker="date" locale={locale} />
          </div>

          <div className="justify-start">
            <Button type="primary">查询</Button>
            <Button>重置</Button>
          </div>
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
          width="600px"
        >
          <Form
            {...layout}
            ref={this.formRef}
            onFinish={this.setVisible}
            autoComplete="off"
          >
            <div className="justify-between">
              <Form.Item
                name="date"
                label="收款时间"
                rules={[{ required: true, message: "请选择收款日期!" }]}
              >
                <DatePicker
                  style={{ width: 170 }}
                  picker="date"
                  locale={locale}
                />
              </Form.Item>

              <Form.Item
                label="收款金额"
                name="phone"
                rules={[{ required: true, message: "请输入收款金额!" }]}
              >
                <Input placeholder="请输入收款金额" />
              </Form.Item>
            </div>
            <Form.Item
              label="备注"
              name="note"
              labelCol={{ span: 4 }}
              wrapperCol={{ span: 20 }}
            >
              <TextArea rows={4} placeholder="请输入备注" />
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
