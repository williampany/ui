// description：流量主页的脚本
// author:vicshang(2015-8-31 17:13:43)
// update:
var MainList=function(){}
MainList.prototype={
	//初始化方法
	init:function(){
		this.getFlowList();
		this.initBind();
	},
	//初始化事件绑定
	initBind:function(){

	},
	//获取监控数据列表
	getFlowList:function(){
		var obj={};
		obj.url="";
		obj.params={};
		obj.success=function(){};
		obj.error=function(){};
		LM.Core.ajax(obj);
	}
}
var mainList=new MainList();
mainList.init();