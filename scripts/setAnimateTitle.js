export default () => {
   $(window).scroll(function(){
        const wt = $(window).scrollTop(); //высота прокрученной части
        const wh = $(window).height();  //высота экрана
        const et = $('.leftTitle').offset().top; // координаты верхней части заголовка
        const eh = $('.leftTitle').outerHeight();   //высота заголовка с учетом внутренних отступов
        const dh = $('.leftTitle').height();   //высота содержимого заголовка
        if (wt + wh >= et || wh + wt == dh || eh + et < wh){ //если на экране появился заголовок
            $('.leftTitle').css('animation', 'leftTitleAni 0.8s linear forwards'); //заголовок выезжает сбоку страницы
        }
    });

    $(window).scroll(function(){
        const wt = $(window).scrollTop();
        const wh = $(window).height();
        const et = $('.info').offset().top;
        const eh = $('.info').outerHeight();
        const dh = $('.info').height();   
        if (wt + wh >= et || wh + wt == dh || eh + et < wh){
            $('.info').css('animation', 'rightTitleAni 0.8s linear forwards');
        }
    });

    $(window).scroll(function(){
        const wt = $(window).scrollTop();
        const wh = $(window).height();
        const et = $('.care').offset().top;
        const eh = $('.care').outerHeight();
        const dh = $('.care').height();   
        if (wt + wh >= et || wh + wt == dh || eh + et < wh){
            $('.care').css('animation', 'rightTitleAni 0.8s linear forwards');
        }
    });


    $(window).scroll(function(){
        const wt = $(window).scrollTop();
        const wh = $(window).height();
        const et = $('.watering').offset().top;
        const eh = $('.watering').outerHeight();
        const dh = $('.watering').height();   
        if (wt + wh >= et || wh + wt == dh || eh + et < wh){
            $('.watering').css('animation', 'rightTitleAni 0.8s linear forwards');
        }
    });

    $(window).scroll(function(){
        const wt = $(window).scrollTop();
        const wh = $(window).height();
        const et = $('.transplantation').offset().top;
        const eh = $('.transplantation').outerHeight();
        const dh = $('.transplantation').height();   
        if (wt + wh >= et || wh + wt == dh || eh + et < wh){
            $('.transplantation').css('animation', 'rightTitleAni 0.8s linear forwards');
        }
    });

    $(window).scroll(function(){
        const wt = $(window).scrollTop();
        const wh = $(window).height();
        const et = $('.problem').offset().top;
        const eh = $('.problem').outerHeight();
        const dh = $('.problem').height();   
        if (wt + wh >= et || wh + wt == dh || eh + et < wh){
            $('.problem').css('animation', 'rightTitleAni 0.8s linear forwards');
        }
    });

    $(window).scroll(function(){
        const wt = $(window).scrollTop();
        const wh = $(window).height();
        const et = $('.reproduction').offset().top;
        const eh = $('.reproduction').outerHeight();
        const dh = $('.reproduction').height();   
        if (wt + wh >= et || wh + wt == dh || eh + et < wh){
            $('.reproduction').css('animation', 'rightTitleAni 0.8s linear forwards');
        }
    });

    $(window).scroll(function(){
        const wt = $(window).scrollTop();
        const wh = $(window).height();
        const et = $('.actuality').offset().top;
        const eh = $('.actuality').outerHeight();
        const dh = $('.actuality').height();   
        if (wt + wh >= et || wh + wt == dh || eh + et < wh){
            $('.actuality').css('animation', 'rightTitleAni 0.8s linear forwards');
        }
    });
}    