var loadBtnState = function() {
  $('.bar-addremove').each(function(){
    var $barId = $(this).data('bar_id');
    var btnState = localStorage.getItem($barId);

    if (btnState == 'yes') {
        $(this).find('img').attr('src', '/assets/tick.png');
        $(this).find('img').addClass('selected');
    } else {
        $(this).find('img').attr('src', '/assets/add.png');
    };
  });

  $('.bar-addremove').on('click', 'img', function(){

    $(this).toggleClass('selected');

    if ($(this).hasClass('selected')) {
        $(this).attr('src', '/assets/tick.png')
    } else {
        $(this).attr('src', '/assets/add.png')
    };
    
    var $barId = $(this).parent().data('bar_id');
    console.log('clicked bar:' + $barId);
    var temp = toggleBarSelectedLocalStorage($barId);
  });

  var saveLocalStorage = function(saveKey,saveMe){
    localStorage.setItem(saveKey,saveMe);
    return true;
  };

  var getLocalStorage = function(key){
    return localStorage.getItem(key);
  };

  var toggleBarSelectedLocalStorage = function(barId){
    var bool = getLocalStorage(barId);
    console.log('LocaStorage Bool: ' + bool);
    if (bool == 'yes'){
        saveLocalStorage(barId,'no');
        return 'no';
    } else if (bool == 'no'){
        saveLocalStorage(barId,'yes');
        return 'yes'
    } else {
        // handles bool == nil or null
        saveLocalStorage(barId,'yes');
        return 'yes';
    }
  };
};


$(document).ready(function(){
  console.log('good to go selecting bars');
  loadBtnState();
});