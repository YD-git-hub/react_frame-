import React, { Component } from 'react'
import { Result, Button} from 'antd';
import { Link } from "react-router-dom";
export default class error extends Component {
    render() {
        const {state}=this.props.location
        return (
            <div>
                <Result
                    status="404"
                    title="404"
                    subTitle="对不起，您访问的页面不存在。"
                    extra={<Link to={{pathname:state.type===1 ? "/" : "/Home/index" }} ><Button type="primary">返回首页</Button></Link> }
                />
            </div>
        )
    }
}
