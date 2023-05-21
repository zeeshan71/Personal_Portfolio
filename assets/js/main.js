/*==================== MENU SHOW Y HIDDEN ====================*/
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')


/*===== MENU SHOW =====*/
/* Validate if constant exists */
if(navToggle){
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu');
    } )
}


/*===== MENU HIDDEN =====*/
/* Validate if constant exists */
if(navClose){
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu');
    })
}


const navLink = document.querySelectorAll('.nav_link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))



// skills
// const skillsContent = document.getElementsByClassName(''),
//       skillsHeader = document.querySelectorAll('.skills_header');

// function toggleSkills(){
//     let itemClass = this.parentNode.className

//     for(i = 0; i < skillsContent.length; i++){
//         skillsContent[i].className = 'skills_content skills_close'
//     }
//     if(itemClass === 'skills_content skills_close'){
//         this.parentNode.className = 'skills_content skills_open'
//     }
// }

// skillsHeader.forEach((el) => {
//     el.addEventListener('click', toggleSkills);
// })

// QUALIFICATION

const tabs = document.querySelectorAll('[data-target]');
      tabContents = document.querySelectorAll('[data-content]');

tabs.forEach(tab => {
    tab.addEventListener('click', () =>{
        const target = document.querySelector(tab.dataset.target);

        tabContents.forEach(tabContent =>{
            tabContent.classList.remove('qual_active')
        });
        target.classList.add('qual_active')

        tab.forEach(tab =>{
            tab.classList.remove('qual_active')
        })
        tab.classList.add('qual_active')
    })
})

// project
const modalViews = document.querySelectorAll('.proj_modal'),
      modalBtns = document.querySelectorAll('.proj_button'),
      modalCloses = document.querySelectorAll('.proj_modal-close');

let modal = function(modalClick){
    modalViews[modalClick].classList.add('active-modal')
}

modalBtns.forEach((modalBtn, i) =>{
    modalBtn.addEventListener('click', () => {
        modal(i)
    })
})

modalCloses.forEach((modalClose) => {
    modalClose.addEventListener('click', () => {
        modalViews.forEach((modalViews) => {
            modalViews.classList.remove('active-modal')
        })
    })
})
// active scroll
const sections = document.querySelectorAll('section[id]')

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
        }else{
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)

// change background header
function scrollHeader(){
    const nav = document.getElementById('header')
    if(this.scrollY >= 80) nav.classList.add('scroll-header'); else nav.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)

// scroll top
function scrollUp(){
    const scrollUp = document.getElementById('scroll-up');
    if(this.scrollY >= 560) scrollUp.classList.add('show-scroll'); else scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)