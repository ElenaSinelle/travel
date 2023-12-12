'use strict'
// Burger handler
let burgerItem = document.querySelector('.burger-menu-pic');
let menu = document.querySelector('.header-nav');
let fade = document.querySelector('.fade');
let menuCloseItem = document.querySelector('.burger-menu-close');
let accountClick = document.querySelector('.nav-account');
let menuLinks = document.querySelectorAll('.header-nav-link');

burgerItem.addEventListener('click', function() {
    menu.classList.add('header-nav-active');
    fade.classList.add('fade-active');
});

menuCloseItem.addEventListener('click', function() {
    menu.classList.remove('header-nav-active');
    fade.classList.remove('fade-active');
});

accountClick.addEventListener('click', function() {
    menu.classList.remove('header-nav-active');
    fade.classList.remove('fade-active');
});

fade.addEventListener('click', function() {
    menu.classList.remove('header-nav-active');
    fade.classList.remove('fade-active');
});

if (window.innerWidth <= 540) {
    for (let i = 0; i < menuLinks.length; i += 1) {
        menuLinks[i].addEventListener('click', function() {
            menu.classList.remove('header-nav-active');
            fade.classList.remove('fade-active');
        });
    }
};
// Login button
let popupBtn1 = document.querySelector('.header-login-button');
let popupBtnAcc = document.querySelector('.nav-account');
let popupFade = document.querySelector('.popup-fade');
let popupBody1 = document.querySelector('.popup-body-1');

let popupBtn2 = document.querySelector('.popup-2-btn');
let popupBody2 = document.querySelector('.popup-body-2')

popupBtn1.addEventListener('click', function() {
    popupFade.classList.add('popup-fade-open');
    popupBody1.classList.add('popup-body-1-open');
});

popupBtnAcc.addEventListener('click', function() {
    popupFade.classList.add('popup-fade-open');
    popupBody1.classList.add('popup-body-1-open');
});

popupFade.addEventListener('click', function() {
    popupFade.classList.remove('popup-fade-open');
    popupBody1.classList.remove('popup-body-1-open');
    popupBody2.classList.remove('popup-body-2-open');
});

popupBtn2.addEventListener('click', function() {
    popupBody1.classList.remove('popup-body-1-open');
    popupBody2.classList.add('popup-body-2-open');
});

// alert

let signinBtn = document.querySelector('.sign-in-button');

signinBtn.addEventListener('click', function() {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    alert('Your email is: '+ email + '. Your password is: ' + password);
    
});

let signupBtn = document.querySelector('.sign-up-button');

signupBtn.addEventListener('click', function() {
    const email = document.getElementById("email2").value;
    const password = document.getElementById("password2").value;
    alert('Your email is: '+ email + '. Your password is: ' + password);
    
});

// slider

const slide = document.querySelector('.destinations-list');
const ellipse1 = document.querySelector('.ellipse-pic1');
const ellipse2 = document.querySelector('.ellipse-pic2');
const ellipse3 = document.querySelector('.ellipse-pic3');
const sliderImg1 = document.querySelector('.slider-img-1');
const sliderImg2 = document.querySelector('.slider-img-2');
const sliderImg3 = document.querySelector('.slider-img-3');
const slidePriv = document.querySelector('.slider-arrow-priv');
const slideNext = document.querySelector('.slider-arrow-next');

let sliderItem = document.querySelectorAll('.destination-item');
let sliderCounter = 2;

function slideLeft() {
    for (let i = 0; i < sliderItem.length; i++) {
        ellipse1.classList.add('ellipse-pic1-active');
        ellipse2.classList.remove('ellipse-pic2-active');
        ellipse3.classList.remove('ellipse-pic3-active');
        slidePriv.classList.add('slider-arrow-priv-inactive');
        slideNext.classList.remove('slider-arrow-next-inactive');
        if (window.innerWidth <= 540) {
            sliderItem[i].classList.remove('destinations-list-right-mobile');
            sliderItem[i].classList.add('destinations-list-left-mobile');
        } else {
            sliderItem[i].classList.remove('destinations-list-right');
            sliderItem[i].classList.add('destinations-list-left');
        }
    }
    sliderCounter = 1;
};

function slideRight() {
    for (let i = 0; i < sliderItem.length; i++) {
        ellipse1.classList.remove('ellipse-pic1-active');
        ellipse2.classList.remove('ellipse-pic2-active');
        ellipse3.classList.add('ellipse-pic3-active');
        slidePriv.classList.remove('slider-arrow-priv-inactive');
        slideNext.classList.add('slider-arrow-next-inactive');
        if (window.innerWidth <= 540) {
            sliderItem[i].classList.add('destinations-list-right-mobile');
            sliderItem[i].classList.remove('destinations-list-left-mobile');
        } else {
            sliderItem[i].classList.add('destinations-list-right');
            sliderItem[i].classList.remove('destinations-list-left');
        }
    }
    sliderCounter = 3;
};

function slideCenter() {
    for (let i = 0; i < sliderItem.length; i++) {
        ellipse1.classList.remove('ellipse-pic1-active');
        ellipse2.classList.add('ellipse-pic2-active');
        ellipse3.classList.remove('ellipse-pic3-active');
        slidePriv.classList.remove('slider-arrow-priv-inactive');
        slideNext.classList.remove('slider-arrow-next-inactive');
        if (window.innerWidth <= 540) {
            sliderItem[i].classList.remove('destinations-list-right-mobile');
            sliderItem[i].classList.remove('destinations-list-left-mobile');
            sliderItem[i].classList.add('destinations-list');
        } else {
            sliderItem[i].classList.remove('destinations-list-right');
            sliderItem[i].classList.remove('destinations-list-left');
            sliderItem[i].classList.add('destinations-list');
        }
    }
    sliderCounter = 2;
};

ellipse1.addEventListener('click', slideLeft);
ellipse2.addEventListener('click', slideCenter);
ellipse3.addEventListener('click', slideRight);
sliderImg1.addEventListener('click', slideLeft);
sliderImg2.addEventListener('click', slideCenter);
sliderImg3.addEventListener('click', slideRight);

slidePriv.addEventListener('click', function() {
    if (sliderCounter === 1) {
        return false;
    } else if (sliderCounter === 2) {
        slideLeft();
    } else if (sliderCounter === 3) {
        slideCenter();
    }
});

slideNext.addEventListener('click', function() {
if (sliderCounter === 1) {
    slideCenter();
} else if (sliderCounter === 2) {
    slideRight();
} else if (sliderCounter === 3) {
    return false;
}
});

let selfAssesment = 'Самооценка: 100 баллов\n1. Слайдер изображений в секции destinations +50\n2. Нажатие на кнопку Login (кнопка Account в мобильной версии) показывает сверстанный логин попап + 50\n3. Нажатие на кнопку Register на Login попапе меняет разметку попапа на разметку Sign Up попапа согласно макету (То есть нажатие не закрывает модал а просто меняет его наполнение). +25';
console.log(selfAssesment);