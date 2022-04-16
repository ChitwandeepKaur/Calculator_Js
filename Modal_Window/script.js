'use strict'
const modal      = document.querySelector('.modal'),
      btnModal   = document.querySelectorAll('.show-modal'),
      overlay    = document.querySelector('.overlay'),
      closeBtn   = document.querySelector('.close-modal'),
      closeModal = function() {
        modal.classList.add('hidden')
        overlay.classList.add('hidden')
      },
      openModal  =function() {
        modal.classList.remove('hidden')
        overlay.classList.remove('hidden')
      }

for(const btn of btnModal)
  btn.addEventListener('click', openModal)

overlay.addEventListener('click',closeModal)
closeBtn.addEventListener('click',closeModal)

document.addEventListener('keydown',(e)=>{
  if(e.key === 'Escape' && !modal.classList.contains('hidden'))
  closeModal()
})