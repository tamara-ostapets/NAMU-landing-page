'use strict';

const menu = document.querySelector('.nav');

const toggler = document.querySelector('.toggler');

const togglerLine = document.querySelector('.toggler__line');

toggler.onclick = function toggleSidebar() {
  menu.classList.toggle('nav--open');
  toggler.classList.toggle('toggler--active');
  togglerLine.classList.toggle('toggler__line--active');
};
