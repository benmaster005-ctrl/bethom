const nav = document.querySelector('nav');
const menuBotton = document.querySelector('header .menu-btn');
const icon = document.querySelector('.icon')
const links = document.querySelectorAll('nav a');
const body = document.querySelector('body')

menuBotton.addEventListener('click', (e) => {
    nav.classList.toggle('active');
    if (nav.classList.contains('active')) {
        icon.innerHTML = `<path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" />`
    }
    else {
        icon.innerHTML = `<path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z" />`
    }
})

links.forEach(link => link.addEventListener('click', (e) => {
    setTimeout(() => {
        nav.classList.remove('active');
        if (nav.classList.contains('active')) {
            icon.innerHTML = `<path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" />`
        }
        else {
            icon.innerHTML = `<path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z" />`
        }
    }, 500)
}))
