'use strict';

// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

const openModal = function () {
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
};

const closeModal = function () {
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
};

btnsOpenModal.forEach(btn => {
    btn.addEventListener('click', openModal);
});

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeModal();
});

// cookie message
const message = document.createElement('div');
message.classList.add('cookie-message');
message.innerHTML = 'We use cookies for improved functionality and analytics. <button class="btn btn--close-cookie">Got it!</button>';

message.querySelector('.btn').addEventListener('click', () => {
    message.remove();
});

const header = document.querySelector(".header");
header.append(message);

message.style.backgroundColor = '#37383d';
message.style.height = Number.parseInt(getComputedStyle(message).height) + 30 + 'px';

// smooth scrolling
const btnToScroll = document.querySelector('.btn--scroll-to');
btnToScroll.addEventListener('click', () => {
    const section1 = document.querySelector('#section--1')
    section1.scrollIntoView({ behavior: 'smooth' });
});

// slider
const slider = document.querySelector('.slider');

const slides = document.querySelectorAll('.slide');

let currSlide = 0;

slides.forEach((s, i) => {
    s.style.transform = `translateX(${i * 100}%)`;
});

const btnRight = document.querySelector('.slider__btn--right');
const btnLeft = document.querySelector('.slider__btn--left');

btnRight.addEventListener('click', () => {
    if (currSlide === slides.length - 1) {
        // on last slide, so go back to first
        currSlide = 0;
    } else {
        currSlide++;
    }
    console.log(currSlide);
    slides.forEach((s, i) => {
        console.log(s, i, currSlide);
        s.style.transform = `translateX(${(i - currSlide) * 100}%)`;
        console.log(s, i, currSlide);
    });
});

btnLeft.addEventListener('click', () => {
    if (currSlide === 0) {
        // on first slide, so go back to first
        currSlide = slides.length - 1;
    } else {
        currSlide--;
    }

    slides.forEach((s, i) => {
        s.style.transform = `translateX(${(i - currSlide) * 100}%)`;
    });

});
