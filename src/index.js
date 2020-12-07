import "./sass/main.scss";

(function (){
    const header__burger = document.querySelector(`.header__burger`);
    const header__close = document.querySelector(`.header__close`);
    const header__menu = document.querySelector(`.header__menu`);
    const icon__open = document.querySelector(`.icon__open`);  
   
    header__burger.addEventListener(`click`, () => {
        header__menu.classList.toggle(`header__menu--active`);
        icon__open.classList.toggle(`icon__open--close`);
    });

    header__close.addEventListener(`click`, () => {
        header__menu.classList.toggle(`header__menu--active`);
        icon__open.classList.toggle(`icon__open--close`);
        
    });

 
}());

