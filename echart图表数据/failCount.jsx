import React, { PureComponent } from 'react'
import ReactECharts from 'echarts-for-react';

export default class FailCount extends PureComponent {

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
                        dimensions: ['product', 'NSCO', 'appAware', 'mCloud'],
                        source: [
                            { product: '25', 'NSCO': 0.1, 'appAware': 1, 'mCloud': 2 },
                            { product: '50', 'NSCO': 1, 'appAware': 3, 'mCloud': 5 },
                            { product: '75', 'NSCO': 1, 'appAware': 4, 'mCloud': 8 },
                            { product: '100', 'NSCO': 2, 'appAware': 6, 'mCloud': 10 }
                        ]
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
                name: '平 均 失 败 个 数（个）',
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
                nameGap:'30'
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
