export default () => {
  const burger = document.querySelector('.burger');
  const menu = document.querySelector('.burgerMenu');
  setTimeout(function () {
    burger.addEventListener("click", function () { //при нажатии на значок меню в правом верхнем углу
    
        menu.classList.toggle('activeMenu'); // к меню добавляется класс, при помощи которого меню появляется на странице(свойства класса описаны в CSS)
        burger.classList.toggle('activeBurger'); //аналогично к зачку в правом верхнем углу добавляется класс, меняющий значок на "крестик"
    
    });
  }, 0.2); //устанавливается задержка на 2сек для плавности
};
