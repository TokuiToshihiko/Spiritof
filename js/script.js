/*if(navigator.userAgent.match(/iPad/)){
  jQuery("meta[name='viewport']").attr("content", "width=1040px");
}*/

/*jQuery(function($){
  var $w = $(window);
  var $h = $("html");
  var $b = $("body");

  });*/

$(function() {

	//ページ内スクロール
	$(".btn-down").click(function () {
		var i = $(".btn-down").index(this)
		var p = $("#main").eq(i).offset().top;
		$('html,body').animate({ scrollTop: p }, 'fast');
		return false;
	});

	//ページ上部へ戻る
	$(".btn_top").click(function () {
		$('html,body').animate({ scrollTop: 0 }, 'fast');
		return false;
	});

});






// For discussion and comments, see: http://remysharp.com/2009/01/07/html5-enabling-script/
(function(){if(!/*@cc_on!@*/0)return;var e = "abbr,article,aside,audio,bb,canvas,datagrid,datalist,details,dialog,eventsource,figure,footer,header,hgroup,mark,menu,meter,nav,output,progress,section,time,video".split(',');for(var i=0;i<e.length;i++){document.createElement(e[i]);}})();
