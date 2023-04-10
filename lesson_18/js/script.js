document.addEventListener("click", function(e) {
    const targetElement = e.target;

    if (targetElement.closest('.header__burger-btn')) {
        document.documentElement.classList.toggle('menu-open');
        e.preventDefault();
    }

})