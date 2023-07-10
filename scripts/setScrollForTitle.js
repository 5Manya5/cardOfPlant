export default () => {
    $('a.scrollto').click(function(e){  //при нажитии на элемент меню под картинкой растения
        e.preventDefault();             //отменяется действие по-умолчанию
        const elementHref = $(this).attr("href"); //по заданному атрибуту
        const titleClass = elementHref.slice(1);  
        const currentTitle = $('.rightTitle').filter(`.${ titleClass}`); //находится подзаголовок с аналогичным названием класса
        const top = currentTitle.offset().top;        //определение координат верхней части заголовка
        const headerHeight = $('header').height();    //определение высоты шапки страницы
        $('body,html').animate({scrollTop: top - headerHeight - 50}, 500); //поднятие высоты прокрученной части на размер высоты шапки страницы
    });
};