function changePicture(alternatePhoto) {
  var mainPhoto = document.getElementById("main-photo").src;
  document.getElementById("main-photo").src = alternatePhoto.src;
  $(alternatePhoto).attr("src", mainPhoto);
}
