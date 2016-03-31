var $ = require("jquery");
var converter = require("../lib/converter");
var template = require("./jade/main.jade");
$('body').append(template());

$("#button").on("click", function(){
	action();
});
$("#input").on("keyup", function(e){
	var theEvent = e || window.event;
    var keyPressed = theEvent.keyCode || theEvent.which;
    if(keyPressed == 13) action();
});

function action(){
	var input = $("#input").val();
	var converterObj = new converter();
	converterObj.secondsToDate(1459327000, function(result){
		$("#result").append(result);
		console.log(result);
	});
};