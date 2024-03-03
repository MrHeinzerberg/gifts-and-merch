document.getElementById("open-burger-menu-btn").addEventListener("click",function() {
    document.getElementById("burger-menu").classList.add("open")
})

document.getElementById("burger-menu__close-btn").addEventListener("click",function() {
    document.getElementById("burger-menu").classList.remove("open")
})

window.addEventListener('keydown', (e) => {
    if (e.key === "Escape") {
        document.getElementById("burger-menu").classList.remove("open")
    }
})

document.querySelector("#burger-menu .burger-menu").addEventListener('click', event => {
    event._isClickWithInModal = true;
})

document.getElementById("burger-menu").addEventListener('click', event => {
    if (event._isClickWithInModal) return;
    event.currentTarget.classList.remove('open');
});