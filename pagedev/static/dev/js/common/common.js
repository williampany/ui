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
	}
}
var common=new Common();
common.init();