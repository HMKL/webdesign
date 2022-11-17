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


