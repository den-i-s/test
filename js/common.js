$(document).ready(function () {
	$(".tr").mousemove(function (e) {
		var moveX = (e.pageX *-1/25
			);
		var moveY = (e.pageY *-1/25
			);
		$(this).css("background-position", moveX + "px " + moveY + "px");
	});
});