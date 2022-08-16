(() => {
    const refs = {
        openModalBtn: document.querySelector("[data-modal-open]"),


        closeModalBtn: document.querySelector("[data-modal-close]"),

        modal: document.querySelector("[data-modal]"),
    };

    refs.openModalBtn.addEventListener("click", toggleModal);
    refs.closeModalBtn.addEventListener("click", toggleModal);

    function toggleModal() {
        document.body.classList.toggle("modal-open");
        refs.modal.classList.toggle("modal__is-hidden");
    }
})();




(() => {
    const refs = {
        openModalBtn: document.querySelector("[data-modal-open-second]"),

        closeModalBtn: document.querySelector("[data-modal-close-second]"),
        modal: document.querySelector("[data-modal]"),
    };

    refs.openModalBtn.addEventListener("click", toggleModal);
    refs.closeModalBtn.addEventListener("click", toggleModal);

    function toggleModal() {
        document.body.classList.toggle("modal-open");
        refs.modal.classList.toggle("modal__is-hidden");
    }
})();