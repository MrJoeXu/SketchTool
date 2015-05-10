$(document).ready(function() {
	function initGrid() {
		for (var i=1; i<= 16; i++) {
			for (var j=1; j<=16; j++){
				$('#board').append('<div class="tile"></div>')
			};
		};
		hoverGrid();
	};

	initGrid();

	function hoverGrid() {
		$('.tile').hover(function() {
			var opacity = Number($(this).css('opacity'));
			if (opacity <= 1) {
				$(this).css('opacity', opacity + 0.1);
			};

		}, function() {
		});
	};
});