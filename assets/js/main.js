/*==================== MENU SHOW Y HIDDEN ====================*/
const navMenu = document.getElementById('nav-menu'),
    navToggle = document.getElementById('nav-toggle'),
    navClose = document.getElementById('nav-close')

/*===== MENU SHOW =====*/
/* Validate if constant exists */   
if(navToggle)
{
    navToggle.addEventListener('click',()=>{
        navMenu.classList.add('show-menu')
    })
}


/*===== MENU HIDDEN =====*/
/* Validate if constant exists */
if(navClose)
{
    navClose.addEventListener('click',()=>{
        navMenu.classList.remove('show-menu')
    })
}

/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*==================== ACCORDION SKILLS ====================*/
const skillsContent = document.getElementsByClassName('skills__content');
const skillsHeader = document.querySelectorAll('.skills__header');

function toggleSkills() 
{
    let itemClass = this.parentNode.classList;
    if (itemClass.contains('skills__close')) 
    {
        for (let i = 0; i < skillsContent.length; i++) 
        {
            skillsContent[i].classList.remove('skills__open');
            skillsContent[i].classList.add('skills__close');
        }
        itemClass.remove('skills__close');
        itemClass.add('skills__open');
    } 
    else 
    {
        itemClass.remove('skills__open');
        itemClass.add('skills__close');
    }

    console.log(itemClass);
}
skillsHeader.forEach((el) => {
    el.addEventListener('click', toggleSkills);
});

/*==================== SERVICES MODAL ====================*/
const  modalViews = document.querySelectorAll('.services__modal');
const  modalBtns  = document.querySelectorAll('.services__button');
const  modalCloses= document.querySelectorAll('.services__modal-close');

let modal = function(modalClick)
{
    modalViews[modalClick].classList.add('active-modal')
}

modalBtns.forEach((btn,i)=>{
    btn.addEventListener("click",()=>{
        modal(i)
        console.log("clicked")
    })
})

modalCloses.forEach((close)=>{
    close.addEventListener("click",()=>{
        modalViews.forEach((view)=>{
            view.classList.remove("active-modal")
        })
    })
})


/*==================== PORTFOLIO SWIPER  ====================*/
var swiper = new Swiper('.portfolio__container ',
{
    cssMode : true,
    navigation:{
        nextEl:'.swiper-button-next',
        prevEl:'.swiper-button-prev'
    },
    pagination:
    {
        el:'.swiper-pagination',
        clickable:true
    }
})

/*==================== CHANGE BACKGROUND HEADER ====================*/ 
function scrollHeader()
{
    const nav = document.getElementById('header');
    if(this.scrollY >=80)
    {
        nav.classList.add('scroll-header');
    }
    else
    {
        nav.classList.remove('scroll-header');
    }
}
window.addEventListener('scroll',scrollHeader);

/*==================== SHOW SCROLL UP ====================*/ 
function scrollHeader()
{
    const up = document.getElementById('scroll-up');
    if(this.scrollY >=560)
    {
        up.classList.add('show-scroll');
    }
    else
    {
        up.classList.remove('show-scroll');
    }
}
window.addEventListener('scroll',scrollHeader);

/*==================== DARK LIGHT THEME ====================*/ 