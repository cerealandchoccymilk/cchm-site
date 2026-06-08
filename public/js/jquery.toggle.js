// code by foollovers

$(function () { 

// メニューを開くボタンの動作
  var text = $('.open-text');
  $("#open").click(function () {
      $('aside').toggleClass('open');
      $('#side-bg').fadeToggle();
      $('#open-icon').toggleClass('close');
  });

// 小画面時に範囲外を押した場合、一度閉じる
  $('#side-bg').click(function() {
    $(this).fadeOut();
    $('aside').removeClass('open');
    $('#open').removeClass('buttonclose');
    $('#open-icon').removeClass('close');
  });

// 小画面時にメニュー内リンクを押した場合、一度閉じる
  $("aside a").on("click", function () {
      (window.innerWidth ? window.innerWidth : $(window).width()) <= 600 && $("#open").click()
  });

});
