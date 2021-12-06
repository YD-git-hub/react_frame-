import  React,{Component} from 'react';
import './index.less';
import { Link } from 'react-router-dom';
import {collectPointdata} from "../../../axios/api"
import { Button } from 'element-react';
class index extends Component{
  constructor(props){
    super(props)
    this.state={
      ccc:'跳转B页面'
    }
  }
  fn=()=>{
    // this.setState({ccc:this.state.ccc+1})
    // this.props.history.push('/official')
    collectPointdata({code:'86.888.8888/20210000000035'}).then(res=>{
      console.log(res)
    })
  }
  render() {
    return (
      <div>
        <Button type="primary" onClick={this.fn}>主要按钮</Button>
        <Link to='/official'><button>{this.state.ccc}</button></Link>
      </div>
    );
  };
};
export default index
