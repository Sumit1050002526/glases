 
let searchForm = document.querySelector('.header .search-form');

document.querySelector('#search-btn').onclick  = () =>{
    searchForm.classList.toggle('active');
    navbar.classList.remove('active');
}

 
let navbar = document.querySelector('.header .navbar');

document.querySelector('#menu-btn').onclick  = () =>{
    navbar.classList.toggle('active');
    searchForm.classList.remove('active');
}

window.onscroll = () =>{
    searchForm.classList.remove('active');
    navbar.classList.remove('active');
}


var swiper = new Swiper(".home-slider", {
    spaceBetween: 30,
    effect: "fade",
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });
 




