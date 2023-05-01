let menu = document.querySelector('#menu-bars');
let navbar = document.querySelector('.navbar');


    menu.addEventListener('click', function(){
        navbar.classList.toggle('active');
        menu.classList.toggle('fa-xmark');
    })

  