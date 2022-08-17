'use strict'

let technicSliderScript = document.querySelector('.technic-slider__wrapper')

let technicButtonShow = document.querySelector(
  '.technic-list__button-overflow--show'
)
let technicButtonHide = document.querySelector(
  '.technic-list__button-overflow--hide'
)

technicButtonShow.addEventListener('click', function () {
  technicSliderScript.classList.remove('technic-slider__wrapper--hide')
  technicSliderScript.classList.add('technic-slider__wrapper--show')
  technicButtonShow.classList.remove('technic-list__button-overflow--active')
  technicButtonHide.classList.add('technic-list__button-overflow--active')
})

technicButtonHide.addEventListener('click', function () {
  technicSliderScript.classList.remove('technic-slider__wrapper--show')
  technicSliderScript.classList.add('technic-slider__wrapper--hide')
  technicButtonHide.classList.remove('technic-list__button-overflow--active')
  technicButtonShow.classList.add('technic-list__button-overflow--active')
})
