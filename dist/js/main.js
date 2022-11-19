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
})();

const getNav = document.querySelector('.top.bar');
let prevScrollpos = window.pageYOffset;
window.onscroll = function() {
let currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    getNav.style.top = "0";
   
  } else {
    getNav.style.top = "-64px";
  
  }
  prevScrollpos = currentScrollPos;
}
