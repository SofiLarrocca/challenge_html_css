const menu = document.getElementById ('menu')
const menuContainer = document.getElementById ('menu-container')


menu.addEventListener ('click', () => { 
    menuContainer.classList.toggle ('none')
})