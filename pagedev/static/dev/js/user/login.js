// description:用户登录脚本
// author:vicshang(2015-9-1 17:10:47)
// update:
var Login=function(){}
Login.prototype={
	//初始化方法
	init:function(){
		this.initBind();
	},
	//初始化事件绑定方法
	initBind:function(){
		var _that=this;
		//登录按钮click事件绑定
		$(".submitBtn").click(function(){
			_that.login();
		});
	},
	//登录方法
	login:function(){
		var _username=$("#userName").val(),//用户名
		_pwd=$("#userPwd").val();//密码
		if(!_username){
			alert("用户名不能为空");
		}
		if(!/\w{6,}/.test(_pwd)){
			if(!_pwd){
				alert("密码不能为空");
				return;
			}
			alert("密码至少6位");
			return;
		}
		var obj={};
		obj.url="";
		obj.params={"username":};
		obj.success:function(data){

		}
		LM.Core.ajax(obj);
	}
}
var login=new Login();
login.init();