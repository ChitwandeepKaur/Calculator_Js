'use strict';

const showModals = document.querySelectorAll('.show-modal'),
      modal      = document.querySelector('.modal'),
      overlay    = document.querySelector('.overlay'),
      closeBtn   = document.querySelector('.close-modal')

function closeModal() {
    modal.classList.add('hidden')
    overlay.classList.add('hidden')    
}

for(let i = 0 ; i < showModals.length; i++ ){
    showModals[i].addEventListener('click', function (){
        modal.classList.remove('hidden')
        overlay.classList.remove('hidden')
    })
}

closeBtn.addEventListener('click',  () => closeModal() )
overlay.addEventListener('click',   () => closeModal() )
document.addEventListener('keyup', function(e){
    if(e.key==='Escape' && !modal.classList.contains('hidden')) closeModal()
} )