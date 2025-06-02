const navMenu = document.getElementById('nav--menu'),
      navToogle = document.getElementById('nav-toogle'),
      navClose = document.getElementById('nav-close')

/* Menu show */
if(navToogle){
    navToogle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu')
    })
}

/* Menu hidden */
if(navClose){
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu')
    })
}

const navLink = document.querySelectorAll('.nav__link')

const linkAction = () =>{
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

const blurHeader = () =>{
    const header = document.getElementById('header')
    // Add a class if the bottom offset is greater than 50 of the viewport
    this.scrollY >= 50 ? header.classList.add('blur-header') 
                       : header.classList.remove('blur-header')
}
window.addEventListener('scroll', blurHeader)

// email js code

const contactForm = document.getElementById('contact-form'),
      contactMessage = document.getElementById('contact-message')
const sendEmail = (e) => {
    e.preventDefault()
    // service id - templateid - #form - publickey
    emailjs.sendForm('service_3u8f2i9','template_tp4k3um','#contact-form','MeYkpY7C22-PBmGDN')
      .then(() => {
           contactMessage.textContent = 'Message sent successfully'
          
           setTimeout(() =>{
            contactMessage.textContent = ''
           }, 5000 )

            contactForm.reset()
      } , () => {
           contactMessage.textContent = 'Message not sent (service error) '
      })
    }
     

contactForm.addEventListener('submit', sendEmail)

// scroll up
const scrollUp = () =>{
	const scrollUp = document.getElementById('scroll-up')
    // When the scroll is higher than 350 viewport height, add the show-scroll class to the a tag with the scrollup class
	this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
						: scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)

const sections = document.querySelectorAll('section[id]')
    
const scrollActive = () =>{
  	const scrollDown = window.scrollY

	sections.forEach(current =>{
		const sectionHeight = current.offsetHeight,
			  sectionTop = current.offsetTop - 58,
			  sectionId = current.getAttribute('id'),
			  sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']')

		if(scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight){
			sectionsClass.classList.add('active-link')
		}else{
			sectionsClass.classList.remove('active-link')
		}                                                    
	})
}
window.addEventListener('scroll', scrollActive)

const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 400,
})
sr.reveal('.home__data, .experience, .skills, .contact__container')
sr.reveal('.home__img', {delay: 600})
sr.reveal('.home__scroll', {delay: 800})
sr.reveal('.work__card .services__card', {inerval: 100})
sr.reveal('.about__content', {origin: 'right'})
sr.reveal('.about__img', {iorigin: 'left'})