var onScrollHandler = function() {
  // var newImageUrl = yourImageElement.src;
  var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
  if (scrollTop > 15) {
    console.log("fired");
    $("#readOn").hide();
     // newImageUrl = "img1.jpg"
  }
  // if (scrollTop > 200) {
  //    newImageUrl = "img2.jpg"
  // }
  // if (scrollTop > 300) {
  //    newImageUrl = "img3.jpg"
  // }
  // yourImageElement.src = newImageUrl;
};

$( document ).ready(function() {
    $("nav").fadeIn(2500);

  $('.workSlider').slick({
    centerMode: true,
    centerPadding: '60px',
    slidesToShow: 3,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 3
        }
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 1
        }
      }
    ]
  });

	window.addEventListener ("scroll", onScrollHandler);

});