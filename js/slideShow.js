'use strict';

var slideShow = document.getElementById('slideShow');

var images = ['img/chinook.jpg', 'img/cutter.jpeg', 'img/family.jpg', 'img/fish.jpg', 'img/frosted-cookie.jpg', 'img/salmon.png', 'img/shirt.jpg'];

var i = 0;

var time = 3000;

function changeImage() {

  slideShow.src = images[i];

  if(i < images.length - 1) {
    i++;
  } else {
    i=0;
  }
  setTimeout(changeImage, time);
}

window.onload = changeImage;