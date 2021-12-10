import React, { Component } from "react";
import Upload from "@/components/Upload/Upload.jsx"
import { Form, Input, Button, Select,Cascader,Space,PageHeader,Image} from 'antd';
import { EyeOutlined } from "@ant-design/icons";
const { Option } = Select;
const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};
const tailLayout = {
  wrapperCol: {
    offset: 8,
    span: 16,
  },
};
const options = [
  {
    value: 'zhejiang',
    label: 'Zhejiang',
    children: [
      {
        value: 'hangzhou',
        label: 'Hangzhou',
        children: [
          {
            value: 'xihu',
            label: 'West Lake',
          },
        ],
      },
    ],
  },
  {
    value: 'jiangsu',
    label: 'Jiangsu',
    children: [
      {
        value: 'nanjing',
        label: 'Nanjing',
        children: [
          {
            value: 'zhonghuamen',
            label: 'Zhong Hua Men',
          },
        ],
      },
    ],
  }
];
class business_datail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      form: {
        account: "",
        pass: "",
        company_name: "",
        company_type: "",
        linkman: "",
        phone: "",
      },
    };
  }
  formRef = React.createRef();
  componentDidMount() {
    // this.formRef.current.setFieldsValue({
    //   account: "张三",
    //   pass: "123456",
    //   company_name: "四川",
    //   company_type: "企业",
    //   linkman: "李四",
    //   phone: "17336867848",
    //   company_type1:['zhejiang', 'hangzhou', 'xihu']
    // });
  }
  onFinish = (values) => {
    console.log(values,1);
  };
  onReset = () => {
    this.formRef.current.resetFields();
  };
  onFill = () => {
    this.formRef.current.setFieldsValue({
      account: "张三",
      pass: "123456",
      company_name: "四川",
      company_type: "企业",
      linkman: "李四",
      phone: "17336867848",
      company_type1:['zhejiang', 'hangzhou', 'xihu']
    });
  };
  // 地区
  onCityChange=(value)=> {
    console.log(value);
  };
  // 上传列表
  upload_list=(list)=>{
    console.log(list,333)
  }
  render() {
    return (
      <div className="business_datail" style={{padding:'0px 20px'}}>
        <PageHeader
          className="site-page-header"
          onBack={() => this.props.history.go(-1)}
          title="返回"
        />
        <h2 style={{fontWeight:"bold"}}>{this.props.location.state.type===2 ?  "添加企业" : "企业认证资料"}</h2>
        <Form {...layout} ref={this.formRef} name="control-ref" onFinish={this.onFinish} layout="vertical">
        <Form.Item
        name="account"
        label="账号"
          rules={[
            {
              required: true,
              message:"请输入账号"
            },
          ]}
        >
          <Input placeholder="请输入账号"  readOnly={this.props.location.state.type!==2}/>
        </Form.Item>
        <Form.Item
        name="pass"
        label="密码"
          rules={[
            {
              required: true,
              message:"请输入密码"
            },
          ]}
        >
          <Input placeholder="请输入密码" readOnly={this.props.location.state.type!==2} />
        </Form.Item>
        <Form.Item
        name="company_name"
        label="企业名称"
          rules={[
            {
              required: true,
              message:"请输入企业名称"
            },
          ]}
        >
          <Input placeholder="请输入企业名称" readOnly={this.props.location.state.type!==2} />
        </Form.Item>
        <Form.Item
        label="营业执照"
        rules={[
          {
            required: true,
            message:"请选择营业执照"
          },
        ]}
        >
          {
            this.props.location.state.type!==2 ? <Image
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
            /> :<Upload upload_list={this.upload_list} />
          }
        </Form.Item>
        <Form.Item
        name="company_type"
        label="企业类型"
        rules={[
          {
            required: true,
            message:"请选择企业类型"
          },
        ]}
        >
          <Select
            placeholder="请选择企业类型"
            allowClear
            disabled={this.props.location.state.type!==2}
          >
            <Option value="male">male</Option>
            <Option value="female">female</Option>
            <Option value="other">other</Option>
          </Select>
        </Form.Item>
        <Form.Item
        name="company_type1"
        label="公司地址"
        rules={[
          {
            required: true,
            message:"请选择公司地址"
          },
        ]}
        >
          <Cascader options={options} onChange={this.onCityChange} placeholder="请选择公司地址" disabled={this.props.location.state.type!==2} />
        </Form.Item>
        <Form.Item
        name="company_name"
          rules={[
            {
              required: true,
              message:"请输入公司详细地址"
            },
          ]}
        >
          <Input placeholder="请输入公司详细地址"  readOnly={this.props.location.state.type!==2}/>
        </Form.Item>
        <Form.Item
        name="company_name"
        label="联系人"
          rules={[
            {
              required: true,
              message:"请输入联系人"
            },
          ]}
        >
          <Input placeholder="请输入联系人"  readOnly={this.props.location.state.type!==2}/>
        </Form.Item>
        <Form.Item
        name="phone"
        label="联系电话"
          rules={[
            {
              required: true,
              message:"请输入联系电话"
            },
          ]}
        >
          <Input placeholder="请输入联系电话" readOnly={this.props.location.state.type!==2} />
        </Form.Item>
        {
          this.props.location.state.type===2 ? <Form.Item {...tailLayout} >
            <Space size="middle">
              <Button type="primary" htmlType="submit">
                提交
              </Button>
              <Button htmlType="button" onClick={this.onReset}>
                重置
              </Button>
            </Space>
            <Button type="link" htmlType="button" onClick={this.onFill}>
              格式
            </Button>
          </Form.Item>  :null
        }
      </Form>
      </div>
    );
  }
}

export default business_datail;
