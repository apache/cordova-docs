$(function(){ // resize the hero to the innerWidth of the window
	var window_height = window.innerHeight;
	var navbar_spacer = $('#_fixed_navbar_spacer').height();
	var adjusted_window_height = window_height - navbar_spacer;
	console.log('new height ' + adjusted_window_height)
	$('#hero').height(adjusted_window_height);
 });