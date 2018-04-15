var onScrollHandler = function() {
  // var newImageUrl = yourImageElement.src;
  var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
  if (scrollTop > 50) {
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
  console.log("ready")

	window.addEventListener ("scroll", onScrollHandler);
});