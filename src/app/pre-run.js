'use strict';

(function (window, document) {
  var cb = function() {
      var l = document.createElement('link'); 
          l.rel = 'stylesheet';
          l.href = '/styles/main.css';
      var h = document.getElementsByTagName('head')[0]; 
          h.parentNode.insertBefore(l, h);


      (function(b,o,i,l,e,r) {
        b.GoogleAnalyticsObject=l;
        b[l]||(b[l]=function(){
          (b[l].q=b[l].q||[]).push(arguments);
        });
        b[l].l=+new Date;
        e=o.createElement(i);
        r=o.getElementsByTagName(i)[0];
        e.src='//www.google-analytics.com/analytics.js';
        e.async=!0;
        r.parentNode.insertBefore(e,r);
      }(window,document,'script','ga'));
      ga('create','UA-XXXXX-X');
      ga('send','pageview');
      
  };
  
  var raf = requestAnimationFrame || mozRequestAnimationFrame ||
      webkitRequestAnimationFrame || msRequestAnimationFrame;
      
  if (raf) {
    raf(cb);
  } else {
    window.addEventListener('load', cb);
  }
})(window, document);