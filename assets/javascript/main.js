/*================================SHOW MENU======================================*/
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

/*========MENU SHOW===========*/

/*========Validate if constatnts exists===========*/
if(navToggle){
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu')
    })
}

/*========MENU SHOW===========*/

/*========Validate if constatnts exists===========*/
if (navClose){
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu')
    })
}

/*========REMOVE MENU MOBILE===========*/
const navLink = document.querySelectorAll('.nav_link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    // when we click on each nav_link, we remove the
    navMenu.classList.remove('show-menu')
}

navLink.forEach(n => n.addEventListener('click', linkAction))


/*===================CHANGE BACKGROUND HEADER ===============*/
function scrollHeader(){
    const header =document.getElementById('header')
    //when the scroll is greater than 100vh
    if(this.scrollY >=100) header.classList.add('scroll-header'); else header.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)

/*===================SWIPE DISCOVER======================*/
var swiper = new Swiper(".discover_container", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    loop: true,
    spaceBetween: 32,
    coverflowEffect: {
      rotate: 0,
   
    },
 
 
  });

  /*===================VIDEO======================*/
const videoFile = document.getElementById('video-file'),
        videoButton = document.getElementById('video-button'),
        videoIcon = document.getElementById('video-icon')

function playPause(){
    if (videoFile.paused){
        videoFile.play()
        //change icon when video starts
        videoIcon.classList.add('ri-pause-circle-line')
        videoIcon.classList.remove('ri-play-circle-line')
    }else{
        //change icon when video pause
        videoFile.pause()
        videoIcon.classList.remove('ri-pause-circle-line')
        videoIcon.classList.add('ri-play-circle-line')

    }
}

videoButton.addEventListener('click',playPause)

function videoEnd(){
    //change icon when video finish
    videoIcon.classList.remove('ri-pause-circle-line')
        videoIcon.classList.add('ri-play-circle-line')
}

videoFile.addEventListener('ended',videoEnd)

/*==================== SHOW SCROLL UP ====================*/ 
function scrollUp(){
    const scrollUp = document.getElementById('scroll-up');
    if(this.scrollY >= 200) scrollUp.classList.add('show-scroll'); else scrollUp.classList.remove('show-scroll')
}

window.addEventListener('scroll', scrollUp)

/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
const sections = document.querySelectorAll('section[id]')

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav_menu a[href*=' + sectionId + ']').classList.add('active-link')
        }else{
            document.querySelector('.nav_menu a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)