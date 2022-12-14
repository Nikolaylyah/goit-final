(() => {
    const refs = {
        openModalBtn: document.querySelector('[js-data-modal-open]'),
        closeModalBtn: document.querySelector('[js-data-modal-close]'),
        modal: document.querySelector('[js-data-modal]'),
    };

    refs.openModalBtn.addEventListener('click', toggleModal);
    refs.closeModalBtn.addEventListener('click', toggleModal);

    function toggleModal() {
        refs.modal.classList.toggle('is-hidden');
    }
})();