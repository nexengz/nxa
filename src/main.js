import "./styles/main.pcss";
if (process.env.NODE_ENV === "development") {
  require("file-loader!./index.pug");
}

import "./scripts/skills";

var parallax = (function () {
  var bg1 = document.querySelector('.parallax-header__item--1'),
    bg2 = document.querySelector('.parallax-header__item--2'),
    bg3 = document.querySelector('.parallax-header__item--3'),
    bg4 = document.querySelector('.parallax-header__item--4'),
    bg5 = document.querySelector('.parallax-header__item--5'),
    bg6 = document.querySelector('.parallax-header__item--6'),
    bg7 = document.querySelector('.parallax-header__item--7');

  return {
    move: function(block, windowScroll, strafeAmount) {
      var strafe = windowScroll / -strafeAmount + '%';
      var style = block.style;
      var transformString = 'translate3d(0,' +strafe+', 0)';

      style.top = strafe;
      style.webkitTransform = transformString;
    },
    init: function (wScroll) {
      this.move(bg1, wScroll, 210);
      this.move(bg2, wScroll, 180);
      this.move(bg3, wScroll, 150);
      this.move(bg4, wScroll, 120);
      this.move(bg5, wScroll, 90);
      this.move(bg6, wScroll, 60);
      this.move(bg7, wScroll, 30);
    }
  }
});

window.onscroll = function() {
  var wScroll = window.pageYOffset;
  parallax.init(wScroll)
  //console.log(wScroll);
}