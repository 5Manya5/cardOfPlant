export default () => {
  const windowHeight = $(window).height();
  $(window).scroll(function () {
    if ($(window).scrollTop() > windowHeight) {  //если высота прокрученной части страницы больше высоты экрана
      $(".arrowTop").addClass("show");          //появляется стрелка для перехода к началу страницы
    } else {
      $(".arrowTop").removeClass("show");
    }
  });
  $(".arrowTop").click(function () {  //при нажатии на стрелку
    $("html, body").animate(          //высота прокрученной части страницы приравнивается к нулю
      {
        scrollTop: 0,
      },
      600
    );
    return false;
  });
};
