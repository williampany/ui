// description:竞品圈子对比分析脚本
// author:vicshang(2015-8-30 14:59:16)
// update:
var PgroupAnalyse=function(){
	this.barCharts=null;
	this.line1=null;
	this.line2=null;
	this.line3=null;
	this.line4=null;
	this.barData= {

	    tooltip : {
	        trigger: 'axis'
	    },
	    legend: {
	        data:['帖子总数','粉丝总数']
	    },
	    calculable : true,
	    xAxis : [
	        {
	            type : 'category',
	            data : ['1月','2月','3月','4月','5月','6月','7月','8月','9月','10月','11月','12月']
	        }
	    ],
	    yAxis : [
	        {
	            type : 'value'
	        }
	    ],
	    series : [
	        {
	            name:'帖子总数',
	            type:'bar',
	            data:[2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6, 20.0, 6.4, 3.3]
	        },
	        {
	            name:'粉丝总数',
	            type:'bar',
	            data:[2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6, 182.2, 48.7, 18.8, 6.0, 2.3]
	        }
	    ]
	};
	this.lineData1= {
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
PgroupAnalyse.prototype={
	//初始化函数
	init:function(){
		var _that=this;
		this.initBind();
		LM.Core.initEchart(function(ec){
			_that.barCharts=ec.init(document.getElementById("pgroupChart"));//竞品粉丝与帖子总数对比
			_that.line1=ec.init(document.getElementById("evaluate7Chart1"));
			_that.line2=ec.init(document.getElementById("evaluate7Chart2"));
			_that.showBar(_that.barCharts);
			_that.showTrend(_that.line1,"");
			_that.showTrend(_that.line2,"");
		});
	},
	//初始化事件绑定
	initBind:function(){
		var _that=this;
		$(".trend30").click(function(){
			if(!$(this).hasClass("data")){
				LM.Core.initEchart(function(ec){
					_that.line3=ec.init(document.getElementById("evaluate30Chart3"));
					_that.line4=ec.init(document.getElementById("evaluate30Chart4"));
					_that.showBar(_that.barCharts);
					_that.showTrend(_that.line3,"");
					_that.showTrend(_that.line4,"");
				});
				$(this).addClass("data");
			}
		});
	},
	showBar:function(target){
		var _that=this,
		_option=_that.barData;
		target.setOption(_option);
	},
	showTrend:function(target,type){
		var _that=this;
		if(type==""){
			_option=_that.lineData1;
		}else if(type==""){
			_option=_that.lineData2;
		}
		target.setOption(_option);
	}

}
var pgAnalyse=new PgroupAnalyse();
pgAnalyse.init();