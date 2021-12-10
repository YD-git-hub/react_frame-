import React, { Component} from "react";
import Upload from "@/components/Upload/Upload.jsx";
import ClientMd from "../ClientMd/ClientMd"
import Materials from "../Materials/Materials"
import { Form, Table, Input, Space, Image, Button,Select,Modal,PageHeader } from "antd";
import { EyeOutlined } from "@ant-design/icons";
const { TextArea } = Input;
const { Option } = Select;
const layout = {
  labelCol: {
    span: 2,
  },
  wrapperCol: {
    span: 22,
  },
};
const tailLayout = {
  wrapperCol: {
    offset: 10,
    span: 14,
  },
};
class business_datail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      columns: [
        {
          title:"序号",
          dataIndex:"key",
          key:"key"
        },
        {
          title: "品牌名称",
          dataIndex: "name",
          key: "name",
        },
        {
          title: "原材料名称",
          dataIndex: "age",
          key: "age",
        },
        {
          title: "型号",
          dataIndex: "address",
          key: "address",
        },
        {
          title: "家具投影面积",
          key: "mianji",
          render: (text, record) => (
            <Space size="small">
              <Input placeholder="请输入面积" readOnly={this.props.location.state.type !== 2} type="number"  style={{width:120}}  /><span>平方</span>
            </Space>
            
          ),
        },
        this.action()
      ],
      data: [
        {
          key: "1",
          name: "John Brown",
          age: 32,
          address: "New York No. 1 Lake Park",
        },
        {
          key: "2",
          name: "Jim Green",
          age: 42,
          address: "London No. 1 Lake Park",
        },
        {
          key: "3",
          name: "Joe Black",
          age: 32,
          address: "Sidney No. 1 Lake Park",
        },
      ],
      value: "aaaa",
      form: {
        account: "",
        pass: "",
        company_name: "",
        company_type: "",
        linkman: "",
        phone: "",
      },
      kehuModalShow:false,
      materialsModalShow:false
    };
  }
  formRef = React.createRef();
  componentDidMount() {
    if (this.props.location.state.type) {
      console.log(this.props.location.state.type);
    }
  }
  action=()=>{
    return this.props.location.state.type === 2 ? {
      title: "操作",
      key: "action",
      render: (text, record) => (
        <Space size="middle">
          <Button
            size="small"
            type="link"
            onClick={() => {
              return this.check(record, 1);
            }}
          >
            编辑
          </Button>
          <Button
            size="small"
            type="link"
            danger
            onClick={() => {
              return this.check(record, 2);
            }}
          >
            删除
          </Button>
        </Space>
      ),
    } : {}
  }
  check=(item, id)=>{
    console.log(item);
    switch (id) {
      case 1:
       console.log('编辑')
        break;
      case 2:
        console.log("删除");
        break;
      default:
        console.log(22);
        break;
    }
  }
  // 上传列表
  upload_list = (list) => {
    console.log(list, 333);
  };
  onFinish = (values) => {
    console.log(values,1);
    Modal.error({
      title: '无法提交',
      content: '订单信息不完整,请补全后再保存',
    });
  };
  onReset = () => {
    this.formRef.current.resetFields();
  };
  kuhuonOk=(e)=>{
    console.log(e)
  }
  // 客户
  kehupitchradio=(id)=>{
    console.log(id,444)
  }
  materialsOk=(e)=>{
    console.log(e)
  }
  materialspitchradio=(id)=>{
    console.log(id,666)
  }
  render() {
    return (
      <div className="business">
        <PageHeader
          className="site-page-header"
          onBack={() => this.props.history.go(-1)}
          title="返回"
        />
        <Form
          {...layout}
          ref={this.formRef}
          name="control-ref"
          onFinish={this.onFinish}
        >
          {this.props.location.state.type === 2 ? (
            <Form.Item label="客户信息">
              <Button type="primary" onClick={()=>{this.setState({kehuModalShow:true})}}>选择客户</Button>
            </Form.Item>
          ) : null}
          <Form.Item
            name="account"
            label="客户姓名"
            rules={[
              {
                required: true,
                message: "请输入客户姓名",
              },
            ]}
          >
            <Input placeholder="请输入客户姓名" style={{width:380}} readOnly={this.props.location.state.type !== 2} />
          </Form.Item>
          <Form.Item
            name="phone"
            label="联系电话"
            rules={[
              {
                required: true,
                message: "请输入联系电话",
              },
            ]}
          >
            <Input placeholder="请输入联系电话" style={{width:380}} readOnly={this.props.location.state.type !== 2} />
          </Form.Item>
          <Form.Item
            name="company_name"
            label="客户地址"
            rules={[
              {
                required: true,
                message: "请输入客户地址",
              },
            ]}
          >
            <TextArea rows={2} style={{width:380}}  readOnly={this.props.location.state.type !== 2}/>
          </Form.Item>
          <Form.Item
            name="company_type"
            label="生产工厂"
            rules={[
              {
                required: true,
                message:"请选择生产工厂"
              },
            ]}
            >
              <Select
                placeholder="请选择生产工厂"
                allowClear
                style={{width:380}}
                disabled={this.props.location.state.type !== 2}
              >
                <Option value="male">male</Option>
                <Option value="female">female</Option>
                <Option value="other">other</Option>
              </Select>
          </Form.Item>
          <Form.Item label="图纸">
            {this.props.location.state.type === 2 ? (
              <div style={{width:460}}>
                 <Upload upload_list={this.upload_list} />
              </div>
            ) : (
              <Image
                width={100}
                src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
                preview={{
                  mask: (
                    <div>
                      <EyeOutlined />
                      <span>预览</span>
                    </div>
                  ),
                }}
              />
            )}
          </Form.Item>
          <Form.Item label="板材">
            {this.props.location.state.type === 2 ? (
              <Button type="primary" onClick={()=>{this.setState({materialsModalShow:true})}}>选择原材料</Button>
            ) : null}
          </Form.Item>
          <Form.Item>
            <Table
              style={{ paddingLeft: 56 }}
              columns={this.state.columns}
              dataSource={this.state.data}
            />
          </Form.Item>

          {this.props.location.state.type === 2 ? (
            <Form.Item {...tailLayout}>
              <Space size="middle">
                <Button type="primary" htmlType="submit">
                  保存并提交
                </Button>
                <Button htmlType="button" onClick={this.onReset}>
                  取消
                </Button>
              </Space>
            </Form.Item>
          ) : null}
        </Form>
        <Modal title="选择客户" visible={this.state.kehuModalShow} onOk={this.kuhuonOk} onCancel={()=>{this.setState({kehuModalShow:false})}}  width={1000} cancelText="取消"  okText="确定">
          <ClientMd  Selection={true}  kehupitchradio={this.kehupitchradio}/>
        </Modal>
        <Modal title="选择原材料" visible={this.state.materialsModalShow} onOk={this.materialsOk} onCancel={()=>{this.setState({materialsModalShow:false})}}  width={1000} cancelText="取消"  okText="确定">
          <Materials  Selection={true}  materialspitchradio={this.materialspitchradio}/>
        </Modal>
      </div>
    );
  }
}

export default business_datail;
