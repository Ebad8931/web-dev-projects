'use strict';

const openModalButtons = document.querySelectorAll(".show-modal");

const overlay = document.querySelector(".overlay");
const modalWindow = document.querySelector(".modal");

openModalButtons.forEach(modalButton => {
    modalButton.addEventListener('click', () => {
        modalWindow.classList.remove('hidden');
        overlay.classList.remove('hidden');
    });
});