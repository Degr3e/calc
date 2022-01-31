$(document).ready(function() {
	/*$("button").dblclick(function(){
		$("p").hide();
	});*/
	/*$("p").mouseenter(function(){
		alert("hello!,my new friend.I glad to see you!!")
	});*/
	/*$("p").mouseleave(function(){
		alert("hello!,my new friend.I glad to see you!!")
	});*/
	/*$("p").mousedown(function(){
		alert("hello!,my new friend.I glad to see you!!")
	});*/
	/*$("p").mouseup(function(){
		alert("hello!,my new friend.I glad to see you!!")
	});*/
	/*$("p").hover(function(){
		alert("hello!!!")
	},function(){
		alert("come back")
	});*/
	/*$("input").focus(function(){
		$(this).css("background-color", "#dadceb");
	});
		$("input").blur(function(){
		$(this).css("background-color", "white");
	});*/
	/*$("p").on({
		mouseenter:function(){
			$(this).css('color', '#d899ff');
		},
		mouseleave:function(){
			$(this).css('color', '#99ffb4');
		},
		click: function(){
			$(this).css('font-size', '30px');
		},
		dblclick: function(){
			$(this).css('font-size', '10px');
		},
		mouseup: function(){
			$(this).css('font-size', '100px');
		}
	});
	$("button").click(function(){
		alert($(this).css('color'));
	});*/
	$(".times").click(function(){
		let a = +prompt("Enter Number#1", "");
		let b = +prompt("Enter Number#2", "");
		alert(a * b);
	});
	$(".del").click(function(){
		let a = +prompt("Enter Number#1", "");
		let b = +prompt("Enter Number#2", "");
		alert(a / b);
	});
		$(".min").click(function(){
		let a = +prompt("Enter Number#1", "");
		let b = +prompt("Enter Number#2", "");
		alert(a - b);
	});
		$(".plus").click(function(){
		let a = +prompt("Enter Number#1", "");
		let b = +prompt("Enter Number#2", "");
		alert(a + b);
	});
		$(".two_times").click(function(){
		let a = +prompt("Enter Number#1", "");
		let b = +prompt("Enter Number#2", "");
		alert(a ** b);
	});
		$(".kor").click(function(){
		let a = +prompt("Enter Number#1", "");
		alert(a ** 1/2);
	});


});

