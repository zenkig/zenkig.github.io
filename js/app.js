//TO Create an overlay with the large image - Lightbox

var $overlay = $('<div id="overlay"></div>');
var $image = $("<img>");
var $caption = $("<p></p>");

//Capture the click event on a link to an image
$("#gallery a").click(function(event){

  var hrefs=$(this).attr("class");
  if(hrefs=="imageStack"){
  event.preventDefault();
  //Add the overlay only when it's  an image
  //An image to overlay
  $overlay.append($image);

  //A caption to overlay
  $overlay.append($caption);

  //Add overlay
  $("body").append($overlay);
}

  var imageLocation = $(this).attr("href");
  var image_check = imageLocation.substr(imageLocation.length - 5)
    http_tag = "http";
    image = [".jpeg"]

    if($.inArray(image_check, image) > -1){

      //Update overlay with the image linked in the link
      $image.attr("src", imageLocation);
      $overlay.show();

      //Get child's alt attribute and set caption
      var captionText = $(this).children("img").attr("alt");
      $caption.text(captionText);
    }

});

$overlay.click(function(){
  //Hide the overlay
  $overlay.hide();
});
