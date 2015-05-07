var loadBtnState = function() {

  $('.bar-addremove').off('click', 'img');

  $('.bar-addremove').each(function(){
    var $barId = $(this).data('bar_id');
    var btnState = localStorage.getItem($barId);

    if (btnState == 'yes') {
        $(this).find('img').attr('src', '/assets/tick.svg');
        $(this).find('img').addClass('selected');
    } else {
        $(this).find('img').attr('src', '/assets/add.svg');
    };
  });

  $('.bar-addremove').on('click', 'img', function(){

    $(this).toggleClass('selected');

    if ($(this).hasClass('selected')) {
        $(this).attr('src', '/assets/tick.svg')
    } else {
        $(this).attr('src', '/assets/add.svg')
    };
    
    var $barId = $(this).parent().data('bar_id');
    console.log('clicked bar:' + $barId);
    toggleBarSelectedLocalStorage($barId);
  });

  var saveLocalStorage = function(saveKey,saveMe){
    localStorage.setItem(saveKey,saveMe);
    return true;
  };

  var toggleBarSelectedLocalStorage = function(barId){
    var bool = localStorage.getItem(barId);
    console.log('LocaStorage Bool: ' + bool);
    if (bool == 'yes'){
        localStorage.removeItem(barId);
    } else {
        saveLocalStorage(barId,'yes');
    }
  };
};


$(document).ready(function(){
  console.log('good to go selecting bars');
  loadBtnState();
});