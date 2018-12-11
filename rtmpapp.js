;var RtmpObj = (function(){
	
	var protoobj = {};
	
	// 默认参数
	// silent k & c Default k 非静默输出
	// title 摄像头名称，根据名称获取pid结束任务
	// ordersn 推送rtmp流订单参数
	// rtsp 拉取视频流地址
	// rtmp 流媒体服务器地址
	// status 0 开启流直播
	protoobj.RtmpParam = {
		"silent"	:	"k" 			,
		"title"		:	"JMDSP303_001"  ,
		"ordersn"	:	"2018120256139" ,
		"rtsp"		:	"rtsp://admin:99114@192.168.1.10:554/H.264/ch1/main/av_stream" ,
		"rtmp"		:	"rtmp://xxx.com/live?user_name=88888$password=88888$service_code=88888$opaque=" ,
		"status"	:	"0" ,
		"protourl"	:	"JmdSpWebShell" ,
		"rtmpstr"	: 	""
	};
	
	// 设置参数
	protoobj.init = function(silent , title , ordersn , rtsp , rtmp , status , protourl){
		this.RtmpParam.silent 		= silent 	|| this.RtmpParam.silent;
		this.RtmpParam.title 		= title 	|| this.RtmpParam.title;
		this.RtmpParam.ordersn 		= ordersn 	|| this.RtmpParam.ordersn;
		this.RtmpParam.rtsp 		= rtsp 		|| this.RtmpParam.rtsp;
		this.RtmpParam.rtmp 		= rtmp 		|| this.RtmpParam.rtmp;
		this.RtmpParam.status 		= status 	|| this.RtmpParam.status;
		this.RtmpParam.protourl 	= protourl 	|| this.RtmpParam.protourl;
		return protoobj;
	}
	
	// 组件字符串
	protoobj.creatrtmpstr = function(){
		this.RtmpParam.rtmpstr = this.RtmpParam.protourl + ':' + 'test' + '#' + this.RtmpParam.title + '#' + this.RtmpParam.silent + '#' + this.RtmpParam.rtsp + '#' + this.RtmpParam.rtmp + this.RtmpParam.ordersn + '#' + this.RtmpParam.status;
		return protoobj;
	}
	
	// 打开摄像头 获取直播流
	protoobj.startrtmp = function(){
		location.href = this.RtmpParam.rtmpstr;
	}
	
	// 关闭摄像头
	protoobj.endrtmp = function(){
		this.RtmpParam.status = "1";
		location.href = this.RtmpParam.rtmpstr;
	}
	
	return protoobj;
})();