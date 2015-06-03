var loadBtnState = function() {

  $('.bar-addremove').off('click', 'img');

  renderBtn();

  $('.bar-addremove').on('click', 'img', function(){

    $(this).toggleClass('selected');

    if ($(this).hasClass('selected')) {
        $(this).attr('src', '/assets/tick.svg');
    } else {
        $(this).attr('src', '/assets/add.svg');
    };
    
    var $barId = $(this).parent().data('bar_id');
    // console.log('clicked bar:' + $barId);
    toggleBarSelectedLocalStorage($barId);
  });

  var saveLocalStorage = function(saveKey,saveMe){
    localStorage.setItem(saveKey,saveMe);
    return true;
  };

  var toggleBarSelectedLocalStorage = function(barId){
    var bool = localStorage.getItem(barId);
    // console.log('LocaStorage Bool: ' + bool);
    if (bool == 'yes'){
        localStorage.removeItem(barId);
    } else {
        saveLocalStorage(barId,'yes');
    }
  };
};

var renderBtn = function() {

  $('.bar-addremove').each(function(){
    var barId = $(this).data('bar_id');
    var btnState = localStorage.getItem(barId);

    if (btnState == 'yes') {
      $(this).find('img').attr('src', '/assets/tick.svg');
      $(this).find('img').addClass('selected');
    } else {
      $(this).find('img').attr('src', '/assets/add.svg');
      $(this).find('img').removeClass('selected');
    };

  });
};

var addToCart = function() {
  var barList = JSON.parse(localStorage.getItem('barList')) || {};
  console.log(barList);
  renderCartList();

  $('.results-row').off('click', '.bar-addremove img');
  $('#cart').off('click', '#delete');
  $('#delete-all').off('click');

  
  $('.bar-addremove').on('click', 'img', addToCart);
  $('#cart').on('click', '#delete', deleteItem);
  $('#delete-all').on('click',deleteAll);

  function addToCart(){
    var self = $(this).parent();
    var row = $(self).parent()[0];
    var barId = $(self).data('bar_id');
    var item_name = $(row).find('h4 a').html();
    var item_href = $(row).find('h4 a').attr("href");
    var item_html = "<li id='list-" + barId + "' data-bar_id=" + barId + "><a href="+ item_href +">" + item_name + "</a> <a id='delete' class='remove-bar' href='#''></a></li>"

    if($(this).hasClass('selected')){
      barList[barId] = barId;
      localStorage.setItem( 'barList', JSON.stringify(barList) );
      localStorage.setItem("bar-" + barId + "-name", item_name);
      localStorage.setItem("bar-" + barId + "-href", item_href);
      $(self).addClass('added');
      console.log(localStorage.getItem("bar-" + barId + "-name"));
      $('.saved-list').find('ul').append(item_html);
      updateCartBadge();
    } else {
      $('#cart').find('#list-'+barId).remove();
      $(self).removeClass('added');
      localStorage.removeItem("bar-" + barId + "-name");
      localStorage.removeItem("bar-" + barId + "-href");
      delete barList[barId];
      localStorage.setItem( 'barList', JSON.stringify(barList) );
      updateCartBadge();
      console.log('remove item');
    }
  }

  function deleteItem(){
    console.log("hear you");
    $(this).parent().remove();
    var barId = $(this).parent().data('bar_id');
    console.log(barId);
    localStorage.removeItem("bar-" + barId + "-name");
    localStorage.removeItem("bar-" + barId + "-href");
    delete barList[barId];
    localStorage.setItem( 'barList', JSON.stringify(barList) );
    $('#bar-'+barId).find('img').attr('src', '/assets/add.svg');
    localStorage.removeItem(barId);
    updateCartBadge();
    console.log(barList);
  };

  function deleteAll(){
    barList = {};
    $('#cart').find('ul').remove();
    $('.saved-list').append('<ul>');
    localStorage.clear();
    renderBtn();
    updateCartBadge();
  };

  function renderCartList(){
    for (var barKey in barList){
      var barId = barList[barKey];
      var item_name = localStorage.getItem("bar-" + barId + "-name");
      var item_href = localStorage.getItem("bar-" + barId + "-href");
      var item_html = "<li id='list-" + barId + "' data-bar_id=" + barId + "><a href="+ item_href +">" + item_name + "</a> <a id='delete' class='remove-bar' href='#''></a></li>"
      if($('#cart').find('#list-' + barId)[0]){
        return;
      } else {
        $('#cart ul').append(item_html);
      };
    };
    updateCartBadge();
  };
};

var updateCartBadge = function(){
  var barList = JSON.parse(localStorage.getItem('barList')) || {};
  var numBars = Object.size(barList);
  if (numBars === 0){
    $("#cart-badge").fadeOut();
  } else {
    $("#cart-badge").fadeIn();
    $("#cart-badge").html(Object.size(barList));
  };
}

Object.size = function(obj) {
  var size = 0, key;
  for (key in obj) {
      if (obj.hasOwnProperty(key)) size++;
  }
  return size;
};

var saveBar = function() {
  loadBtnState();
  addToCart();
};

$(document).ready(function(){
  // console.log('good to go selecting bars');
  $(".banner-img-wrapper").on('click', 'a', function(){
    event.preventDefault();
  });
  saveBar();
});
