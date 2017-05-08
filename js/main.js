$(document).ready(function(){

	$("#cta").click(function() {
	    $('html, body').animate({
	        scrollTop: $("#slide1").offset().top
	    }, 1000);
	});

	$("#cta").mouseenter(function() {
	    $("#cta img").effect( "bounce", {times:2}, 800);
	});

});