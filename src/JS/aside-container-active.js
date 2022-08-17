let menuButton = document.querySelector('.header__button--menu')
let asideContainer = document.querySelector('.aside-container')
let buttonCancel = document.querySelector('.button__cancel')
let wrapperMain = document.querySelector('.wrapper')
let asideBlur = document.querySelector('.aside-blur')

menuButton.addEventListener('click', function () {
  asideContainer.classList.add('aside-container--active')
  wrapperMain.classList.add('wrapper--out')
  asideBlur.classList.add('aside-blur--active')
})
buttonCancel.addEventListener('click', function () {
  asideContainer.classList.remove('aside-container--active')
  wrapperMain.classList.remove('wrapper--out')
  asideBlur.classList.remove('aside-blur--active')
})
asideBlur.addEventListener('click', function () {
  asideContainer.classList.remove('aside-container--active')
  wrapperMain.classList.remove('wrapper--out')
  asideBlur.classList.remove('aside-blur--active')
})
