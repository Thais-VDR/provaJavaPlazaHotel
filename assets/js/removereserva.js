let outracoisa = document.querySelector('#reservas')

outracoisa.addEventListener('dblclick', function(event){
    event.target.parentNode.classList.add('fadeOut')

    setTimeout(function () {
        event.target.parentNode.remove()
    }, 500)
   
})