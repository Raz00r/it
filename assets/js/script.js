$(function() {
  menu_top = $('.header-text-4').offset().top;        // запоминаем положение меню
  $(window).scroll(function () {             // отслеживаем событие прокрутки страницы
    if ($(window).scrollTop() > menu_top) {  // если прокрутка дошла до меню
      if ($('.header-text-4').css('position') != 'fixed') {  // проверяем, если меню еще не зафиксировано
        $('.header-text-4').css('position','fixed');  // задаем блоку меню свойство position = fixed
        $('.header-text-4').css('top','0');           // положение в самом верху
        $('.content').css('margin-top','200px'); // делаем отступ, чтобы контент не "скакал" в момент фиксации меню
      }
    } else {                                 // прокрутка страницы обратно вверх достигла место "перехода" меню
      if ($('.header-text-4').css('position') == 'fixed') {  // если меню зафиксировано
        $('.header-text-4').css('position','');
        $('.header-text-4').css('top','');
        $('.content').css('margin-top','');
      }
    }
  });
});

$(document).ready(function () {
  $("form").submit(function () {
  // Получение ID формы
  var formID = $(this).attr('id');
  // Добавление решётки к имени ID
  var formNm = $('#' + formID);
  $.ajax({
  type: "POST",
  url: 'mail.php',
  data: formNm.serialize(),
  success: function (data) {
  // Вывод текста результата отправки
  $(formNm).html(data);
  },
  error: function (jqXHR, text, error) {
  // Вывод текста ошибки отправки
  $(formNm).html(error);
  }
  });
  return false;
  });
 });
