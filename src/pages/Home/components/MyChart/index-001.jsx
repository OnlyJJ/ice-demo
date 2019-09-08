import React from 'react';
import IceContainer from '@icedesign/container';
import ReactEcharts from 'echarts-for-react';
import echarts from 'echarts';

const ris =  require('./images/5.png');
const lis = require('./images/4.png');
const pacs = require('./images/3.png');
const his = require('./images/his.png');
const emr = require('./images/2.png');
const tj = require('./images/2.png');
const qt = require('./images/2.png');
const dwh = require('./images/1.png');
 

export default function MyChart() {
    var geoCoordMap = {
        'RIS': [135.8432, 940.01165],
        'LIS': [135.00461, 760.01165],
        'PACS':[135.00461, 580.08395],
        'HIS': [133.8432, 360.08395],
        'EMR': [135.24717, 190.62063],
        'QT': [135.24717, 30.62063],
        'DWH': [722.8432, 512.08395]
    };

    var lines = [
    {
        name : "ris数据采集",
        label: {
            show: true,
            position: 'middle',
            color: '#FFD39B',
        },
        coords: [
            geoCoordMap['RIS'],
            geoCoordMap['DWH']
        ],
        effect: {
            period: 4.7,
        },
        lineStyle: {
            normal: {
                curveness: 0.3
            }
        },
    },{
        name : "lis数据采集",
        label: {
            show: true,
            position: 'middle',
            color: '#FFD39B',
        },
        coords: [
            geoCoordMap['LIS'],
            geoCoordMap['DWH']
        ],
        effect: {
            period: 4.7,
        },
        lineStyle: {
            normal: {
                curveness: 0.2
            }
        },
    },{
        name : "pacs数据采集",
        label: {
            show: true,
            position: 'middle',
            color: '#FFD39B',
        },
        coords: [
            geoCoordMap['PACS'],
            geoCoordMap['DWH']
        ],
        effect: {
            period: 4,
            trailLength: 0,
        },
        lineStyle: {
            normal: {
                curveness: 0.1
            }
        },
    },{
        name : "his数据采集",
        label: {
            show: true,
            position: 'middle',
            color: '#FFD39B',
        },
        coords: [
            geoCoordMap['HIS'],
            geoCoordMap['DWH']
        ],
        effect: {
            period: 4.7,
        },
        lineStyle: {
            normal: {
                curveness: 0
            }
        },
       
    },{
        name : "emr数据采集",
        label: {
            show: true,
            position: 'middle',
            color: '#FFD39B',
        },
        coords: [
            geoCoordMap['EMR'],
            geoCoordMap['DWH']
        ],
        effect: {
            period: 4.7,
        },
        lineStyle: {
            normal: {
                curveness: -0.1
            }
        },
    },{
        name : "qt数据采集",
        label: {
            show: true,
            position: 'middle',
            color: '#FFD39B',
        },
        coords: [
            geoCoordMap['QT'],
            geoCoordMap['DWH']
        ],
        effect: {
            period: 4.7,
        },
        lineStyle: {
            normal: {
                curveness: -0.2
            }
        },
    },
    
]

   


   
const getOption = () => {
		
    return {
        backgroundColor:"#000", 
        grid:{
            top: 10,
            bottom: 10,
            left: 10,
            right: 10,
            width: 682,
            height: 595,
        },
        xAxis: {
            show: false,
            min: 0,
            max: 1000,
            position: 'top',
            axisPointer: {
                show: true
            }
        },
        yAxis: {
            show: false,
            min: 0,
            max: 1000,
            axisPointer: {
                show: true
            }
        },
        
        // 线条动画
        series: [
            {
                // 线条
                type: 'lines',
                // 'cartesian2d' 二维坐标系（笛卡尔坐标系）
                // 'geo' 地理坐标系，通过geoIndex指定相应的地理z坐标系组件
                coordinateSystem: 'cartesian2d',
                zlevel: 1,

                // 标签
                // label: {}

                // 动画效果
                effect: {
                    show: true,
                    period: 4, //特效动画的时间，单位为 s
                    trailLength: 0.3, //特效尾迹的长度。0~1数值越大尾迹越长
                    color: '#64f2ff',
                    symbolSize: 20, // 特效大小
                    symbol: 'pin'   // 特效图形
                },
                // 线条颜色
                lineStyle: {
                    normal: {
                        // 普通模式
                       // color: '#24f2ff',
                       // 渐变模式
                      
                        width: 1,
                        curveness: 0.3
                    },

                },
                data: lines
            }
        ],

        // 图片
        graphic: [
            {
                type: 'image',
                position: [500, 250],
                style: {
                    image: dwh,
                }
            },{
                type: 'text',
                position: [530, 344],
                style: {
                    text: '数据中心',
                    fill: '#FFD700',
                    font: 'italic small-caps bold 16px/2 cursive',
                }
            },
            {
                type: 'image',
                position: [50, 20],
                style: {
                    image: ris,
                }
            },{
                type: 'text',
                position: [50, 60],
                style: {
                    text: 'RIS系统',
                    fill: '#FFD700',
                    font: 'italic small-caps bold 16px/2 cursive',
                }
            },
            {
                type: 'image',
                position: [50, 120],
                style: {
                    image: lis,
                }
            },{
                type: 'text',
                position: [50, 160],
                style: {
                    text: 'LIS系统',
                    fill: '#FFD700',
                    font: 'italic small-caps bold 16px/2 cursive',
                }
            },
            {
                type: 'image',
                position: [50, 220],
                style: {
                    image: pacs,
                }
            },{
                type: 'text',
                position: [50, 260],
                style: {
                    text: 'PACS系统',
                    fill: '#FFD700',
                    font: 'italic small-caps bold 16px/2 cursive',
                }
            },
            {
                type: 'image',
                position: [50, 350],
                style: {
                    image: his,
                }
            },{
                type: 'text',
                position: [50, 390],
                style: {
                    text: 'HIS系统',
                    fill: '#FFD700',
                    font: 'italic small-caps bold 16px/2 cursive',
                }
            },
            {
                type: 'image',
                position: [50, 450],
                style: {
                    image: emr,
                }
            },{
                type: 'text',
                position: [50, 490],
                style: {
                    text: 'EMR系统',
                    fill: '#FFD700',
                    font: 'italic small-caps bold 16px/2 cursive',
                }
            },
            {
                type: 'image',
                position: [50, 550],
                style: {
                    image: qt,
                }
            },{
                type: 'text',
                position: [50, 590],
                style: {
                    text: 'QT系统',
                    fill: '#FFD700',
                    font: 'italic small-caps bold 16px/2 cursive',
                }
            },
            
        ]
    };

    chart.on('click', function (params) {
                     console.log(params.info);
                }); 
};
	return (
    <div className="pie-line-chart">
      <IceContainer>
        <ReactEcharts option={getOption()} style={{ height: '700px' ,backgroundColor: "#03141c"}} />
      </IceContainer>
    </div>
  );
}
    
