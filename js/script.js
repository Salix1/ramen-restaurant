const a = 10;
var b = 11;
let c = 12;

console.log(window['c']);

const btnOpenCallModal = document.querySelector('.call-back-btn'),
      btnOpenReserveModal = document.querySelector('.reserve-btn'),
      headerWrapper = document.querySelector('.header-wrapper');

const playHeaderAndBtnsAnimations = () => {
    if (document.documentElement.scrollTop > 270) {
        headerWrapper.classList.add('header-wrapper_anim_white');
        btnOpenCallModal.classList.add("call-back-btn_shown");
        btnOpenReserveModal.classList.add("reserve-btn_shown");
        window.removeEventListener('scroll', playHeaderAndBtnsAnimations);
    }
};

if (document.documentElement.scrollTop < 270) {
    headerWrapper.classList.remove('header-wrapper_white');
    window.addEventListener('scroll', playHeaderAndBtnsAnimations);
} else {
    btnOpenCallModal.classList.add("call-back-btn_shown");
    btnOpenReserveModal.classList.add("reserve-btn_shown");
}

const shortcuts = document.querySelectorAll('.header__shortcut');

shortcuts.forEach(function(val, i) {
    switch(i) {
        case 0:
            shortcuts[i].addEventListener('click', () => {
                window.scrollTo({
                    top: 714,
                    behavior: "smooth"
                });
            });
            break;
        case 1:
            shortcuts[i].addEventListener('click', () => {
                window.scrollTo({
                    top: 1170,
                    behavior: "smooth"
                });
            });
            break;
        case 2:
            shortcuts[i].addEventListener('click', () => {
                window.scrollTo({
                    top: 1625,
                    behavior: "smooth"
                });
            });
            break;
        case 3:
            shortcuts[i].addEventListener('click', () => {
                window.scrollTo({
                    top: 2125,
                    behavior: "smooth"
                });
            });
            break;
        case 4:
            shortcuts[i].addEventListener('click', () => {
                window.scrollTo({
                    top: 2640,
                    behavior: "smooth"
                });
            });
            break;
        case 5:
            shortcuts[i].addEventListener('click', () => {
                window.scrollTo({
                    top: 3400,
                    behavior: "smooth"
                });
            });
            break;
    }
});

const leftArrow = document.querySelector('.reviews__arrow-left'),
      rightArrow = document.querySelectorAll('.reviews__arrow')[1];

const reviews = document.querySelectorAll('.reviews__review'),
      circles = document.querySelectorAll('.circle');

let activeReview = 0;

rightArrow.addEventListener('click', () => {
    rightArrow.classList.add('reviews__arrow_clicked');
    reviews[activeReview].classList.add('reviews__review_disappear');
    setTimeout(() => {
        reviews[activeReview].classList.remove('reviews__review_shown');
        reviews[activeReview].classList.remove('reviews__review_disappear');
        reviews[activeReview].classList.remove('reviews__review_appear');
        circles[activeReview].classList.remove('circle_active');
        if (activeReview == 2) {
            activeReview = -1;
        }
        activeReview++;  
        circles[activeReview].classList.add('circle_active');
        rightArrow.classList.remove('reviews__arrow_clicked');  
    }, 490);
    setTimeout(() => {
        setTimeout(() => {reviews[activeReview].classList.add('reviews__review_shown');}, 10);
        reviews[activeReview].classList.add('reviews__review_appear');
    }, 500);
});

leftArrow.addEventListener('click', () => {
    leftArrow.classList.add('reviews__arrow_clicked');
    reviews[activeReview].classList.add('reviews__review_disappear');
    setTimeout(() => {
        reviews[activeReview].classList.remove('reviews__review_shown');
        reviews[activeReview].classList.remove('reviews__review_disappear');
        reviews[activeReview].classList.remove('reviews__review_appear');
        circles[activeReview].classList.remove('circle_active');
        if (activeReview == 0) {
            activeReview = 3;
        }
        activeReview--;
        circles[activeReview].classList.add('circle_active');
        leftArrow.classList.remove('reviews__arrow_clicked');
    }, 490);
    setTimeout(() => {
        setTimeout(() => {reviews[activeReview].classList.add('reviews__review_shown');}, 10);
        reviews[activeReview].classList.add('reviews__review_appear');
    }, 500);
});

const menuItems = document.querySelectorAll('.menu__item');

menuItems.forEach(function(val, i) {
    switch(i) {
        case 0:
            menuItems[i].style.background = "url('./img/menu/first.jpg') center center/cover no-repeat";
            break;
        case 1:
            menuItems[i].style.background = "url('./img/menu/second.jpg') center center/cover no-repeat";
            break;
        case 2:
            menuItems[i].style.background = "url('./img/menu/third.jpg') center center/cover no-repeat";
            break;
        case 3:
            menuItems[i].style.background = "url('./img/menu/fourth.jpg') center center/cover no-repeat";
            break;
        case 4:
            menuItems[i].style.background = "url('./img/menu/fifth.jpg') center center/cover no-repeat";
            break;
        case 5:
            menuItems[i].style.background = "url('./img/menu/sixth.jpg') center center/cover no-repeat";
            break;
    }
});

const modalBg = document.querySelector('.modal-bg'),
      callModal = document.querySelector('.modal-call-back'),
      reserveModal = document.querySelector('.modal-reserve'),
      btnsCloseModal = document.querySelectorAll('.close-modal-x');

function preOpenModal() {
    document.body.style.overflow = 'hidden';
    headerWrapper.classList.add('compensated-for-open-modal');
    document.body.classList.add('compensated-for-open-modal');
    modalBg.classList.add('modal_shown');
}

function preCloseModal() {
    document.body.style.overflow = '';
    headerWrapper.classList.remove('compensated-for-open-modal');
    document.body.classList.remove('compensated-for-open-modal');
    modalBg.classList.remove('modal_shown');
}

btnOpenCallModal.addEventListener('click', () => {
    preOpenModal();
    callModal.classList.add('modal_shown');
});

btnOpenReserveModal.addEventListener('click', () => {
    preOpenModal();
    reserveModal.classList.add('modal_shown');
});

btnsCloseModal.forEach((e) => {
    e.addEventListener('click', () => {
        preCloseModal();
        e.parentElement.classList.remove('modal_shown');
    });
});

modalBg.addEventListener('click', () => {
    preCloseModal();
    if (callModal.classList.contains('modal_shown')) {
        callModal.classList.remove('modal_shown');
    } else {
        reserveModal.classList.remove('modal_shown');
    }
});