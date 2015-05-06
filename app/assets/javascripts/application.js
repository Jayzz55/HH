// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.

//= require jquery
//= require jquery.turbolinks
//= require jquery_ujs
//= require turbolinks



// Calling the function
$(function(){
  $('.toggle-nav').click(function(){
    toggleNavigation();
  });
});

$(function(){
  $('.page').click(function(){
    altToggle();
  });
});

$(function(){
  $('.toggle-cart').click(function(){
    toggleCart();
  });
});

// The toggleNav function itself
function toggleNavigation(){
  if ($('#container').hasClass('display-nav')){
    // close nav
    $('#container').removeClass('display-nav');
    $('#container').removeClass('dimmer');
    $('.page').removeClass('noscroll');
    $('.toggle-nav').removeClass('display-block');
  } else{
    // open nav
    $('#container').addClass('display-nav');
    $('#container').addClass('dimmer');
    $('.page').addClass('noscroll');
    $('.toggle-nav').addClass('display-block');
  }
}

function toggleCart(){
    if ($('#container').hasClass('display-cart')){
    // close nav
    $('#container').removeClass('display-cart');
    $('#container').removeClass('dimmer');
    $('.page').removeClass('noscroll');
    $('.toggle-cart').removeClass('display-block');
  } else{
    // open nav
    $('#container').addClass('display-cart');
    $('#container').addClass('dimmer');
    $('.page').addClass('noscroll');
    $('.toggle-cart').addClass('display-block');
  }
}


function altToggle(){
  if ($('#container').hasClass('display-nav') || $('#container').hasClass('display-cart') ){
    $('#container').removeClass('display-nav');
    $('#container').removeClass('display-cart');
    $('#container').removeClass('dimmer');
  }
}

//= require_tree .
