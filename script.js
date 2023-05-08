let menu = document.querySelector('#menu-bars');
let navbar = document.querySelector('.navbar');


    menu.addEventListener('click', function(){
        navbar.classList.toggle('active');
        menu.classList.toggle('fa-xmark');
    })


    window.onscroll = () => {
        menu.classList.remove ('fas fa-times');
        navbar.classList.remove ('active');
    }
  
    document.querySelector ('#search-icon').onclick = () => {
        document.querySelector ('#search-form').classList.toggle ('active');
    }

    document.querySelector ('#close').onclick = () => {
        document.querySelector ('#search-form').classList.remove ('active');
    }


    let swiper = new Swiper(".home-slider", {
        spaceBetween: 30,
        centeredSlides: true,
        autoplay: {
          delay: 7500,
          disableOnInteraction: false
        },
        pagination: {
          el: ".swiper-pagination",
          clickable: true
        },
      loop:true,
      });