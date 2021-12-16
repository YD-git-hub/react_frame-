import React, { Component } from "react";
import ReactEcharts from "echarts-for-react";
export default class Echart extends Component {
  constructor(props){
    super(props)
    this.state={
      width:document.body.clientWidth-280
    }
  }
  getOption = () => {
    let category = [];
    let dottedBase = +new Date();
    let lineData = [];
    let barData = [];
    for (let i = 0; i < 20; i++) {
      let date = new Date((dottedBase += 3600 * 24 * 1000));
      category.push(
        [date.getFullYear(), date.getMonth() + 1, date.getDate()].join("-")
      );
      let b = Math.random() * 200;
      let d = Math.random() * 200;
      barData.push(b);
      lineData.push(d + b);
    }
    // option
    return {
      backgroundColor: "#ffffff",
      tooltip: {
        trigger: "axis",
        axisPointer: {
          type: "shadow",
        },
      },
      legend: {
        data: ["数据源", "数据源1"],
        textStyle: {
          color: "#ccc",
        },
      },
      xAxis: {
        data: category,
        axisLine: {
          lineStyle: {
            color: "#ccc",
          },
        },
      },
      yAxis: {
        splitLine: { 
            show: true,
            lineStyle:{
                type:'dashed'
            } 
        },
        axisLine: {
          lineStyle: {
            color: "#ccc",
          },
        },
      },
      series: [
        {
          name: "数据源",
          type: "line",
          showAllSymbol: true,
          symbol: "emptyCircle",
          itemStyle: {
            borderRadius: 5,
            color: "#FF873B"
          },
          symbolSize: 15,
          data: barData,
        },
        {
          name: "数据源1",
          type: "bar",
          barWidth: 10,
          itemStyle: {
            borderRadius: 5,
            color: "#AEAEB2",
          },
          data: barData,
        },
      ],
    };
  };
  componentDidMount() {
    // 监听窗口大小改变
    window.addEventListener('resize', this.handleResize)
  }
  handleResize = e => {
    this.setState({
      width:e.target.innerWidth-280
    })
  }
  render() {
    return (
      <div className="justify-center">
        <React.Fragment>
          <ReactEcharts
            style={{ minHeight: "400px",width:this.state.width}}
            option={this.getOption()}
            notMerge
            lazyUpdate
            theme={"theme_name"}
            // onChartReady={this.onChartReadyCallback}
            // onEvents={EventsDict}
          />
        </React.Fragment>
      </div>
    );
  }
}
