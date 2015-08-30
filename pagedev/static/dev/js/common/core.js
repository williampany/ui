// description：核心公共方法
// author:shanghongliang(2015-8-26 22:46:35)
// update
//update
var LM={};
LM.Core={
	userPrefix:"http://passport.91jinrong.com",
	nomarlPrefix:"http://m.91jinrong.com",
	themePrefix:"http://www.91jinrong.com",
	//核心ajax
	ajax:function(obj) {
		var _prefix=LM.Core.nomarlPrefix;
		if(obj.auth){
			_prefix=LM.Core.userPrefix;
		}else if(obj.themeUrl){
			_prefix=LM.Core.themePrefix;
		}
		$.ajax({
			url:_prefix+obj.url,
			type:obj.type||"post",
			data:obj.params,
			dataType:obj.dataType||"json",
			xhrFields: {
            	 withCredentials: true
            },
            cache:false,
			crossDomain: true,
			// headers: {'Cookie' : document.cookie },
			beforeSend:function(){
				if(obj.beforeSend&&typeof obj.beforeSend==="function"){
					obj.beforeSend();
				}
			},
			complete:function(XHR, TS){
				if(obj.complete&&typeof obj.complete==="function"){
					obj.complete(XHR, TS);
				}
			},
			success:function(data){
				// console.log(data.message);
				//登录过期重新登录
				if(data&&data.message&&(data.message.indexOf("重新登录")!=-1||data.message.indexOf("重新登陆")!=-1)){
					window.location.href="/pagedev/user/login.html";
					return;
				}
				if(obj.success&&typeof obj.success==="function"){
					obj.success(data);
				}
			},
			error:function(){
				if(obj.error&&typeof obj.error==="function"){
					obj.error();
				}
			}
		});
	},
	//弹框
	Dialog:function(opt){
		LM.Core.DialogClose();
		//默认属性
	    var def = {
	        icon:'ok',
	        btnFn:null,
	        btnValue:'确定',
	        content:'操作成功',
	        msg:"",
	        type:"nomarl",
	        title:"提示"
	    };
	    //参数覆盖默认属性
	    $.extend(def, opt);
	    var cls = 'status-right';
	    if(def.icon != 'ok') {
	        cls = "status-wrong";
	    }
	    var _cavs = $('<div class="dialogMatte" id="popCanv"></div>'),
		_box="";
		if(def.type=="nomarl"){
			_box=$('<div class="dialogWrap" id="popBox"></div>');
			var _cont=$('<section class="dialogCont nomarlWrap"><p class="normalTipText">'+def.content+'</p></section>');
			var _btn=$('<a class="nomarl" href="javascript:void(0);">'+def.btnValue+'</a>');
			//关闭
			_btn.click(function(){
				LM.Core.DialogClose();
			});
			_box.append(_cont.append(_btn));
		}else{
			_box=$('<div class="dialogWrap" id="popBox"></div>');
			if(def.type=="icon"){
				var _content=$('<section class="dialogCont iconWrap">');
				var _title=$('<div class="tipTitle">'+def.title+'<span class="closeIcon"></span></div>'),
				_icon=$('<span class="tipIcon '+cls+'"></span>'),
				_msg=$('<span class="tipMesaage">'+def.msg+'</span>'),
				_cont=$('<span class="tipCont">'+def.content+'</span>'),
				_btn=$('<a href="javascript:void(0);"class="dlIconBtn">'+def.btnValue+'</a>'),
				_close=$('<span class="dlClose">X</span>');
				_content.append(_title);
				_content.append(_icon);
				_content.append(_msg);
				_content.append(_cont);
				_content.append(_btn);
				_box.append(_content);
				_close.click(function(){
					LM.Core.DialogClose();
				});
				_btn.click(function(){
					if(typeof def.btnFn == 'function'){
						def.btnFn();
					}
				});
			}
		}
	    $('body').append(_cavs);
	    $('body').append(_box);
	    
	    $(".dialogWrap .closeIcon").click(function(){
	    	LM.Core.DialogClose();
	    });
	},
	//关闭弹窗
	DialogClose:function(){
	    $("#popCanv").remove();
	    $("#popBox").remove();
	},
	//获取cookie
	getCookie:function(name){
		var arr,reg=new RegExp("(^| )"+name+"=([^;]*)(;|$)");
		if(arr=document.cookie.match(reg)){
			return unescape(arr[2]);
		}else{
			return null;
		}
	},
	//设置cookie
	setCookie:function(name,value){
	    var Days = 1;
	    var exp = new Date();
	    exp.setTime(exp.getTime() + Days*24*60*60*1000);
	    document.cookie = name + "="+ escape (value) + ";domain=.91jinrong.com;expires=" + exp.toGMTString()+";path=/";
	},

	//校验用户是否实名
	checkUserRealName:function(){
		var obj={};
		obj.url="/mobile/v2/checkName";
		obj.success=function(data){
			var _status=data.status.toString();
			//请求失败
			if(_status=="1"){
				LM.Core.Dialog({"content":data.message});
			}else{

			}
		};
		obj.error=function(){
			LM.Core.Dialog({"content":"校验用户实名发生网络异常，请稍后重试"});
		};
		LM.Core.ajax(obj);
	},
	//获取用户基本信息
	getUserData:function(callback,args){
		var _user={};
		_user.isRealName=LM.Core.getCookie("wallet_isRealName");
		_user.isPayPwd=LM.Core.getCookie("wallet_isPayPwd");
		_user.isBankCard=LM.Core.getCookie("wallet_isBankCard");
		args.push(_user);
		if(!_user.isRealName||!_user.isPayPwd||!_user.isBankCard){
			var obj={};
			obj.url="/mobile/v2/user_account";
			obj.type="get";
			obj.success=function(data){
	            var _status=data.status.toString();
	            if(_status=="0"){
	                var data=data.data;
	                if(callback&&typeof callback=="function"){
	                	callback.apply(null,args);
	                }
	            }else{
	                LM.Core.Dialog({"msg": "您还未登录，请先登录！",
		             "btnVale": "去登录",
		             "content": "",
		             "type": "icon",
		             "title": "登录提示",
		             "icon":"error",
		             "btnFn": function() {
		                 window.location.href = "/pagedev/user/login.html";
		                 LM.Core.DialogClose();
		             }
	            	});

	            }
	        };
			obj.error=function(){
				LM.Core.Dialog({"content":"获取用户信息网络异常，请稍后重试"});
			};
			LM.Core.ajax(obj);
		}else{
			callback.apply(null,args);
		}
	},
	checkUserStatus:function(url,title){

		function checkAction(url,title,_userData){
			
		}
		var arr = Array.prototype.slice.call(arguments);
		LM.Core.getUserData(checkAction,arr);
	},
	//校验用户是否实名
	checkUserRealName:function(url,title){
		function checkAction(url,title,_userData){
			
		}
		var arr = Array.prototype.slice.call(arguments);
		LM.Core.getUserData(checkAction,arr);
	},
	//校验用户是否绑卡
	checkUserBindCard:function(url,title){
		function checkAction(url,title,_userData){
			
		}
		var arr = Array.prototype.slice.call(arguments);
		LM.Core.getUserData(checkAction,arr);
	},
	getParamsForUrl:function(){
		var _search= location.search;
		function parse_url(_url){ //定义函数 
            var pattern = /(\w+)=(\w+)/ig;//定义正则表达式 
            var parames = {};//定义数组 
            _url.replace(pattern, function(a, b, c){parames[b] = c;}); 
            /*这是最关键的.当replace匹配到classid=9时.那么就用执行function(a,b,c);其中a的值为:classid=9,b的值为classid,c的值为9;(这是反向引用.因为在定义 正则表达式的时候有两个子匹配.)然后将数组的key为classid的值赋为9;然后完成.再继续匹配到id=2;此时执行function(a,b,c);其中a的值为:id=2,b的值为id,c的值为2;然后将数组的key为id的值赋为2.*/ 
            return parames;//返回这个数组. 
        }
        var parames = parse_url(_search); 
        return parames;
	},
	//清除cookie
	clearCookie:function(){

	},
	//添加底部server
	addFooterServer:function(){
		var _server='<section class="service"><P><a href="/pagedev/">首页</a><i>|</i><a href="/pagedev/download/index.html">下载客户端</a><i>|</i><a href="/pagedev/about/about-index.html">我的91</a><i>|</i><a href="http://apps.91jinrong.com/zt/app_about/about.html">关于我们</a></P><P><em class="ico400"></em>24小时理财顾问：<a href="tel:400-000-0091"><span>400-000-0091</span></a></P></section>';
		$("body").append(_server);
	},
	//获取浏览器url参数
	getQueryString:function(name) {
		var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
		var r = window.location.search.substr(1).match(reg);
		if (r != null) return unescape(r[2]); return "";
	},
	initEchart:function(callback){
		// 使用
		require([
	        'echarts',
	        'echarts/chart/bar', // 使用柱状图就加载bar模块，按需加载
	        'echarts/chart/line',
	        'echarts/chart/map',
	        'echarts/chart/pie'
	    ],function(ec){
	    	if(typeof callback==="function"){
	    		callback(ec);
	    	}
	    });
	}
}
require.config({
    paths: {
        echarts:'/pagedev/static/dev/js/lib/'
    }
});
