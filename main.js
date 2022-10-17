// const { NavLink } = require("react-bootstrap");

// window.addEventListener( scroll , () => {
//     document.querySelector('nav').classList.toggle('window-scrolled', window.scrollY > 0 );
// });



// const textButtons =document.querySelectorAll('.contact_btn');

// textButtons.forEach(textButtons => {
//     let text =textButtons.querySelector('p');

//     text.innerHTM = text.innerHTML.split('').map((character,index)  => `<span style="transform: rotate(${index * 12}deg)">${character}</span>`).join('');
// })







var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 20,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
        599: {
            slidesPerView: 2,
            spaceBetween: 40,
        },
        1023:  {
            slidesPerView: 3,
            spaceBetween: 60,
        }
    }
  });





const nav =document.querySelector('.nav_links');

const openNav =document.querySelector('#nav_toggle-open');

const closeNav =document.querySelector('#nav_toggle-close');

openNav.addEventListener('click', () => {
    nav.style.display='flex';
    openNav.style.display="none";
    closeNav.style.display="inline-block";
})

closeNav.addEventListener('click', () => {
    nav.style.display='none';
    closeNav.style.display="none";
    openNav.style.display="inline-block";
})



if(document.body.clientWidth < 1024) {
nav.querySelectorAll('li a').forEach(NavLink => {
    NavLink.addEventListener('click' ,closeNav);
})
}