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
  dots: true,
  infinite: false,
  speed: 300,
  slidesToShow: 4,
  slidesToScroll: 4,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
  });

	window.addEventListener ("scroll", onScrollHandler);

});