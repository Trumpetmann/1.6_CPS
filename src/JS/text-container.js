'use strict'

let textContainer = document.querySelector('.text__container')

let textButtonShow = document.querySelector('.text__button-overflow--show')
let textButtonHide = document.querySelector('.text__button-overflow--hide')

textButtonShow.addEventListener('click', function () {
  textContainer.classList.remove('text__container--hide')
  textContainer.classList.add('text__container--show')
  textButtonShow.classList.remove('text__button-overflow--active')
  textButtonHide.classList.add('text__button-overflow--active')
})

textButtonHide.addEventListener('click', function () {
  textContainer.classList.remove('text__container--show')
  textContainer.classList.add('text__container--hide')
  textButtonHide.classList.remove('text__button-overflow--active')
  textButtonShow.classList.add('text__button-overflow--active')
})
