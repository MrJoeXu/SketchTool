$(document).ready(function() {
	function initGrid() {
		for (var i=1; i<= 40; i++) {
			for (var j=1; j<=40; j++){
				$('#board').append('<div class="tile"></div>')
			};
		};
	};

	$(document).keydown(function(event){ 
console.log(event.keyCode); 
}); 

	keyControll();
	initGrid();

	function keyControll() {
		$(document).keydown(function(event) {
			if (event.keyCode == 16) {
				hoverGrid();
			}
		});
		$(document).keyup(function(event) {
			if (event.keyCode == 16) {
				$('.tile').unbind("mouseenter mouseleave");
			}
		});

		$(document).keydown(function(event) {
			if (event.keyCode == 69) {
				eraseGrid();
			}
		});
		$(document).keyup(function(event) {
			if (event.keyCode == 69) {
				$('.tile').unbind("mouseenter mouseleave");
			}
		});

	};

	function hoverGrid() {
		$('.tile').hover(function() {
			var opacity = Number($(this).css('opacity'));
			if (opacity <= 1) {
				$(this).css('opacity', opacity + 0.1);
			};

		}, function() {
		});
	};

	function eraseGrid() {
		$('.tile').hover(function() {
			var opacity = Number($(this).css('opacity'));
			if (opacity >= 0.4) {
				$(this).css('opacity', opacity - 0.1);
			};

		}, function() {
		});
	};

	function newGrid(gridSize) {
		//$('.tile').remove();
		var length = 640/gridSize;
		$('.tile').css('width', length);
		for (var i=1; i<= gridSize; i++) {
			for (var j=1; j<= gridSize; j++){
				$('#board').append('<div class="tile"></div>')
			};
		};
		//hoverGrid();
	}


	$('#reset').click(function(event) {
		$('.tile').remove();
		initGrid();
	});

});