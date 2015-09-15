$(document).ready(function () {

	function setHeroHeight() {

		// resize the hero to the innerWidth of the window
		var window_height = window.innerHeight;
		var navbar_spacer = $('#_fixed_navbar_spacer').height();
		var adjusted_window_height = window_height - navbar_spacer;
		if (adjusted_window_height > 549) { // do not resize on small devices
			$('#hero').height(adjusted_window_height);
		}
	}

	setHeroHeight();
	$(window).resize(function() { setHeroHeight() });
 });
