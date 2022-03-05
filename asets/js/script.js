const nav = document.querySelector('.navbar');
const textNavbar = document.querySelector('.nav-home');
const menusNavBar = document.querySelector('.nav-menus');
const blogNavBar = document.querySelector('.nav-blog');
const contactNavBar = document.querySelector('.nav-contact');

window.addEventListener('scroll',() =>{
    if(window.scrollY > 29){
        nav.classList.add('scroll');
        textNavbar.classList.add('scroll-text1');
        menusNavBar.classList.add('scroll-text2');
        blogNavBar.classList.add('scroll-text3');
        contactNavBar.classList.add('scroll-text4');
        
    }
    else{
        nav.classList.remove('scroll');
        textNavbar.classList.remove('scroll-text1');
        menusNavBar.classList.remove('scroll-text2');
        blogNavBar.classList.remove('scroll-text3');
        contactNavBar.classList.remove('scroll-text4');
        contactNavBar.classList.remove('scroll-text4');
    }
});

