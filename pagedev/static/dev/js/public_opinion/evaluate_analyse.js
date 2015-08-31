// description:整体评价分析脚本
// author:vicshang(2015-8-29 06:07:08)
// update
var Eanalyze=function () {
	// body...
}
Eanalyze.prototype={
	//初始化
	init:function(){
		this.initBind();
		this.getTrendData();
	},
	//初始化事件绑定
	initBind:function(){

	},
	//获取趋势图数据
	getTrendData:function(){
		LM.Core.initEchart(function(ec){
			func(ec);
		});
	    function func(ec) {
	        // 基于准备好的dom，初始化echarts图表
	        var myChart = ec.init(document.getElementById('main')); 
	        var option = {
	        	grid:{
	        		x:35,
	        		y:45,
	        		x2:35,
	        		y2:5
	        	},
			    tooltip : {
			        trigger: 'axis'
			    },
			    legend: {
			        data:['好评数','中评数','差评数',"好评率"]
			    },
			    xAxis : [
			        {
			            type : 'category',
			            data : ['2015/6/12','2015/6/13','2015/6/14','2015/6/15','2015/6/16','2015/6/17','2015/6/18']
			        }
			    ],
			    yAxis : [
			        {
			            type : 'value',
			            name : '',
			            axisLabel : {
			                formatter: function(value){
			                	return value/1000+"k";
			                }
			            }
			        },
			        {
			            type : 'value',
			            name : '',
			            axisLabel : {
			                formatter: '{value}'
			            }
			        }
			    ],
			    series : [
			        {
			            name:'好评数',
			            type:'bar',
			            data:[9000,8000,11000,1000,8500,8600,8000]
			        },
			        {
			            name:'中评数',
			            type:'bar',
			            data:[8000,7000,9500,7800,7500,8300,8000]
			        },
			        {
			            name:'差评数',
			            type:'bar',
			            data:[1000,1500,2000,1800,1000,1300,1200]
			        },
			        {
			            name:'好评率',
			            type:'line',
			            yAxisIndex: 1,
			            data:[0.9,0.92,0.87,0.86,0.93,0.95,0.98]
			        }
			    ]
			};
	        // 为echarts对象加载数据 
	        myChart.setOption(option); 
	    }
	}
}
var eanalyze=new Eanalyze();
eanalyze.init();