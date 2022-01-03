//Header
const navMenu = document.getElementById('nav-menu');
const navToggle = document.getElementById('nav-toggle');
const navClose = document.getElementById('nav-close');

if(navToggle){
    navToggle.addEventListener('click',()=>{
        navMenu.classList.add('show-menu')
    })
}

if(navClose){
    navClose.addEventListener('click',()=>{
        navMenu.classList.remove('show-menu')
    })
}

const navLink = document.querySelectorAll('.nav_link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show-menu')
}
navLink.forEach(element => element.addEventListener('click', linkAction))

//skill anime
const skillsContent = document.querySelectorAll('.skills_content')
const skillsHeader = document.querySelectorAll('.skills_header')
const skillsPercentages = document.querySelectorAll('.skills_percentage')
function toggleSkills(){
    let itemClass = this.parentNode.className

    for (let i = 0; i < skillsContent.length; i++) {
        skillsPercentages.forEach((bar)=>{
            bar.style.animation = ''
        })
        skillsContent[i].className = 'skills_content skills_close';
    }
    if(itemClass === 'skills_content skills_close'){
        this.parentNode.className =  'skills_content skills_open'
        skillsPercentages.forEach((bar)=>{
            if(bar.parentNode.parentNode.parentNode.parentNode.className==='skills_content skills_open')
                bar.style.animation = 'percentage 3s ease-in-out forwards'
            else{
                bar.style.animation = ''
            }
        })
    }
}
skillsHeader.forEach((element)=>{
    element.addEventListener('click',toggleSkills);
})