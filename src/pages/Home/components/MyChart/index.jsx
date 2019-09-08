import React from 'react';
import IceContainer from '@icedesign/container';
import ReactEcharts from 'echarts-for-react';
import echarts from 'echarts';

// 院内
const ris =  require('./images/256.png');
const lis = require('./images/045.png');
const pacs = require('./images/010.png');
const his = require('./images/LAN.png');
const emr = require('./images/017.png');
const tj = require('./images/5.png');
const qt = require('./images/014.png');
const dwh = require('./images/7.png'); 
const jcpt = require('./images/3344.png');

const fhq = require('./images/011.png');

// 院外
const qyyl = require('./images/56.png');
const ylt = require('./images/57311.png');
const sb = require('./images/15.png');

export default function MyChart() {
    // 坐标点
    var geoCoordMap = {
        'RIS': [120.8432, 940.01165],
        'LIS': [123.00461, 788.01165],
        'PACS':[123.00461, 630.08395],
        'HIS': [128.8432, 418.08395],
        'EMR': [116.24717, 260.62063],
        'QT': [120.24717, 99.62063],        
        'DWH': [622.8432, 535.08395],

        'JCPT': [960.8432, 545.08398],

        'FHQ1': [845.8432, 555.08398],
        'DWH1': [675.8432, 555.08395],
        'FHQ2': [845.8432, 515.08398],
        'DWH2': [675.8432, 515.08395],

        'FHQ3': [1058.8432, 555.08398],
        'DWH3': [1230.8432, 555.08395],
        'FHQ4': [1058.8432, 515.08398],
        'DWH4': [1230.8432, 515.08395],

        'FHQ5': [1345.8432, 523.08398],
        'YLT': [1675.8432, 885.08395],
        'QYYL': [1675.8432, 535.08395],
        'OTHER': [1680.8432, 135.08395],
    };

    // 属性（data）
    var group = [
        {
            label: {
                show: true,
                position: 'middle',
                color: '#FAFAFA',
            },
            coords: [
                geoCoordMap['GROUP2'],
                geoCoordMap['GROUP1']
            ],
            lineStyle: {
                normal: {
                    type: 'dashed',
                    curveness: 0
                }
            },
        }
    ]
    // 属性（data）
    var out = [
        {
            name : "数据对接",
            label: {
                show: true,
                position: 'middle',
                color: '#FAFAFA',
            },
            coords: [
                 geoCoordMap['YLT'],
                 geoCoordMap['FHQ5']
            ],
            effect: {
                period: 4,
            },
            lineStyle: {
                normal: {
                    type: 'dashed',
                    curveness: 0,
                    shadowColor: 'rgba(0, 0, 0, 0.5)',
                    shadowBlur: 10
                }
            },
        },
        {
            label: {
                show: true,
                position: 'middle',
                color: '#FAFAFA',
            },
            coords: [
                 geoCoordMap['FHQ5'],
                 geoCoordMap['YLT']
            ],
            effect: {
                period: 4,
            },
            lineStyle: {
                normal: {
                    type: 'dashed',
                    curveness: 0,
                    shadowColor: 'rgba(0, 0, 0, 0.5)',
                    shadowBlur: 10
                }
            },
        },
        {
            name : "数据对接",
            label: {
                show: true,
                position: 'middle',
                color: '#FAFAFA',
            },
            coords: [
                 geoCoordMap['FHQ5'],
                 geoCoordMap['QYYL']
            ],
            effect: {
                period: 4,
            },
            lineStyle: {
                normal: {
                    type: 'dashed',
                    curveness: 0,
                    shadowColor: 'rgba(0, 0, 0, 0.5)',
                    shadowBlur: 10
                }
            },
        },{
            label: {
                show: true,
                position: 'middle',
                color: '#FAFAFA',
            },
            coords: [
                geoCoordMap['QYYL'],
                 geoCoordMap['FHQ5']
            ],
            effect: {
                period: 4,
            },
            lineStyle: {
                normal: {
                    type: 'dashed',
                    curveness: 0,
                    shadowColor: 'rgba(0, 0, 0, 0.5)',
                    shadowBlur: 10
                }
            },
        },
        {
            name : "数据对接",
            label: {
                show: true,
                position: 'middle',
                color: '#FAFAFA',
            },
            coords: [
                 geoCoordMap['FHQ5'],
                 geoCoordMap['OTHER']
            ],
            effect: {
                period: 4,
            },
            lineStyle: {
                normal: {
                    type: 'dashed',
                    curveness: 0,
                    shadowColor: 'rgba(0, 0, 0, 0.5)',
                    shadowBlur: 10
                }
            },
        },{
            label: {
                show: true,
                position: 'middle',
                color: '#FAFAFA',
            },
            coords: [
                geoCoordMap['OTHER'],
                 geoCoordMap['FHQ5']
            ],
            effect: {
                period: 4,
            },
            lineStyle: {
                normal: {
                    type: 'dashed',
                    curveness: 0
                }
            },
        },
    ]

    // 集成平台
    var jenkins = [
        {
            name : "数据过滤",
            label: {
                show: true,
                position: 'middle',
                color: '#FAFAFA',
            },
            coords: [
                geoCoordMap['FHQ1'],
                geoCoordMap['DWH1']
            ],
            effect: {
                period: 4,
            },
            lineStyle: {
                normal: {
                    type: 'dashed',
                    curveness: 0
                }
            },
        },{
            label: {
                show: true,
                position: 'middle',
                color: '#FAFAFA',
            },
            coords: [
                geoCoordMap['DWH2'],
                geoCoordMap['FHQ2']
            ],
            effect: {
                period: 4,
            },
            lineStyle: {
                normal: {
                    type: 'dashed',
                    curveness: 0
                }
            },
        },{
            name: '对外接口',
            label: {
                show: true,
                position: 'middle',
                color: '#FAFAFA',
            },
            coords: [
                geoCoordMap['DWH3'],
                geoCoordMap['FHQ3']
            ],
            effect: {
                period: 4,
            },
            lineStyle: {
                normal: {
                    type: 'dashed',
                    curveness: 0
                }
            },
        },{
            name: '接口',
            label: {
                show: true,
                position: 'middle',
                color: '#FAFAFA',
            },
            coords: [
                geoCoordMap['FHQ4'],
                geoCoordMap['DWH4']
            ],
            effect: {
                period: 4,
            },
            lineStyle: {
                normal: {
                    type: 'dashed',
                    curveness: 0
                }
            },
        },

    ]

    // 防火墙
    var firewall = [
        {
            name : "数据清洗",
            label: {
                show: true,
                position: 'middle',
                color: '#FAFAFA',
            },
            coords: [
                geoCoordMap['FHQ1'],
                geoCoordMap['DWH1']
            ],
            effect: {
                period: 4,
            },
            lineStyle: {
                normal: {
                    type: 'dashed',
                    curveness: 0,
                    shadowColor: 'rgba(0, 0, 0, 0.5)',
                    shadowBlur: 10
                }
            },
        },{
            label: {
                show: true,
                position: 'middle',
                color: '#FAFAFA',
            },
            coords: [
                geoCoordMap['DWH2'],
                geoCoordMap['FHQ2']
            ],
            effect: {
                period: 4,
            },
            lineStyle: {
                normal: {
                    type: 'dashed',
                    curveness: 0
                }
            },
        },{
            name: '安全策略',
            label: {
                show: true,
                position: 'middle',
                color: '#FAFAFA',
            },
            coords: [
                geoCoordMap['DWH3'],
                geoCoordMap['FHQ3']
            ],
            effect: {
                period: 4,
            },
            lineStyle: {
                normal: {
                    type: 'dashed',
                    curveness: 0
                }
            },
        },{
            label: {
                show: true,
                position: 'middle',
                color: '#FAFAFA',
            },
            coords: [
                geoCoordMap['FHQ4'],
                geoCoordMap['DWH4']
            ],
            effect: {
                period: 4,
            },
            lineStyle: {
                normal: {
                    type: 'dashed',
                    curveness: 0
                }
            },
        },
    ]

    // 院内数据线
    var lines = [
    {
        name : "数据采集",
        label: {
            show: true,
            position: 'middle',
            color: '#FAFAFA',
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
                type: 'dashed',
                curveness: 0.3
            }
        },
    },{
        name : "数据采集",
        label: {
            show: true,
            position: 'middle',
            color: '#FAFAFA',
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
                type: 'dashed',
                curveness: 0.2
            }
        },
    },{
        name : "数据采集",
        label: {
            show: true,
            position: 'middle',
            color: '#FAFAFA',
        },
        coords: [
            geoCoordMap['PACS'],
            geoCoordMap['DWH']
        ],
        effect: {
            period: 4.7,
            trailLength: 0,
        },
        lineStyle: {
            normal: {
                type: 'dashed',
                curveness: 0.1
            }
        },
    },{
        name : "数据采集",
        label: {
            show: true,
            position: 'middle',
            color: '#FAFAFA',
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
                type: 'dashed',
                curveness: -0.1
            }
        },
       
    },{
        name : "数据采集",
        label: {
            show: true,
            position: 'middle',
            color: '#FAFAFA',
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
                type: 'dashed',
                curveness: -0.2
            }
        },
    },{
        name : "数据采集",
        label: {
            show: true,
            position: 'middle',
            color: '#FAFAFA',
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
                type: 'dashed',
                curveness: -0.3
            }
        },
    },
    
]

   
var planePath = 'path://M1705.06,1318.313v-89.254l-319.9-221.799l0.073-208.063c0.521-84.662-26.629-121.796-63.961-121.491c-37.332-0.305-64.482,36.829-63.961,121.491l0.073,208.063l-319.9,221.799v89.254l330.343-157.288l12.238,241.308l-134.449,92.931l0.531,42.034l175.125-42.917l175.125,42.917l0.531-42.034l-134.449-92.931l12.238-241.308L1705.06,1318.313z';

   
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
                    trailLength: 0.8, //特效尾迹的长度。0~1数值越大尾迹越长
                    color: '#64f2ff',
                    symbolSize: 11, // 特效大小
                    symbol: planePath
                    //symbol: 'pin'   // 特效图形
                },
                // 线条颜色
                lineStyle: {
                    normal: {
                        // 普通模式
                       color: '#E1F5FE',
                       // 渐变模式
                      
                        width: 0.8,
                        curveness: 0.3
                    },

                },
                data: lines
            },
            {
                // 线条
                type: 'lines',
                coordinateSystem: 'cartesian2d',
                zlevel: 1,

                // 标签
                // label: {}

                // 动画效果
                effect: {
                    show: true,
                    period: 4, //特效动画的时间，单位为 s
                    trailLength: 0.8, //特效尾迹的长度。0~1数值越大尾迹越长
                    color: '#64f2ff',
                    symbolSize: 11, // 特效大小
                    symbol: planePath
                    //symbol: 'pin'   // 特效图形
                },
                // 线条颜色
                lineStyle: {
                    normal: {
                        // 普通模式
                       color: '#E1F5FE',
                       // 渐变模式
                      
                        width: 0.8,
                        curveness: 0.3
                    },

                },
                data: firewall
            },
            {
                // 线条
                type: 'lines',
                coordinateSystem: 'cartesian2d',
                zlevel: 1,

                // 标签
                // label: {}

                // 动画效果
                effect: {
                    show: true,
                    period: 4, //特效动画的时间，单位为 s
                    trailLength: 0.8, //特效尾迹的长度。0~1数值越大尾迹越长
                    color: '#64f2ff',
                    symbolSize: 11, // 特效大小
                    symbol: planePath
                },
                // 线条颜色
                lineStyle: {
                    normal: {
                        // 普通模式
                       color: '#E1F5FE',
                       // 渐变模式
                        width: 0.8,
                        curveness: 0.3
                    },
                },
                data: out
            },
            // 特效
            {
                type: 'effectScatter',
                coordinateSystem: 'cartesian2d',
                name: 'test',
                zlevel: 2,
                rippleEffect: {
                    period: 4,
                    scale: 2.5,
                    brushType: 'stroke'
                },
                label: {
                    normal: {
                        show: true,
                        position: 'right',
                        formatter: '{b}'
                    }
                },

                symbolSize: '40',
                itemStyle: {
                    normal: {
                        color: '#0D6695',
                    }
                },
                data: [{
                    value: geoCoordMap['JCPT'],
                    symbol: 'image://' + jcpt,
                    symbolSize: [120,120]
                }]
            },
            {
                type: 'effectScatter',
                coordinateSystem: 'cartesian2d',
                name: 'test',
                zlevel: 2,
                rippleEffect: {
                    period: 4,
                    scale: 2.5,
                    brushType: 'stroke'
                },
                label: {
                    normal: {
                        show: true,
                        position: 'right',
                        formatter: '{b}'
                    }
                },

                symbolSize: '40',
                itemStyle: {
                    normal: {
                        color: '#0D6695',
                    }
                },
                data: [{
                    value: geoCoordMap['DWH'],
                    symbol: 'image://' + dwh,
                    symbolSize: [80,80]
                }]
            }
        ],

        // 图片
        graphic: [

            // 院外
            {
                type: 'image',
                position: [1150, 250],
                style: {
                    image: qyyl,
                    width: 80,
                    heigtht: 80,
                }
            },{
                type: 'text',
                position: [1150, 334],
                color: '#3498DB',
                style: {
                    text: '区域医疗平台',
                    fill: '#FFF8E1',
                    font: '1.2em "Fira Sans", sans-serif',
                }
            },
            {
                type: 'image',
                position: [1150, 40],
                style: {
                    image: ylt,
                    width: 80,
                    heigtht: 80,
                }
            },{
                type: 'text',
                position: [1155, 124],
                color: '#3498DB',
                style: {
                    text: '医联体平台',
                    fill: '#FFF8E1',
                    font: '1.2em "Fira Sans", sans-serif',
                }
            },
            {
                type: 'image',
                position: [1150, 500],
                style: {
                    image: sb,
                    width: 80,
                    heigtht: 80,
                }
            },{
                type: 'text',
                position: [1165, 584],
                color: '#3498DB',
                style: {
                    text: '其他平台',
                    fill: '#FFF8E1',
                    font: '1.2em "Fira Sans", sans-serif',
                }
            },


            // 防火墙
            {
                type: 'image',
                position: [850, 250],
                style: {
                    image: fhq,
                    width: 80,
                    heigtht: 80,
                }
            },{
                type: 'text',
                position: [862, 334],
                color: '#3498DB',
                style: {
                    text: '防火墙',
                    fill: '#B22222',
                    font: 'small-caps bold 16px/2 sans-serif',
                }
            },
           
            // 集成平台
           {
                type: 'text',
                position: [600, 398],
                color: '#3498DB',
                style: {
                    text: '医院信息集成平台',
                    fill: '#FFFFFF',
                    font: 'small-caps bold 16px/2 sans-serif',
                }
            },
           
            // 数据中心
          {
                type: 'text',
                position: [409, 344],
                color: '#3498DB',
                style: {
                    text: '数据中心',
                    fill: '#FFF8DC',
                    font: 'small-caps bold 16px/2 sans-serif',
                }
            },

            // 院内
            {
                type: 'image',
                position: [35, 20],
                style: {
                    image: ris,
                    width: 50,
                    heigtht: 50,
                }
            },{
                type: 'text',
                position: [35, 70],
                style: {
                    text: 'RIS系统',
                    fill: '#FFF8E1',
                    font: '1.2em "Fira Sans", sans-serif',
                }
            },
            {
                type: 'image',
                position: [35, 110],
                style: {
                    image: lis,
                    width: 50,
                    heigtht: 50,
                }
            },{
                type: 'text',
                position: [35, 169],
                style: {
                    text: 'LIS系统',
                    fill: '#FFF8E1',
                    font: '1.2em "Fira Sans", sans-serif',
                }
            },
            {
                type: 'image',
                position: [35, 200],
                style: {
                    image: pacs,
                    width: 50,
                    heigtht: 50,
                }
            },{
                type: 'text',
                position: [35, 260],
                style: {
                    text: 'PACS系统',
                    fill: '#FFF8E1',
                    font: '1.2em "Fira Sans", sans-serif',
                }
            },
            {
                type: 'image',
                position: [35, 330],
                style: {
                    image: his,
                    width: 60,
                    heigtht: 60,
                }
            },{
                type: 'text',
                position: [35, 393],
                style: {
                    text: 'HIS系统',
                    fill: '#FFF8E1',
                    font: '1.2em "Fira Sans", sans-serif',
                }
            },
            {
                type: 'image',
                position: [35, 430],
                style: {
                    image: emr,
                    width: 50,
                    heigtht: 50,
                }
            },{
                type: 'text',
                position: [35, 478],
                style: {
                    text: 'EMR系统',
                    fill: '#FFF8E1',
                    font: '1.2em "Fira Sans", sans-serif',
                }
            },
            {
                type: 'image',
                position: [35, 520],
                style: {
                    image: qt,
                    width: 50,
                    heigtht: 50,
                }
            },{
                type: 'text',
                position: [30, 573],
                style: {
                    text: '其他系统',
                    fill: '#F9FBE7',
                    font: '1.2em "Fira Sans", sans-serif',
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
    
