const btnHamburguer = document.querySelector('#btnHamburguer');
const body = document.querySelector('body');
const header = document.querySelector('.header');
const overlay = document.querySelector('.overlay');

const fadeElements = document.querySelectorAll('.has-fade');

btnHamburguer.addEventListener('click', function(){

    if(header.classList.contains('open')) { // Close
        body.classList.remove('noscroll')
        header.classList.remove('open');
        fadeElements.forEach(function(element){
            element.classList.remove('fade-in');
            element.classList.add('fade-out');
        })

    } else { // Open
        body.classList.add('noscroll')
        header.classList.add('open');
        fadeElements.forEach(function(element){
            element.classList.remove('fade-out');
            element.classList.add('fade-in');
        })
    }

})