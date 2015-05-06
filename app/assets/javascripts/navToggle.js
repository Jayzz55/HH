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