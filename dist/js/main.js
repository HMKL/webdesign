let layoutHandler;

(function($) {
    'use strict';
    let LayoutHandler = function() {
        let self = this;

        this.ready = function() {
            this.handleDOM();
            this.handleEvents();
        };

        this.handleDOM = function() {

        };

        this.handleEvents = function() {

        };
    };

    layoutHandler = new LayoutHandler();

    $(document).ready(function() {
        layoutHandler.ready();


    });
})(jQuery);

/* eslint-disable linebreak-style */
(function() {
  'use strict';
  // Your custom JavaScript goes here


  const getBtn = document.querySelector('.hamburger-menu');
  const getMenu = document.querySelector('.links');
  getBtn.addEventListener('click', () =>{
    getBtn.classList.toggle('active');
      getMenu.classList.toggle('active');
  });






  var new_scroll_position = 0;
  var last_scroll_position;
  var header = document.querySelector('.top.bar');
  
  window.addEventListener('scroll', function(e) {
    last_scroll_position = window.scrollY;
  
    // Scrolling down
    if (new_scroll_position < last_scroll_position && last_scroll_position > 80) {
      // header.removeClass('slideDown').addClass('slideUp');
      header.classList.remove("slideDown");
      header.classList.add("slideUp");
  
    // Scrolling up
    } else if (new_scroll_position > last_scroll_position) {
      // header.removeClass('slideUp').addClass('slideDown');
      header.classList.remove("slideUp");
      header.classList.add("slideDown");
    }
  
    new_scroll_position = last_scroll_position;
  });



console.log(header);


})();

// const getNav = document.querySelector('.top.bar');
// let prevScrollpos = window.pageYOffset;
// window.onscroll = function() {
// let currentScrollPos = window.pageYOffset;
//   if (prevScrollpos > currentScrollPos) {
//     getNav.style.top = "0px";
   
//   } else {
//     getNav.style.top = "-64px";
  
//   }
//   prevScrollpos = currentScrollPos;
// }
