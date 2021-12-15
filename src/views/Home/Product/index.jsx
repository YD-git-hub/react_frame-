import React, { Component } from "react";
import "./index.less";
import { Button, Input, Table, Pagination, Switch, Space, Modal } from "antd";
import { ExclamationCircleOutlined } from "@ant-design/icons";
const { confirm } = Modal;
export default class Product extends Component {
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
          title: "报关单",
          dataIndex: "imgs",
          key: "imgs",
          render: (secord) => (
            <img
              onClick={() => {
                this.reviewImages(secord);
              }}
              width="80px"
              src={secord}
              alt=""
            />
          ),
        },
        {
          title: "质检报告",
          dataIndex: "imgs",
          key: "imgs",
          render: (secord) => (
            <img
              onClick={() => {
                this.reviewImages(secord);
              }}
              width="80px"
              src={secord}
              alt=""
            />
          ),
        },
        {
          title: "产品类型",
          dataIndex: "name",
          key: "name",
        },
        {
          title: "产品名称",
          dataIndex: "sex",
          key: "sex",
        },
        {
          title: "规格",
          dataIndex: "phone",
          key: "phone",
        },
        {
          title: "状态",
          dataIndex: "stautus",
          key: "stautus",
          render: (text, record, stautus) => (
            <Switch
              size="small"
              checked={stautus}
              onChange={(boolean) => {
                return this.SwitchChange(text, record, boolean);
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
                  this.addproduct("编辑产品", record);
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
          time: "2021-02-02",
          name: "John Brown",
          imgs: "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png",
          sex: "男",
          phone: "187554255652",
          stautus: false,
          job: "在职",
        },
        {
          key: "2",
          time: "2021-02-02",
          name: "John Brown",
          sex: "女",
          phone: "187554255652",
          stautus: true,
          job: "离职",
        },
      ],
      moduleTitle: "新增",
      previewVisible: false,
      previewImage: "",
    };
  }
  //   批量导入
  tolead = () => {
    console.log("批量导入");
  };
  //   导出模板
  derive = () => {
    console.log("导出模板");
  };
  //   查询和重置
  demand = (value) => {
    console.log(value);
  };
  //  添加产品 和 编辑
  addproduct = (value) => {
    console.log(value);
    this.props.history.push( { pathname: "/Home/addoroduct", state: { type: 1 } });
  };
  //   批量录入报关单和质检报告
  batchEntry = (value) => {
    console.log(value);
  };
  // 批量操作
  onSelectChange = (selectedRowKeys) => {
    console.log("selectedRowKeys changed: ", selectedRowKeys);
    this.setState({ selectedRowKeys });
  };
  //   查看图片
  reviewImages = (record) => {
    this.setState({ previewVisible: true });
    this.setState({ previewImage: record });
  };
  //   关闭图片弹窗
  handleCancel = () => this.setState({ previewVisible: false });
  // 开关状态
  SwitchChange = (text, record, boolean) => {
    console.log(text, record, boolean);
    record.stautus = boolean;
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
      <div className="product">
        <div className="product_header justify-start">
          <Button onClick={this.tolead}>批量导入</Button>
          <Button type="primary" onClick={this.derive}>
            导出模板
          </Button>
        </div>
        <div className="product_name justify-start">
          <div className="name_left">
            <span>产品名称</span>
            <Input placeholder="请输入产品名称" />
          </div>
          <div className="name_right justify-start">
            <Button
              type="primary"
              onClick={() => {
                this.demand("查询");
              }}
            >
              查询
            </Button>
            <Button
              onClick={() => {
                this.demand("重置");
              }}
            >
              重置
            </Button>
          </div>
        </div>
        <div className="product_add justify-start">
          <Button
            type="primary"
            onClick={() => {
              this.addproduct("添加产品");
            }}
          >
            添加产品
          </Button>
          <Button
            onClick={() => {
              this.batchEntry("批量录入报关单");
            }}
          >
            批量录入报关单
          </Button>
          <Button
            onClick={() => {
              this.batchEntry("批量录入质检报告");
            }}
          >
            批量录入质检报告
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
          visible={this.state.previewVisible}
          title="查看图片"
          footer={null}
          onCancel={this.handleCancel}
        >
          <img
            alt="example"
            style={{ width: "100%" }}
            src={this.state.previewImage}
          />
        </Modal>
      </div>
    );
  }
}
