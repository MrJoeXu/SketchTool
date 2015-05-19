
var color = black;
var currentSize = 16;

function initGrid(gridSize) {
	var length = 640/gridSize;

	for (var i=1; i<= gridSize; i++) {
		for (var j=1; j<=gridSize; j++){		
			$('#board').append('<div class="tile"></div>')
		};
	};
		$('.tile').css(
		{'width': length, 
		 'height': length});
	console.log(i);
	console.log(i);
};



function hoverGrid() {
	$('.tile').hover(function() {
		$(this).css('background-color', color);
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
			$(this).css('opacity', 0);
	}, function() {
	});
};

function initKeyControll() {
	// Press left 'shift' to start drawing, realse to stop;
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
	// Press "e" to rease tile, release to cancel;
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

$('#reset').click(function(event) {
	$('.tile').remove();
	initGrid(currentSize);
});



$('#red').click(function(event) {
	color = '#E9223C';
});
$('#orange').click(function(event) {
	color = '#F1AE68';
});
$('#yellow').click(function(event) {
	color = '#FFCE35';
});
$('#green').click(function(event) {
	color = '#39CB74';
});
$('#cyan').click(function(event) {
	color = '#3FD3B8';
});
$('#blue').click(function(event) {
	color = '#3B9AD9';
});
$('#purple').click(function(event) {
	color = '#612268';
});
$('#black').click(function(event) {
	color = 'black';
});

$(document).ready(function() {
	initGrid(16);
	initKeyControll();



	$('#size').click(function(event) {
		var input = prompt("Please Enter the numer of tiles for sides of board: \n (less than 100) ");
		currentSize = input;
		$('.tile').remove();
		initGrid(input);
	});	
});