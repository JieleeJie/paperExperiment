import React, { PureComponent } from 'react'
import ReactECharts from 'echarts-for-react';

export default class Energy extends PureComponent {

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
                    ['10', 137, 198, 334],
                    ['20', 262, 380, 722],
                    ['30', 356, 585, 989],
                    ['40', 530, 747, 1240],
                    ['50', 736, 939, 1653],
                    ['60', 836, 1155, 1895],
                    ['70', 945, 1342, 2313],
                    ['80', 1004, 1512, 2566],
                    ['90', 1135, 1717, 2899],
                    ['100', 1338, 1927, 3247]
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
                name: '能 耗（毫瓦）',
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
                nameGap:'50'
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
