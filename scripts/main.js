const burger = document.querySelector('.burger_menu');
const menu = document.querySelector('.burger')
let searchMobile = document.querySelector('.search_button')
let mobileInp = document.querySelector('.for-mobile')
let closeLink = document.querySelector('.close_link')
let headerLink = document.querySelector('.header_link')

burger.addEventListener('click', () => {
    burger.classList.toggle('is-active')
    menu.classList.toggle('open') 
})

searchMobile.addEventListener('click', ()=>{
    mobileInp.classList.toggle('come')
    mobileInp.value = ''
})

closeLink.addEventListener('click', () => {
    headerLink.style.display = 'none'
})