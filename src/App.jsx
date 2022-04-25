import './App.css';
import * as echarts from 'echarts';
import React from 'react';
import ReactDOM from "react-dom";

class Chart extends React.Component {
  componentDidMount() {
    var chartDom = ReactDOM.findDOMNode(this);
    console.log(chartDom);
    var chart = echarts.init(chartDom);
    var option;

    option = {
      xAxis: [
        {
          type: 'category',
          data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
        }
      ],
      yAxis: [
        {
          type: 'value',
          name: 'Precipitation',
          min: 0,
          max: 250,
          interval: 50,
          axisLabel: {
            formatter: '{value} ml'
          }
        },
        {
          type: 'value',
          name: 'Temperature',
          min: 0,
          max: 25,
          interval: 5,
          axisLabel: {
            formatter: '{value} °C'
          }
        }
      ],
      series: [
        {
          name: 'Evaporation',
          type: 'bar',
          tooltip: {
            valueFormatter: function (value) {
              return value + ' ml';
            }
          },
          data: [
            2.0, 5.0, 7.0, 23.5, 25.5, 75.0, 140, 160, 32.5, 20.0, 6.5, 3.5
          ]
        },
        {
          name: 'Precipitation',
          type: 'bar',
          tooltip: {
            valueFormatter: function (value) {
              return value + ' ml';
            }
          },
          data: [
            2.5, 6.0, 9.0, 26, 30, 70, 175, 180, 48.5, 18.5, 6.0, 2.5
          ]
        },
        {
          name: 'Temperature',
          type: 'line',
          yAxisIndex: 1,
          tooltip: {
            valueFormatter: function (value) {
              return value + ' °C';
            }
          },
          data: [2.0, 2.5, 3.5, 4.5, 6.5, 10.5, 20.5, 23.5, 23.0, 16.5, 12.0, 6.5]
        }
      ],
      
      legend: {
        data: ['Evaporation', 'Precipitation', 'Temperature']
      },
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'cross',
          crossStyle: {
            color: '#999'
          }
        }
      },
    };

    option && chart.setOption(option);
  }
  render() {
    return <div className="" style={{ width: "600px", height: "400px" }}></div>
  }
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        Alpha AI Test

        <Chart />
      </header>
    </div>
  );
}

export default App;
