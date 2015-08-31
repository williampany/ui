// description:用户地域销量监控
// author:vicshang(2015-8-30 17:46:54)
// update
var AreaFlow=function(){
	this.areaCharts=null;
	this.areaCharts2=null;
	this.areaData={
		tooltip : {
	        trigger: 'item'
	    },
	    legend: {
	        orient: 'vertical',
	        x:'left',
	        data:['iphone3','iphone4','iphone5']
	    },
	    dataRange: {
	        min: 0,
	        max: 2500,
	        x: 'left',
	        y: 'bottom',
	        text:['高','低'],           // 文本，默认为数值文本
	        calculable : true
	    },
	    // roamController: {
	    //     show: true,
	    //     x: 'right',
	    //     mapTypeControl: {
	    //         'china': true
	    //     }
	    // },
	    series : [
	        {
	            name: 'iphone3',
	            type: 'map',
	            mapType: 'china',
	            roam: false,
	            itemStyle:{
	                normal:{label:{show:true}},
	                emphasis:{label:{show:true}}
	            },
	            data:[
	                {name: '北京',value: Math.round(Math.random()*1000)},
	                {name: '天津',value: Math.round(Math.random()*1000)},
	                {name: '上海',value: Math.round(Math.random()*1000)},
	                {name: '重庆',value: Math.round(Math.random()*1000)},
	                {name: '河北',value: Math.round(Math.random()*1000)},
	                {name: '河南',value: Math.round(Math.random()*1000)},
	                {name: '云南',value: Math.round(Math.random()*1000)},
	                {name: '辽宁',value: Math.round(Math.random()*1000)},
	                {name: '黑龙江',value: Math.round(Math.random()*1000)},
	                {name: '湖南',value: Math.round(Math.random()*1000)},
	                {name: '安徽',value: Math.round(Math.random()*1000)},
	                {name: '山东',value: Math.round(Math.random()*1000)},
	                {name: '新疆',value: Math.round(Math.random()*1000)},
	                {name: '江苏',value: Math.round(Math.random()*1000)},
	                {name: '浙江',value: Math.round(Math.random()*1000)},
	                {name: '江西',value: Math.round(Math.random()*1000)},
	                {name: '湖北',value: Math.round(Math.random()*1000)},
	                {name: '广西',value: Math.round(Math.random()*1000)},
	                {name: '甘肃',value: Math.round(Math.random()*1000)},
	                {name: '山西',value: Math.round(Math.random()*1000)},
	                {name: '内蒙古',value: Math.round(Math.random()*1000)},
	                {name: '陕西',value: Math.round(Math.random()*1000)},
	                {name: '吉林',value: Math.round(Math.random()*1000)},
	                {name: '福建',value: Math.round(Math.random()*1000)},
	                {name: '贵州',value: Math.round(Math.random()*1000)},
	                {name: '广东',value: Math.round(Math.random()*1000)},
	                {name: '青海',value: Math.round(Math.random()*1000)},
	                {name: '西藏',value: Math.round(Math.random()*1000)},
	                {name: '四川',value: Math.round(Math.random()*1000)},
	                {name: '宁夏',value: Math.round(Math.random()*1000)},
	                {name: '海南',value: Math.round(Math.random()*1000)},
	                {name: '台湾',value: Math.round(Math.random()*1000)},
	                {name: '香港',value: Math.round(Math.random()*1000)},
	                {name: '澳门',value: Math.round(Math.random()*1000)}
	            ]
	        },
	        {
	            name: 'iphone4',
	            type: 'map',
	            mapType: 'china',
	            itemStyle:{
	                normal:{label:{show:true}},
	                emphasis:{label:{show:true}}
	            },
	            data:[
	                {name: '北京',value: Math.round(Math.random()*1000)},
	                {name: '天津',value: Math.round(Math.random()*1000)},
	                {name: '上海',value: Math.round(Math.random()*1000)},
	                {name: '重庆',value: Math.round(Math.random()*1000)},
	                {name: '河北',value: Math.round(Math.random()*1000)},
	                {name: '安徽',value: Math.round(Math.random()*1000)},
	                {name: '新疆',value: Math.round(Math.random()*1000)},
	                {name: '浙江',value: Math.round(Math.random()*1000)},
	                {name: '江西',value: Math.round(Math.random()*1000)},
	                {name: '山西',value: Math.round(Math.random()*1000)},
	                {name: '内蒙古',value: Math.round(Math.random()*1000)},
	                {name: '吉林',value: Math.round(Math.random()*1000)},
	                {name: '福建',value: Math.round(Math.random()*1000)},
	                {name: '广东',value: Math.round(Math.random()*1000)},
	                {name: '西藏',value: Math.round(Math.random()*1000)},
	                {name: '四川',value: Math.round(Math.random()*1000)},
	                {name: '宁夏',value: Math.round(Math.random()*1000)},
	                {name: '香港',value: Math.round(Math.random()*1000)},
	                {name: '澳门',value: Math.round(Math.random()*1000)}
	            ]
	        },
	        {
	            name: 'iphone5',
	            type: 'map',
	            mapType: 'china',
	            itemStyle:{
	                normal:{label:{show:true}},
	                emphasis:{label:{show:true}}
	            },
	            data:[
	                {name: '北京',value: Math.round(Math.random()*1000)},
	                {name: '天津',value: Math.round(Math.random()*1000)},
	                {name: '上海',value: Math.round(Math.random()*1000)},
	                {name: '广东',value: Math.round(Math.random()*1000)},
	                {name: '台湾',value: Math.round(Math.random()*1000)},
	                {name: '香港',value: Math.round(Math.random()*1000)},
	                {name: '澳门',value: Math.round(Math.random()*1000)}
	            ]
	        }
	    ]
	}
}
AreaFlow.prototype={
	//初始化函数
	init:function(){
		var _that=this;
		this.initBind();
		LM.Core.initEchart(function(ec){
			_that.areaCharts=ec.init(document.getElementById("mapChart"));//竞品粉丝与帖子总数对比
			_that.showArea(_that.areaCharts);
		});
	},
	//初始化事件绑定
	initBind:function(){
		var _that=this;
		$(".fiveData").click(function(){
			if(!$(this).hasClass("data")){
				LM.Core.initEchart(function(ec){
					_that.areaCharts2=ec.init(document.getElementById("mapChart2"));//竞品粉丝与帖子总数对比
					_that.showArea(_that.areaCharts2);
				});
				$(this).addClass("data");
			}
		});
	},
	//显示地域图
	showArea:function(target){
		var _that=this,
		_option=_that.areaData;
		target.setOption(_option);
	}
}
var areaFlow=new AreaFlow();
areaFlow.init();