// $(document).ready(function() {
//   $('#container').bind('scroll', function(){
//     if ($('.pagination').length) {
//       $(this).scroll(function() {
//         var measure = $("#container").height()
//         var url = $('.pagination .next_page').attr('href');
//         if (url && $(this).scrollTop() > measure * 1.3){
//           $('.pagination').text("Please Wait...");
//           console.log(measure);
//           measure = measure*2;
//           return $.getScript(url);
//         }
//       });
//       return $(window).scroll();
//     }
//   });
// });

//   $('#container').bind('scroll', function(){
//    if($(this).scrollTop() + $(this).innerHeight() >= $(this)[0].scrollHeight){
//       var new_div = '<div class="new_block"></div>';
//       $('.main_content').append(new_div.load('/path/to/script.php'));
//    }
// });




 $(document).ready(function() {
  if ($('.pagination').length) {
    $(window).scroll(function() {
      var url = $('.pagination .next_page').attr('href');
      if (url && $(window).scrollTop() > $(document).height() - $(window).height() - 50) {
        $('.pagination').text("Please Wait...");
        return $.getScript(url);
      }
    });
    return $(window).scroll();
  }
});