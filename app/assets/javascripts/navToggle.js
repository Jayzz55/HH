
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
    $('#canvas').removeClass('fixed-height');
  } else{
    // open nav
    $('#container').addClass('display-nav');
    $('#container').addClass('dimmer');
    $('.page').addClass('noscroll');
    $('.toggle-nav').addClass('display-block');
    $('#canvas').addClass('fixed-height');
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
    $('#canvas').removeClass('fixed-height');
  }
}

//= require_tree .
