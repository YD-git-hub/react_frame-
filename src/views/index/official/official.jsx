import  React,{Component} from 'react';
// import { Link } from 'react-router-dom';
export default class official extends Component{
  constructor(props){
    super(props)
    this.state={
      ccc:'跳转C页面'
    }
  }
  fn=()=>{
    // this.setState({ccc:this.state.ccc+1})
    console.log(222)
    this.props.history.push('/Home/index')
  }
  render() {
    return (
      <div>
        <button onClick={this.fn}>{this.state.ccc}</button>
      </div>
    );
  };
};
