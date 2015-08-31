var BuyAnalyse=function(){
	this.allQuesPie=null;//所有购买咨询问题chart元素
	this.allVersionPie=null;//所有手机版本问题chart元素
	this.yQuesPie=null;//昨日新增购买咨询问题chart元素
	this.yVersionPie=null;//昨日新增所有手机版本问题chart元素
	this.trend7=null;
	this.trend30=null;
	this.pieData= {
	    title : {
	        text: '购买咨询的问题类型占比',
	        x:'center'
	    },
	    tooltip : {
	        trigger: 'item',
	        formatter: "{a} <br/>{b} : {c} ({d}%)"
	    },
	    // legend: {
	    //     orient : 'vertical',
	    //     x : 'left',
	    //     data:['直接访问','邮件营销','联盟广告','视频广告','搜索引擎']
	    // },
	    calculable : true,
	    series : [
	        {
	            name:'访问来源',
	            type:'pie',
	            radius : '55%',
	            center: ['50%', '60%'],
	            data:[
	                {value:335, name:'发票及保修'},
	                {value:310, name:'商品咨询'},
	                {value:234, name:'库存及配送'},
	                {value:135, name:'支付问题'},
	                {value:1548, name:'促销及赠品'}
	            ]
	        }
	    ]
	};
	this.pieData2={
	    title : {
	        text: '咨询手机版本问题占比',
	        x:'center'
	    },
	    tooltip : {
	        trigger: 'item',
	        formatter: "{a} <br/>{b} : {c} ({d}%)"
	    },
	    // legend: {
	    //     orient : 'vertical',
	    //     x : 'left',
	    //     data:['直接访问','邮件营销','联盟广告','视频广告','搜索引擎']
	    // },
	    calculable : true,
	    series : [
	        {
	            name:'访问来源',
	            type:'pie',
	            radius : '55%',
	            center: ['50%', '60%'],
	            data:[
	                {value:335, name:'发票及保修'},
	                {value:310, name:'商品咨询'},
	                {value:234, name:'库存及配送'},
	                {value:135, name:'支付问题'},
	                {value:1548, name:'促销及赠品'}
	            ]
	        }
	    ]
	};
	this.lineData={
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
	            data : ['2015/06/12','2015/06/13','2015/06/14','2015/06/15','2015/06/16','2015/06/17','2015/06/18']
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
BuyAnalyse.prototype={
	//初始化方法
	init:function(){
		var _that=this;
		//初始化事件绑定
		this.initBind();
		LM.Core.initEchart(function(ec){
			_that.allQuesPie=ec.init(document.getElementById("queClassChart"));//购买咨询问题图表对象
			_that.allVersionPie=ec.init(document.getElementById("versionChart"));//版本问题图表对象
			_that.trend7=ec.init(document.getElementById("evaluate7Chart"));//近7天趋势图图表对象
			_that.queClassPie(_that.allQuesPie);
			_that.queClassPie(_that.allVersionPie,"version");
			_that.trendChart(_that.trend7);
		});
		
	},
	//初始化事件绑定
	initBind:function(){
		var _that=this;

		$(".trend30").click(function(){
			if(!$(this).hasClass("data")){
				LM.Core.initEchart(function(ec){
					_that.trend30=ec.init(document.getElementById("evaluate30Chart"));//30天趋势
					_that.trendChart(_that.trend30);
				});
				$(this).addClass("data");
			}
		});
		//昨日新增click事件绑定
		$(".yesterday").click(function(){
			if(!$(this).hasClass("data")){
				LM.Core.initEchart(function(ec){
					_that.yQuesPie=ec.init(document.getElementById("yQueClassChart"));//30天趋势
					_that.yVersionPie=ec.init(document.getElementById("yVersionChart"));
					_that.queClassPie(_that.yQuesPie);
					_that.queClassPie(_that.yVersionPie,"version");
				});
				$(this).addClass("data");
			}
		});
	},
	// @description:设置饼图数据
	// @param target{object}echart对象
	queClassPie:function(target,type){
		var _that=this;
		if(type=="version"){
			_option=_that.pieData2;
		}else{
			_option=_that.pieData;
		}
		target.setOption(_option);
	},
	//趋势图
	trendChart:function(target){
		var _that=this,
		_option=_that.lineData;
		target.setOption(_option);
	}
}

var buyAnalyse=new BuyAnalyse();
buyAnalyse.init();