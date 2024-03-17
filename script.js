(() => {
    const refs = {
      openModalBtn: document.querySelector("[data-modal-open]"),
      closeModalBtn: document.querySelector("[data-modal-close]"),
      modal: document.querySelector("[data-modal]"),
   
      burgerMenuItems: document.querySelectorAll(".burger-item a")
    };
  
   
    refs.openModalBtn.addEventListener("click", toggleModal);
    refs.closeModalBtn.addEventListener("click", toggleModal);
  
  
    refs.burgerMenuItems.forEach(item => {
        item.addEventListener("click", toggleModal);
    });
  
    function toggleModal() {
      refs.modal.classList.toggle("is-hidden");
      document.body.classList.toggle("modal-open");
    }
})();



