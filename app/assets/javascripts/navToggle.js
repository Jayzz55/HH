
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

$(function(){
  $('.nav-toggle-cart').click(function(){
    navToggleCart();
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
    var navLinks = $('#toggle');
    if ($('#container').hasClass('display-cart')){
    // close nav
    navLinks.show();  // show desktop nav
    console.log("hiding nav");
    $('#container').removeClass('display-cart');
    $('#container').removeClass('dimmer');
    $('.page').removeClass('noscroll');
    $('.toggle-cart').removeClass('display-block');
    $('#canvas').removeClass('fixed-height');

    // $('#cart').css("display", "none")

  } else{
    // open nav
    navLinks.hide();  // hide desktop nav
    $('#container').addClass('display-cart');
    $('#container').addClass('dimmer');
    $('.page').addClass('noscroll');
    $('.toggle-cart').addClass('display-block');
    $('#canvas').addClass('fixed-height');
    // $('#cart').css("display", "inherit")
  }
}


function altToggle(){
  var navLinks = $('#toggle');
  if ($('#container').hasClass('display-nav') || $('#container').hasClass('display-cart') ){
    $('#toggle').show(); // show desktop nav
    $('#container').removeClass('display-nav');
    $('#container').removeClass('display-cart');
    $('#container').removeClass('dimmer');
    $('#canvas').removeClass('fixed-height');
  }
}

function navToggleCart(){
    toggleNavigation();
    var delay=300;
    setTimeout(function(){
      toggleCart();
  }, delay);

}

//= require_tree .
