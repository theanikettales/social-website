const toggleButton = document.getElementById('menu-toggle')
const navlinks = document.getElementById('nav-links')

toggleButton.addEventListener('click', () => {
    navLinks.classList.toggle('active');
})

