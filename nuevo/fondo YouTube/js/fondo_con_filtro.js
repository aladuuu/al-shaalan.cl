var myPlayer;
jQuery(function () {
	myPlayer = jQuery("#fondoYT").YTPlayer({});
	myPlayer.YTPApplyFilters({
		grayscale: 50,
		sepia: 80
	});
});