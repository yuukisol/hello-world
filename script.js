$("#left-button").on("click", function() {
	$('table').remove();
	var size = prompt('Enter size: ');
	var tableString = "<table>";
	for (var i = 0; i < size; i++) {
		tableString += "<tr>";
		for (var j = 0; j < size; j++) {
			tableString += "<td>" + "<div class=square></div>" + "</td>";
		}
		tableString += "</tr>";
	}
	tableString += "</table>";
	var table = $(tableString);
	$("#main").prepend($(table));

	$('table').on('mouseenter', '.square', function() {
		$(this).addClass('entered');
	});
});

$("#right-button").on("click", function() {
	$('table').remove();
	var size = prompt('Enter size: ');
	var tableString = "<table>";
	for (var i = 0; i < size; i++) {
		tableString += "<tr>";
		for (var j = 0; j < size; j++) {
			tableString += "<td>" + "<div class=square></div>" + "</td>";
		}
		tableString += "</tr>";
	}
	tableString += "</table>";
	var table = $(tableString);
	$("#main").prepend($(table));

	$('table').on('mouseentedr', '.square', function() {
		var color = '#';
		var j = 0;	
		for (var i = 0; i < 6; i++) {
			j = Math.floor(Math.random() * 16);
			if (j < 10) {
				color += j;
			}
			else {
				color += (String.fromCharCode(97 + j - 10));
			}
		}
		$(this).css({'background-color': color});
	});
});

