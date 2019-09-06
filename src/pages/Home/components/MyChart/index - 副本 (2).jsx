import React from 'react';
import IceContainer from '@icedesign/container';
import ReactEcharts from 'echarts-for-react';
import echarts from 'echarts';

const commerce =  require('./images/ask.png');
const social_security = require('./images/ask.png');
const land_tax = require('./images/ask.png');
const police = require('./images/ask.png');
const data_clound = require('./images/ask.png');

const uploadedDataURL = "/asset/get/s/data-1479697763933-ByhDrJlGx.json";


export default function MyChart() {
    const targetCoord = [1000, 140];
    const curveness = 0.2;
    const linesData = [];
    const categories = [{
        name: '流入中',
        label: {
            normal: {
                fontSize: '14',
                distance:-2,    
            }
        },
    }, {
        name: '暂无流入',
        label: {
            normal: {
                fontSize: '14',
                distance:2, 
            }
        },
    }]

    const item = {
        name: "数据中心",
        value: targetCoord,
        symbolSize: [110, 88],
        symbol: 'image://' + data_clound,
        symbolOffset: ['-20%', '-20%'],
        symbolKeepAspect: true,
        z:22,
        label: {
            normal: {
                fontSize: '16'
            }
        },
    }
    var items = []; //let a = 0;a<graphData.length;a++
    var graphData = [{
        "name": '公安',
        "speed": '',
        "imgUrl": police
    }, {
        "name": '地税',
        "speed": '',
        "imgUrl": land_tax
    }, {
        "name": '工商',
        "speed": '50kb/s',
        "imgUrl": commerce
    }, {
        "name": '社保',
        "speed": '50kb/s',
        "imgUrl": social_security
    }];
    for(let a = graphData.length - 1; a >= 0; a--) {
        let objectGraph = {};
        //得到社保的判断
        var valueMax = (graphData.length - 1 - a) * 100; //valueMax的值影响输入的值
        if(graphData[a].speed == "undefined" || graphData[a].speed == "") {
            objectGraph = {
                name: graphData[a].name,
                category: 1,
                value: [0, valueMax],
                symbolSize: [35,33],
                symbol: 'image://' + graphData[a].imgUrl,
                symbolOffset: ['-90%', '50%'],
                symbolKeepAspect: true,
            }
        } else {
            objectGraph = {
                name: graphData[a].name,
                category: 0,
                active: true,
                speed: '50kb/s',
                value: [0, valueMax],
                symbolSize: [35,33],
                symbol: 'image://' + graphData[a].imgUrl,
                symbolOffset: ['-90%', '50%'],
                symbolKeepAspect: true
            }
        }
        items.push(objectGraph)
    }

    const data = items.concat([item]);
    items.forEach(function(el) {
        if(el.active) {
            linesData.push([{
                coord: el.value
            }, {
                coord: targetCoord
            }])
        }
    })

    const links = items.map((el) => {
        return {
            source: el.name,
            target: item.name,
            speed: el.speed,
            lineStyle: {
                normal: {
                    color: el.speed ? '#20b4f4' : '#20b4f4',
                    curveness: curveness,
                }
            },
        }
    });

   
	const getOption = () => {
		
        return {
            backgroundColor:"#000",
        legend: [{
            formatter: function(name) {
                return echarts.format.truncateText(name, 100, '14px Microsoft Yahei', '…');
            },
            textStyle: {
                color: '#fff',
                fontSize: 14
            },
            itemGap: 25,
            itemWidth: 10,
            selectedMode: false,
            left: 0,
            data: categories.map(function(el) {
                return {name:el.name,icon:'circle'}
            })
        }],
        grid:{
            top:"16%",
            bottom:"16%",
        },
        color: [
            '#20b4f4',
            '#f9f48e'
        ],
        xAxis: {
            show: false,
            type: 'value'
        },
        yAxis: {
            show: false,
            type: 'value'
        },
        series: [{
            type: 'graph',
            layout: 'none',
            coordinateSystem: 'cartesian2d',
            symbolSize: 60,
            z: 1,
            edgeLabel: {
                normal: {
                    show: true,
                    textStyle: {
                        fontSize: 14,
                        color:"#fff",//50kb的文字
                    },
                    formatter: function(params) {
                        let txt = ''
                        if(params.data.speed !== undefined) {
                            txt = params.data.speed
                        }
                        return txt
                    },
                }
            },
            label: {
                normal: {
                    show: true,
                    position: 'top',
                    color: '#fff',
                    distance:2
                }
            },
            lineStyle: {
                normal: {
                    width: 2,
                    curveness:0.3,
                    shadowColor: 'none'
                },
            },
            edgeSymbol: ['none', 'none'],
            edgeSymbolSize: 8,
            data: data,
            links: links,
            categories: categories
        }, {
            name: 'A',
            type: 'lines',
            coordinateSystem: 'cartesian2d',
            z: 1,
            effect: {
                show: true,
                smooth: false,
                trailLength: 0,
                symbol: 'pin',
                color: 'rgba(32,180,244,0.8)',
                symbolSize: 40
            },
            lineStyle: {
                normal: {
                    color: '#a6c84c',
                    width: 1,
                    opacity: 0.4,
                    curveness: 0.2
                   
                }
            },
            data: linesData
         }]
        };
    };

	return (
    <div className="pie-line-chart">
      <IceContainer>
        <ReactEcharts option={getOption()} style={{ height: '700px' ,backgroundColor: "#03141c"}} />
      </IceContainer>
    </div>
  );
}
    
