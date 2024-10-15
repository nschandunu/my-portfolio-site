/*===== MENU SHOW =====*/ 
const showMenu = (toggleId, navId) =>{
  const toggle = document.getElementById(toggleId),
  nav = document.getElementById(navId)

  if(toggle && nav){
      toggle.addEventListener('click', ()=>{
          nav.classList.toggle('show')
      })
  }
}
showMenu('nav-toggle','nav-menu')

/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
  const navMenu = document.getElementById('nav-menu')
  // When we click on each nav__link, we remove the show-menu class
  navMenu.classList.remove('show')
}
navLink.forEach(n => n.addEventListener('click', linkAction))


/* ----- CHANGE ACTIVE LINK ----- */

const sections = document.querySelectorAll('section[id]')
function scrollActive() {
const scrollY = window.scrollY;
sections.forEach(current =>{
  const sectionHeight = current.offsetHeight,
      sectionTop = current.offsetTop - 50,
    sectionId = current.getAttribute('id')
  if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) { 
      document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.add('active-link')
  }  else {
    document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.remove('active-link')
  }
})
}
window.addEventListener('scroll', scrollActive)


/*===== SCROLL REVEAL ANIMATION =====*/
const sr = ScrollReveal({
  origin: 'top',
  distance: '60px',
  duration: 2000,
  delay: 200,
//     reset: true
});

/* ----- ADD SHADOW ON NAVIGATION BAR WHILE SCROLLING ----- */
window.onscroll = function() {headerShadow()};
function headerShadow() {
const navHeader =document.getElementById("header");
if (document.body.scrollTop > 50 || document.documentElement.scrollTop >  50) {
  navHeader.style.boxShadow = "0 1px 6px rgba(0, 0, 0, 0.1)";
  navHeader.style.height = "70px";
  navHeader.style.lineHeight = "70px";
} else {
  navHeader.style.boxShadow = "none";
  navHeader.style.height = "90px";
  navHeader.style.lineHeight = "90px";
}
}




sr.reveal('.home__data, .about__img, .skills__subtitle, .skills__text',{}); 
sr.reveal('.home__img, .about__subtitle, .about__text, .skills__img',{delay: 400}); 
sr.reveal('.home__social-icon',{ interval: 200}); 
sr.reveal('.skills__data, .work__img, .contact__input',{interval: 200}); 
sr.reveal('.edu', { delay: 300 });
sr.reveal('.project2-box', { interval: 200 });



document.addEventListener("DOMContentLoaded", function() {
  // Initialize ScrollReveal
  const sr = ScrollReveal({
      distance: '20px', // Distance to move the items
      duration: 800,     // Animation duration in milliseconds
      delay: 200,        // Delay between animations
      easing: 'ease-in-out', // Easing function
      origin: 'bottom'   // Starting point for the animation
  });

  // Reveal the entire timeline on scroll
  const timeline = document.querySelector('.timeline');
  sr.reveal(timeline, {
      interval: 100 // Delay between each item
  });
});