// description:用户地域销量监控脚本
// author:vicshang(2015-8-30 17:21:54)
// update:
var AreaUser=function(){
	this.pieCharts=null;//星期chart
	this.pieCharts2=null;//月份chart
	this.pieData= {
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
}
AreaUser.prototype={
	//初始化方法
	init:function(){
		var _that=this;
		this.initBind();
		LM.Core.initEchart(function(ec){
			_that.pieCharts=ec.init(document.getElementById("pieChart"));//竞品粉丝与帖子总数对比
			_that.showPie(_that.pieCharts);
		});
	},
	//初始化事件绑定
	initBind:function(){
		var _that=this;
		$(".fiveData").click(function(){
			if(!$(this).hasClass("data")){
				LM.Core.initEchart(function(ec){
					_that.pieCharts2=ec.init(document.getElementById("pieChart2"));//竞品粉丝与帖子总数对比
					_that.showPie(_that.pieCharts2);
				});
				$(this).addClass("data")
			}
		});

	},
	//显示饼状图
	showPie:function(target){
		var _that=this,
		_option=_that.pieData;
		target.setOption(_option);
	}
}
var areaUser=new AreaUser();
areaUser.init();