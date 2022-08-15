'use strict'

let brandSliderScript = document.querySelector('.brand-slider__wrapper')

let brandButtonShow = document.querySelector(
  '.brand-list__button-overflow--show'
)
let brandButtonHide = document.querySelector(
  '.brand-list__button-overflow--hide'
)

brandButtonShow.addEventListener('click', function () {
  brandSliderScript.classList.remove('slider__wrapper--hide')
  brandSliderScript.classList.add('slider__wrapper--show')
  brandButtonShow.classList.remove('brand-list__button-overflow--active')
  brandButtonHide.classList.add('brand-list__button-overflow--active')
})

brandButtonHide.addEventListener('click', function () {
  brandSliderScript.classList.remove('slider__wrapper--show')
  brandSliderScript.classList.add('slider__wrapper--hide')
  brandButtonHide.classList.remove('brand-list__button-overflow--active')
  brandButtonShow.classList.add('brand-list__button-overflow--active')
})
