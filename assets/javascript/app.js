var speakers = [
	{
		"name": "Allen Iverson, Basketball",
		"quote": "This guy gets it."
	}, {
		"name": "Bono, U2",
		"quote": "A real class act, and an inspiration."
	}, {
		"name": "John Claybrook, Operations Manager",
		"quote": "Prentice is a natural leader, and quality teacher. A phenomenal hire for anyone."
	}, {
		"name": "Charles Erdmann, Production Manager",
		"quote": "PM is really dependable. He will always get the job done."
	}, {
		"name": "Lokesh Anand, Back-End Developer",
		"quote": "He has an eye for detail. His persistence and problem solving skills make him a dependable team member."
	}
]

var curInd = 0;

var quoteLoop = function () {
	$(".quote").animate({opacity: "0"}, 500);
	$(".speaker").animate({opacity: "0"}, 500, function(){
		$(".quote").text(speakers[curInd].quote);
		$(".speaker").text(speakers[curInd].name)
	});
	$(".quote").animate({opacity: "1"}, 500);
	$(".speaker").animate({opacity: "1"}, 500);
	if (curInd < speakers.length-1) {
		curInd++;
	} else {
		curInd = 0;
	}
}

$(document).ready(function() {
	$(".enterSite").click(function() {
		$(".titles").animate({opacity: "0"}, 500);
		$("#coverHeadshot").animate({opacity: "0"}, 500);
		$(".enterSite").animate({opacity: "0"}, 1000);
		$(".cover").animate({right: "100%", width: "0", opacity: "0"}, 2000, function () {
			$('.mainContent').animate({opacity: "1"}, 1000);
			$('.cover').hide();
			$(".enterSite").hide();
		});
	});

	setInterval(quoteLoop, 10000);

	$(".pageLink").click(function () {
		$(".pageLink").removeClass("active");
		$(this).addClass("active");
	})

});