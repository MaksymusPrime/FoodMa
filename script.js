let menu = document.querySelector('#menu-bars');
let navbar = document.querySelector('.navbar');

menu.onClick = () => {
    menu.classList.toggle('fa fa-times');
   navbar.classList.toggle('active');
}   