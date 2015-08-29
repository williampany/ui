// description：手机系列评价分析脚本
// author:vicshang(2015-8-29 07:45:56)
// update:
var PEAnalyse=function(){}
PEAnalyse.prototype={
	//初始化方法
	init:function(){
		//获取近7天的趋势数据
		this.getTrendData("7d");
		this.initBind();
	},
	//初始化事件绑定方法
	initBind:function(){
		var _that=this;
		$(".trend30").click(function(){
			if(!$(this).hasClass("data")){
				_that.getTrendData2();
				$(this).addClass("data");
			}
			
		});
	},
	getTrendData:function(type){
		LM.Core.initEchart(function(ec){
			showData(ec);
		});
		function showData(ec){
			var option = {
			    tooltip : {
			        trigger: 'axis'
			    },
			    calculable : true,
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
			                formatter: '{value}'
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
			var _target=ec.init(document.getElementById("trend7"));
			// 为echarts对象加载数据 
	        _target.setOption(option); 
		}
	},
	getTrendData2:function(){
		LM.Core.initEchart(function(ec){
			showData(ec);
		});
		function showData(ec){
			var _target=ec.init(document.getElementById("trend30"));
			
			var option = {
			    tooltip : {
			        trigger: 'axis'
			    },
			    calculable : true,
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
			                formatter: '{value}'
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
	        _target.setOption(option); 
		}
	}
}
var pEAnalyse=new PEAnalyse();
pEAnalyse.init();