/*
 * Copyright 2014 by Intellectual Reserve, Inc.
 *
 * Licensed under the Apache License, Version 2.0
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Author:        Adam Carson
 * Dependencies:  jquery.js (1.8.3+)
 *
 * Name: [no name]
 * Description: 
 * Options: 
 */

var BANNER = {};

BANNER.num = 0;
BANNER.timer;
BANNER.pause = false;

BANNER.slides = $('.js-banner__slide');

BANNER.positions;
BANNER.position = 0;

// CHANGE BANNER
BANNER.change = function(value) {
  BANNER.slides.eq(BANNER.num).fadeOut(1000);
  BANNER.positions.eq(BANNER.num).removeClass('active');
  if (BANNER.num + value > BANNER.slides.length - 1) {
    BANNER.num = 0;
  } else if (BANNER.num + value < 0) {
    BANNER.num = BANNER.slides.length -1;
  } else if (value === 'manual') {
    BANNER.num = BANNER.position;
  } else {
    BANNER.num += value;
  }
  BANNER.slides.eq(BANNER.num).fadeIn(1000);
  BANNER.positions.eq(BANNER.num).addClass('active');
};

// INITIALIZE
BANNER.init = function() {
  for (var i = 0; i < BANNER.slides.length; i++) {
    $('.js-banner__position').append(document.createElement('li'));
  }
  $('.js-banner__position li:first-child').addClass('active');
  BANNER.positions = $('.js-banner__position li');
  $('.js-banner__position li').on('click', function() {
    BANNER.position = $(this).index();
    BANNER.change('manual');
  });
  BANNER.timer = setInterval(function() {
    if(!BANNER.pause) {
      BANNER.change(1);
    }
  }, 5000);
  
  $('.js-pause').on('mouseenter', function() {
    BANNER.pause = true;
  });
  $('.js-pause').on('mouseleave', function() {
    BANNER.pause = false;
  });
  $('.js-banner__left').on('click', function() {
    BANNER.change(-1);
  });
  $('.js-banner__right').on('click', function() {
    BANNER.change(1);
  });
};

BANNER.init();
