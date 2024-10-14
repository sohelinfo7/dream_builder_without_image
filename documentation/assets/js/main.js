

$(document).ready(function ($) {
  "use strict";
  /*Table of content
  ----------------------------------------*/
  /*
  1. Nav Link Active

*/
  /*===============================================
                    1. Nav Link Active Js
  =================================================*/
     // Add active class to the current button (highlight it)
     var header = document.getElementById("side-nav");
     var btns = header.getElementsByClassName("nav-link");
     for (var i = 0; i < btns.length; i++) {
         btns[i].addEventListener("click", function () {
             var current = document.getElementsByClassName("active");
             current[0].className = current[0].className.replace(" active", "");
             this.className += " active";
         });
     }
  //=======================END========================
}(jQuery));