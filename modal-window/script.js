'use strict';

const modalOpenButtons = document.querySelectorAll(".show-modal");

const overlay = document.querySelector(".overlay");
const modalWindow = document.querySelector(".modal");

const modalCloseButton = document.querySelector(".close-modal");

// helper functions to open and close modal window
function openModalWindow() {
    modalWindow.classList.remove('hidden');
    overlay.classList.remove('hidden');
}

function closeModalWindow() {
    modalWindow.classList.add('hidden');
    overlay.classList.add('hidden');
}

modalOpenButtons.forEach(modalButton => {
    modalButton.addEventListener('click', openModalWindow);
});

modalCloseButton.addEventListener('click', closeModalWindow);

overlay.addEventListener('click', closeModalWindow);