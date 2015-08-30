// description:全站公共方法
// author:vicshang(2015-8-26 22:53:58)
// update:
var Common=function(){}
Common.prototype={
	//初始化方法
	init:function() {
		this.initBind();
	},
	//初始化事件绑定方法
	initBind:function(){
		//tab切换
		$(".tabWrap .tabTitle").click(function(){
			var _index=$(this).index(),
			_titles=$(this).parent().find(".tabTitle"),
			_conts=$(this).parents(".tabWrap").find(".tabCont"),
			_cont=_conts.eq(_index);
			_titles.removeClass("active");
			_conts.removeClass("active");
			$(this).addClass("active");
			_cont.addClass("active");
		});
		//返回按钮click事件绑定
		$(".header .back").click(function(e){
			e.preventDefault();
			history.back();
		});
	},
	//打印底部导航
	printBottomNav:function(){
		var _nav="<div class=\"b_nav\"><ul class=\"clearfix\"><li class=\"tab_item flow\">流量销量分析</li><li class=\"tab_item public_opinion\">舆情监控分析</li><li class=\"tab_item loginOut\">退出</li></ul></div>"
		$("body").append(_nav);
		var _loaction=window.location.href;
		if(/\/public_opinion\//.test(_loaction)){
			$(".b_nav .public_opinion").addClass("active");
		}else if(/\/flow\//.test(_loaction)){
			$(".b_nav .flow").addClass("active");
		}
		//舆情监控分析click事件绑定
		$(".b_nav .public_opinion").click(function(){
			window.location.href="/pagedev/public_opinion/main_list.html";
		});
		//流量销量分析click事件绑定
		$(".b_nav .flow").click(function(){
			window.location.href="/pagedev/flow/main_list.html";
		});
	}
}
var common=new Common();
common.init();
//打印底部导航
common.printBottomNav();