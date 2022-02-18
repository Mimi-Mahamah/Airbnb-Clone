document.getElementById("pets")
    .addEventListener("click", function() {
        if (this.classList.contains("active")) {
            this.classList.remove("active");
        } else this.classList.add("active");
    });

document.getElementById("wifi")
    .addEventListener("click", function() {
        if (this.classList.contains("active")) {
            this.classList.remove("active");
        } else this.classList.add("active");
    });

document.getElementById("tub")
    .addEventListener("click", function() {
        if (this.classList.contains("active")) {
            this.classList.remove("active");
        } else this.classList.add("active");
    });






// Popup modal
const openModalButtons = document.querySelectorAll('[data-modal-target]')
const closeModalButtons = document.querySelectorAll('[data-close]')
const overlay = document.getElementById('overlay')

openModalButtons.forEach(button => {
    button.addEventListener('click', () => {
        const modal = document.querySelector(button.dataset.modalTarget)
        openModal(modal)
    })
})

overlay.addEventListener('click', () => {
    const modals = document.querySelectorAll('.modal.active')
    modals.forEach(modal => {
        closeModal(modal)
    })
})

closeModalButtons.forEach(button => {
    button.addEventListener('click', () => {
        const modal = button.closest('.modal')
        closeModal(modal)
    })
})

function openModal(modal) {
    if (modal == null) return
    modal.classList.add('active')
    overlay.classList.add('active')
}

function closeModal(modal) {
    if (modal == null) return
    modal.classList.remove('active')
    overlay.classList.remove('active')
}