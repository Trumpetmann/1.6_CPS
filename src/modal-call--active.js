let phoneButton = document.querySelector('.button__phone')
let phoneHeaderButton = document.querySelector('.header__button--tablet--phone')
let modalCall = document.querySelector('.modal-call')
let buttonCallCancel = document.querySelector('.modal-call__button')
let wrapperMain = document.querySelector('.wrapper')
let callBlur = document.querySelector('.call-blur')

phoneButton.addEventListener('click', function () {
  modalCall.classList.add('modal-call--active')
  wrapperMain.classList.add('wrapper--out')
  callBlur.classList.add('call-blur--active')
})
phoneHeaderButton.addEventListener('click', function () {
  modalCall.classList.add('modal-call--active')
  wrapperMain.classList.add('wrapper--out')
  callBlur.classList.add('call-blur--active')
})
buttonCallCancel.addEventListener('click', function () {
  modalCall.classList.remove('modal-call--active')
  wrapperMain.classList.remove('wrapper--out')
  callBlur.classList.remove('call-blur--active')
})
callBlur.addEventListener('click', function () {
  modalCall.classList.remove('modal-call--active')
  wrapperMain.classList.remove('wrapper--out')
  callBlur.classList.remove('call-blur--active')
})
