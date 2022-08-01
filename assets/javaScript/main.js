const statisticsList = document.querySelectorAll( ".services-list li" )
const serviceCard = document.querySelectorAll( ".service-card" )
const btnAutoPlay = document.querySelector( '.swiper-button.auto' )


// Swiper Js

const swiperHome = new Swiper( "#home .mySwiperHome", {

     navigation: {
          nextEl: ".swiper-button.next",
          prevEl: ".swiper-button.prev",
     },
     // autoplay: {
     //      delay: 10000,
     //      disableOnInteraction: false,
     // },
} );

const swiperServices = new Swiper( ".mySwiperServices", {
     spaceBetween: 50,
     effect: "fade",
     navigation: {
          nextEl: "#services .swiper-button.next",
          prevEl: "#services .swiper-button.prev",
     },
} );
var swiperMEDIU = new Swiper( ".mySwiperMEDIU", {
     slidesPerView: "auto",
     spaceBetween: 15,
     navigation: {
          nextEl: "#mediu-center .swiper-button.next",
          prevEl: "#mediu-center .swiper-button.prev",
     },
     breakpoints: {

          992: {
               slidesPerView: 2.5,
               spaceBetween: 15,
          },
          720: {
               slidesPerView: 2.5,
               spaceBetween: 15,
          },
          400: {
               slidesPerView: 1.5,
               spaceBetween: 15,
          },
     },
} );

var swiper = new Swiper( ".mySwiperAcademics", {
     spaceBetween: 30,
     slidesPerGroup: 2,
     autoplay: {
          delay: 8000,
          disableOnInteraction: false,
     },
     navigation: {
          nextEl: "#academics .swiper-button.next",
          prevEl: "#academics .swiper-button.prev"
     },
     breakpoints: {
          1114: {
               slidesPerView: 4.5,
               spaceBetween: 15,
          },
          1024: {
               slidesPerView: 4,
               spaceBetween: 15,
          },
          992: {
               slidesPerView: 3.5,
               spaceBetween: 15,
          },
          780: {
               slidesPerView: 2,
               spaceBetween: 15,
          },
          400: {
               slidesPerView: 1.5,
               spaceBetween: 15,
          },


     },
} );

// Tabs in Services Section
statisticsList.forEach( ( el, ) => {
     el.addEventListener( 'click', function ( e ) {
          statisticsList.forEach( el => {
               el.classList.remove( 'active' )
          } )
          this.classList.add( 'active' )
          e.preventDefault()
     } )
} );

// Swiper In Apply
var swiper = new Swiper(".mySwiper", {
     spaceBetween: 30,
     pagination: {
          el: ".swiper-pagination",
          clickable: true,
     },
     autoplay: {
          delay: 7000,
          disableOnInteraction: false,
     },
});
// Auto Play Swiper Services

btnAutoPlay.addEventListener( 'click', () => {
     if ( swiperServices.autoplay.running == false ) {
          swiperServices.autoplay.start()
     } else {
          swiperServices.autoplay.stop()
     }
} )









