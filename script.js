document.querySelectorAll('#clickable').forEach(el => {
   el.addEventListener('click', () => {
      el.classList.add('pressed')
      setTimeout(()=>{
         el.classList.remove('pressed')
      }, 115)
   })
})