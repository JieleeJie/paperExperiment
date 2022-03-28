import React, { PureComponent } from 'react'
import ReactECharts from 'echarts-for-react';

export default class Time extends PureComponent {

    getOption = () => {
        let option = {
            legend: {},
            tooltip: {},
            toolbox:{
                feature:{
                    saveAsImage:{}
                }
            },
            dataset: {
                source: [
                    ['function', 'NSCO', 'appAware', 'mCloud'],
                    ['10', 16, 26, 40],
                    ['20', 35, 50, 89],
                    ['30', 54, 77, 126],
                    ['40', 69, 101, 163],
                    ['50', 89, 127, 210],
                    ['60', 105, 155, 246],
                    ['70', 123, 178, 296],
                    ['80', 142, 203, 335],
                    ['90', 158, 225, 372],
                    ['100', 182, 256, 420]
                ],
            },
            xAxis: {
                type: 'category',
                axisLabel:{
                    fontSize:'14',
                    fontWeight:'bold'
                },
                name: '任务数量（个）',
                nameLocation: 'middle',
                nameTextStyle: {
                    color:'black',
                    fontSize: '16',
                    fontWeight: '550',
                    lineHeight: '20'
                },
                nameGap:'30'
            },
            yAxis: {
                name: '平 均 响 应 时 间（秒）',
                axisLabel:{
                    fontSize:'14',
                    fontWeight:'bold'
                },
                nameLocation: 'middle',
                nameTextStyle: {
                    color:'black',
                    fontSize: '16',
                    fontWeight: '550',
                    lineHeight: '20',
                },
                nameGap:'40'
            },
            // Declare several bar series, each will be mapped
            // to a column of dataset.source by default.
            series: [
                {type: 'bar'},
                {type: 'bar'},
                {type: 'bar'}
            ]
        };
        return option
    }


    render() {
        return (
            <>
                <ReactECharts
                    option={this.getOption()}
                    style={{ height: '100%', width: '100%' }}
                />
            </>
        )
    }
}
