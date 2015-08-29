// description:品牌百度指数分析 
// author:vicshang(2015-8-29 16:30:39)
// update:
var BdIndices=function(){
	this.allTrend=null;
	this.pcTrend=null;
	this.wapTrend=null;
	this.trendData={
	    tooltip : {
	        trigger: 'axis'
	    },
	    legend: {
	        data:['意向','预购','成交']
	    },
	    calculable : true,
	    xAxis : [
	        {
	            type : 'category',
	            boundaryGap : false,
	            data : ['周一','周二','周三','周四','周五','周六','周日']
	        }
	    ],
	    yAxis : [
	        {
	            type : 'value'
	        }
	    ],
	    series : [
	        {
	            name:'成交',
	            type:'line',
	            smooth:true,
	            itemStyle: {normal: {areaStyle: {type: 'default'}}},
	            data:[10, 12, 21, 54, 260, 830, 710]
	        },
	        {
	            name:'预购',
	            type:'line',
	            smooth:true,
	            itemStyle: {normal: {areaStyle: {type: 'default'}}},
	            data:[30, 182, 434, 791, 390, 30, 10]
	        },
	        {
	            name:'意向',
	            type:'line',
	            smooth:true,
	            itemStyle: {normal: {areaStyle: {type: 'default'}}},
	            data:[1320, 1132, 601, 234, 120, 90, 20]
	        }
	    ]
	};
                    
}
BdIndices.prototype={
	//初始化
	init:function(){
		var _that=this;
		this.initBind();
		LM.Core.initEchart(function(ec){
			_that.allTrend=ec.init(document.getElementById("allTrend"));//购买咨询问题图表对象
			_that.showTrend(_that.allTrend);
		});
	},
	//初始化事件绑定
	initBind:function(){
		var _that=this;
		$(".trendTab .tabTitle").click(function(){
			if(!$(this).hasClass("data")){
				var _type=$(this).data("val");
				if(_type=="pcTrend"){
					LM.Core.initEchart(function(ec){
						_that.pcTrend=ec.init(document.getElementById("pcTrend"));//购买咨询问题图表对象
						_that.showTrend(_that.pcTrend);	
					});
				}else if(_type=="wapTrend"){
					LM.Core.initEchart(function(ec){
						_that.wapTrend=ec.init(document.getElementById("wapTrend"));//购买咨询问题图表对象
						_that.showTrend(_that.wapTrend);
					});
				}
				$(this).addClass("data");
			}
		});
	},
	//显示趋势图
	showTrend:function(target,type){
		var _that=this,
		_option=_that.trendData;
		target.setOption(_option);
	}
}
var bdIndices=new BdIndices();
bdIndices.init();