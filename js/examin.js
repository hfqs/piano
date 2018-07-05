function check (num){
  var len=$('.answers>div').length

  for (var i = 0; i < len; i++) {
    if (num==i) {
      $(`.choice:eq(${i}) img`).addClass('right-answer')
      $(`.choice:eq(${i})`).append('<img class="checkImg" src="exam-images/正确.png" />')

    }else{
      $(`.choice:eq(${i}) img`).addClass('wrong-answer')
        $(`.choice:eq(${i})`).append('<img class="checkImg" src="exam-images/错误.png" />')
    }
  }
  $('.checkImg').hide()
}
$(".choice").click(function(event) {
  /* Act on the event */
  console.log($(this).find('.checkImg'));
  $(this).find('.checkImg').show()
});

// alert(1)
