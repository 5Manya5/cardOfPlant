import setArrowUp from "./setArrowUp.js";
import setStroke from "./setStroke.js";
import setAnimateTitle from "./setAnimateTitle.js";
import setScrollForTitle from "./setScrollForTitle.js";
import burger from "./burgerMenu.js";

$(document).ready(function() {
    setArrowUp();   //скрипт для функционирования стрелки вверх
    setStroke();    // скрипт для смены цвета обводки сердечка при наведении/нажатии
    setScrollForTitle();    // оптимизация навигации по странице
    setAnimateTitle();  //анимация заголовков
    burger()    //скрипт для функционирования всплывающего меню на маленьких экранах
});