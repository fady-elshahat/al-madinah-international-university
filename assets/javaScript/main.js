const statisticsList = document.querySelectorAll( ".services-list li" )
const serviceCard = document.querySelectorAll( ".service-card" )
const btnAutoPlay = document.querySelector( '.swiper-button.auto' )

// Var Tabs Mediu
const tabsMediu = document.querySelectorAll( '.tabs .item' );
const tabsMediuArray = Array.from( tabsMediu )
const tabsMediuContent = document.querySelectorAll( '#mediu-center .tab-mediu-content' );
const tabsContentMediuArray = Array.from( tabsMediuContent )
const tabsSmallMediu = document.querySelectorAll( '#mediu-center .tab-small  li' );
const tabsSmallMediuArray = Array.from( tabsSmallMediu )

// Var Tabs Services
const tabsServices = document.querySelectorAll( '.services-list li' );
const tabsServicesArray = Array.from( tabsServices )

const tabsSmallServices = document.querySelectorAll( '#services .tab-small .tab-list-small li' );
const tabsSmallServicesArray = Array.from( tabsSmallServices )

const tabsServicesContent = document.querySelectorAll( '#services .tab-services-content' );
const tabsContentServicesArray = Array.from( tabsServicesContent )


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
var swiperMediuTab3 = new Swiper( ".mySwiperMEDIU.tab-3", {
     spaceBetween: 10,
     slidesPerView: 4,
     freeMode: true,
     watchSlidesProgress: true,
} );
var swiperMediuTab32 = new Swiper( ".mySwiperMEDIU-2.tab-3", {
     spaceBetween: 0,
     thumbs: {
          swiper: swiperMediuTab3,
     },
} );

var swiper = new Swiper( ".mySwiperMediuTab4", {
     spaceBetween: 30,
     slidesPerGroup: 2,
     autoplay: {
          delay: 8000,
          disableOnInteraction: false,
     },
     breakpoints: {

          1020: {
               slidesPerView: 3,
               spaceBetween: 15,
          },
          992: {
               slidesPerView: 2.5,
               spaceBetween: 15,
          },
          780: {
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
               slidesPerView: 1.1,
               spaceBetween: 15,
          },
          340: {
               slidesPerView: 1.1,
               spaceBetween: 15,
          },


     },
} );





// swiper in home
var mySwiperHome3 = new Swiper( ".mySwiperHome3", {
     spaceBetween: 0,
     slidesPerGroup: 1,
     autoplay: {
          delay: 8000,
          disableOnInteraction: false,
     },
     navigation: {
          nextEl: "#academics .swiper-button.next",
          prevEl: "#academics .swiper-button.prev"
     },
     breakpoints: {
          400: {
               slidesPerView: 2,
               spaceBetween: 10,
          },
          340: {
               slidesPerView: 1,
               spaceBetween: 10,
          },


     },
} );



// Swiper In Apply
var swiper = new Swiper( ".mySwiper", {
     spaceBetween: 30,
     pagination: {
          el: ".swiper-pagination",
          clickable: true,
     },
     autoplay: {
          delay: 7000,
          disableOnInteraction: false,
     },
} );



// Auto Play Swiper Services

btnAutoPlay.addEventListener( 'click', ( e ) => {
     console.log( swiperServices, e );
     if ( swiperServices.autoplay.running == false ) {
          swiperServices.autoplay.start()
     } else {
          swiperServices.autoplay.stop()
     }
} )


// Tabs in Mediu Center
tabsMediuArray.forEach( element => {
     element.addEventListener( 'click', ( e ) => {
          tabsMediuArray.forEach( ( el ) => {
               el.classList.remove( "active" );
          } )
          e.currentTarget.classList.add( "active" )
          tabsContentMediuArray.forEach( ( div ) => {
               div.style.display = "none"
          } )
          document.querySelector( `.tab-mediu-content`+e.currentTarget.dataset.tab ).style.display = "block"

     } )
} )


// swiper in discussions in mediu
var swiperDiscussions = new Swiper( ".swiper-discussions", {
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
               slidesPerView: 3,
               spaceBetween: 15,
          },
          1024: {
               slidesPerView: 2.9,
               spaceBetween: 15,
          },
          992: {
               slidesPerView: 2.5,
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
          340: {
               slidesPerView: 1,
               spaceBetween: 15,
          },


     },
} );




// swiper in journals in mediu
var swiperJournals = new Swiper( ".swiperJournals", {
     spaceBetween: 0,
     slidesPerGroup: 1,
     autoplay: {
          delay: 8000,
          disableOnInteraction: false,
     },
     navigation: {
          nextEl: "#academics .swiper-button.next",
          prevEl: "#academics .swiper-button.prev"
     },
     breakpoints: {
          1665: {
               slidesPerView: 3.2,
               spaceBetween: 15,
          },
          1114: {
               slidesPerView: 3,
               spaceBetween: 10,
          },
          780: {
               slidesPerView: 2.5,
               spaceBetween: 10,
          },
          400: {
               slidesPerView: 1.5,
               spaceBetween: 10,
          },
          340: {
               slidesPerView: 1,
               spaceBetween: 10,
          },


     },
} );





tabsSmallMediuArray.forEach( element => {
     element.addEventListener( 'click', ( e ) => {
          tabsSmallMediuArray.forEach( ( el ) => {
               el.classList.remove( "activ" );
          } )
          e.currentTarget.classList.add( "activ" )
          tabsContentMediuArray.forEach( ( div ) => {
               div.style.display = "none"
          } )
          console.log(`.tab-mediu-content`+e.currentTarget.dataset.tab);
          document.querySelector( `.tab-mediu-content`+e.currentTarget.dataset.tab ).style.display = "block"

     } )
} )

// Tabs in Services Section
tabsServicesArray.forEach( element => {
     element.addEventListener( 'click', ( e ) => {
          e.preventDefault()
          tabsServicesArray.forEach( ( el ) => {
               el.classList.remove( "active" );
          } )
          e.currentTarget.classList.add( "active" )
          tabsContentServicesArray.forEach( ( div ) => {
               div.style.display = "none"
          } )
          document.querySelector( e.currentTarget.dataset.tabservices ).style.display = "block"

     } )
} )

tabsSmallServicesArray.forEach( element => {
     element.addEventListener( 'click', ( e ) => {
          e.preventDefault()
          tabsSmallServicesArray.forEach( ( el ) => {
               el.classList.remove( "active" );
          } )
          e.currentTarget.classList.add( "active" )
          tabsContentServicesArray.forEach( ( div ) => {
               div.style.display = "none"
          } )
          document.querySelector( e.currentTarget.dataset.tabservices ).style.display = "block"

     } )
} )


const searchBox = document.querySelector( '.search-box' );
const searchIcon = document.getElementById( 'search-icon' );
const closeSearch = document.getElementById( 'close-search' );

searchIcon.addEventListener( 'click', () => {
     searchBox.classList.toggle( 'fade' );
} )
closeSearch.addEventListener( ( 'click' ), () => {
     searchBox.classList.remove( 'fade' )
} )



