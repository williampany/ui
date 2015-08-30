// description：京东罗盘页面脚本
// author:vicshang(2015-8-29 19:12:48)
// update
var JdCompass=function(){
	this.trend=null;
	this.lineData= {
	    tooltip : {
	        trigger: 'axis'
	    },
	    legend: {
	        data:['邮件营销','联盟广告','视频广告','直接访问','搜索引擎']
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
	            name:'邮件营销',
	            type:'line',
	            stack: '总量',
	            data:[120, 132, 101, 134, 90, 230, 210]
	        },
	        {
	            name:'联盟广告',
	            type:'line',
	            stack: '总量',
	            data:[220, 182, 191, 234, 290, 330, 310]
	        },
	        {
	            name:'视频广告',
	            type:'line',
	            stack: '总量',
	            data:[150, 232, 201, 154, 190, 330, 410]
	        },
	        {
	            name:'直接访问',
	            type:'line',
	            stack: '总量',
	            data:[320, 332, 301, 334, 390, 330, 320]
	        },
	        {
	            name:'搜索引擎',
	            type:'line',
	            stack: '总量',
	            data:[820, 932, 901, 934, 1290, 1330, 1320]
	        }
	    ]
	};
}
JdCompass.prototype={
	//初始化函数
	init:function(){
		var _that=this;
		this.initBind();
		LM.Core.initEchart(function(ec){
			_that.trend=ec.init(document.getElementById("trendChart"));//京东罗盘趋势图
			_that.trendChart(_that.trend);
		});
	},
	//事件绑定初始化事件
	initBind:function(){

	},
	trendChart:function(target){
		var _that=this,
		_option=_that.lineData;
		target.setOption(_option);
	}
}
var jdCompass=new JdCompass();
jdCompass.init();
