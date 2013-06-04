$(document).ready(function() {
	function fixSticky() {
		var width = $("#home").width();
		$("#navigation_container").width(width);
	}

	fixSticky();
	$(window).resize(fixSticky);
});


