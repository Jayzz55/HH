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
//= require jquery_ujs
//= require turbolinks
//= require_tree .

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

// The toggleNav function itself
function toggleNavigation(){
  if ($('#container').hasClass('display-nav')){
    // close nav
    $('#container').removeClass('display-nav');
    $('#canvas').removeClass('dimmer');
    $('.toggle-nav').removeClass('display-block');
  } else{
    // open nav
    $('#container').addClass('display-nav');
    $('#canvas').addClass('dimmer');
    $('.toggle-nav').addClass('display-block');
  }
}


function altToggle(){
  if ($('#container').hasClass('display-nav')){
        $('#container').removeClass('display-nav');
    $('#canvas').removeClass('dimmer');
  }
}