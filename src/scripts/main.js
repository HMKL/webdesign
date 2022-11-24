/* eslint-disable linebreak-style */
(function() {
  'use strict';
  // Your custom JavaScript goes here

 const getBody = document.querySelector('body');
  const getBtn = document.querySelector('.hamburger-menu');
  const getMenu = document.querySelector('.links');
  getBtn.addEventListener('click', () =>{
    getBtn.classList.toggle('active');
      getMenu.classList.toggle('active');
      getBody.classList.toggle('over');
  });





  let new_scroll_position = 0;
  let last_scroll_position;
  const header = document.querySelector('.top.bar');
  window.addEventListener('scroll', function(e) {
    last_scroll_position = window.scrollY;
    
    if (new_scroll_position < last_scroll_position && last_scroll_position > 80) {
      header.classList.remove("slideDown");
      header.classList.add("slideUp");
      // header.classList.remove('absolute');
      // header.classList.add('fixed');
  
    } else if (new_scroll_position > last_scroll_position) {
      header.classList.remove("slideUp");
      header.classList.add("slideDown");
    } 
  
    new_scroll_position = last_scroll_position;
  });

})();



// START





function value() {
  const navbar = document.querySelector('.top.bar');
  var scroll = window.scrollY;
  if (scroll < 200) {
      navbar.classList.remove('color');
      // navbar.classList.remove('fixed');
      // navbar.classList.add('absolute');

  } else {
      navbar.classList.add('color');
  }
}

window.addEventListener('scroll', value);



//END

