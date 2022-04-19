const menubar = document.querySelector('.menu-bar')

const menuUL = document.querySelector('.menu')

menubar.addEventListener('click',()=>{
    navUL.classList.toggle('show');
    menubar.classList.toggle('mostrar')
})