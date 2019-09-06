import React from 'react';
import IceContainer from '@icedesign/container';
import ReactEcharts from 'echarts-for-react';
import echarts from 'echarts';

const commerce =  require('./images/5.png');
const social_security = require('./images/4.png');
const land_tax = require('./images/3.png');
const police = require('./images/2.png');
const data_clound = require('./images/1.png');

 

export default function MyChart() {
    var lines = [
    {
        coords: [
            [355, 900],
            [470, 800]
        ],
        imgUrl: police,
    },
    {
        coords: [
            [645, 900],
            [528, 800]
        ],
        effect: {
            period: 1.5,
        },
    },
    /*
    {
        coords: [
            [470, 717],
            [444, 640]
        ],
    },
    {
        coords: [
            [530, 717],
            [553, 640]
        ],
    },
    {
        coords: [
            [482, 596],
            [517, 596]
        ],
    },
    {
        coords: [
            [480, 579],
            [517, 579]
        ],
    },
    */
    {
        coords: [
            [460, 380],
            [190, 236]
        ],
        effect: {
            period: 10,
            trailLength: 0,
        },
    },
    {
        coords: [
            [498, 380],
            [498, 238]
        ],
    },
    {
        coords: [
            [542, 380],
            [812, 238]
        ],
        effect: {
            period: 2,
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
                type: 'lines',
                coordinateSystem: 'cartesian2d',
                zlevel: 1,
                
                // 动画效果
                effect: {
                    show: true,
                    period: 4, //特效动画的时间，单位为 s
                    trailLength: 0.5, //特效尾迹的长度。0~1数值越大尾迹越长
                    color: '#64f2ff',
                    symbolSize: 3
                },
                
                lineStyle: {
                    normal: {
                        color: '#119dd8',
                        width: 0,
                        curveness: 0
                    }
                },
                data: lines
            }
        ],

        // 图片
        graphic: [
            {
                type: 'image',
                position: [200, 200],
                style: {
                    image: data_clound,
                }
            },
        ]
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
    
