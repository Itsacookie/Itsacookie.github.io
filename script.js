window.onload = function() {

  document.getElementById("Image")
    .onclick = function() {
  changeImage();
  }

  var i = 0;

  function changeImage() {
        var list = ["zeus.jpg", "luffy.jpg", "law.jpg", "strawhats.jpg"];
        i++;
        if (i > 3) {
          i = 0;

        }
        var newImg = list[i];
        document.getElementById("Image").src = newImg;
  }
}
