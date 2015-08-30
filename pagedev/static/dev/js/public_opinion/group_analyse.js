// description:乐檬圈子分析脚本
// author:vicshang(2015-8-30 13:05:24)
// update
var GroupAnalyse=function(){
	this.tieChart=null;
	this.eChart7=null;
	this.eChart30=null;
	this.pieData={
	    tooltip : {
	        trigger: 'item',
	        formatter: "{a} <br/>{b} : {c} ({d}%)"
	    },
	    legend: {
	        orient : 'vertical',
	        x : 'left',
	        data:['直接访问','邮件营销','联盟广告','视频广告','搜索引擎']
	    },
	    calculable : true,
	    series : [
	        {
	            name:'访问来源',
	            type:'pie',
	            radius : '55%',
	            center: ['50%', '60%'],
	            data:[
	                {value:335, name:'直接访问'},
	                {value:310, name:'邮件营销'},
	                {value:234, name:'联盟广告'},
	                {value:135, name:'视频广告'},
	                {value:1548, name:'搜索引擎'}
	            ]
	        }
	    ]
	};
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
GroupAnalyse.prototype={
	//初始化函数
	init:function(){
		var _that=this;
		this.initBind();
		LM.Core.initEchart(function(ec){
			_that.tieChart=ec.init(document.getElementById("tieChart"));//购买咨询问题图表对象
			_that.eChart7=ec.init(document.getElementById("evaluate7Chart"));
			_that.showPie(_that.tieChart);
			_that.showLine(_that.eChart7);
		});
	},
	//初始化事件绑定
	initBind:function(){
		var _that=this;
		$(".trend30").click(function(){
			LM.Core.initEchart(function(ec){
				_that.eChart30=ec.init(document.getElementById("evaluate30Chart"));
				_that.showLine(_that.eChart30);
			});
		});
	},
	showPie:function(target){
		var _that=this,
		_option=_that.pieData;
		target.setOption(_option);
	},
	showLine:function(target){
		var _that=this,
		_option=_that.lineData;
		target.setOption(_option);
	}
}
var gAnalyse=new GroupAnalyse();
gAnalyse.init();