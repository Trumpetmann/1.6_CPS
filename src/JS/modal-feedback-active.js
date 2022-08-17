let messageButton = document.querySelector('.button__message')
let messageHeaderButton = document.querySelector(
  '.header__button--tablet--message'
)
let modalFeedback = document.querySelector('.modal-feedback')
let buttonFeedbackCancel = document.querySelector('.modal-feedback__button')
let wrapperMain = document.querySelector('.wrapper')
let feedbackBlur = document.querySelector('.feedback-blur')

messageButton.addEventListener('click', function () {
  modalFeedback.classList.add('modal-feedback--active')
  wrapperMain.classList.add('wrapper--out')
  feedbackBlur.classList.add('feedback-blur--active')
})
messageHeaderButton.addEventListener('click', function () {
  modalFeedback.classList.add('modal-feedback--active')
  wrapperMain.classList.add('wrapper--out')
  feedbackBlur.classList.add('feedback-blur--active')
})
buttonFeedbackCancel.addEventListener('click', function () {
  modalFeedback.classList.remove('modal-feedback--active')
  wrapperMain.classList.remove('wrapper--out')
  feedbackBlur.classList.remove('feedback-blur--active')
})
feedbackBlur.addEventListener('click', function () {
  modalFeedback.classList.remove('modal-feedback--active')
  wrapperMain.classList.remove('wrapper--out')
  feedbackBlur.classList.remove('feedback-blur--active')
})
