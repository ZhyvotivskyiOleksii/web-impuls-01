// (() => {
//     const refs = {
//       openModalBtn: document.querySelectorAll('[data-modal-open]'),
//       closeModalBtn: document.querySelector('[data-modal-close]'),
//       modal: document.querySelector('[data-modal]'),
//     };
  
//     refs.openModalBtn.forEach((element) => {
//       element.addEventListener('click', toggleModal);
//     });
//     refs.closeModalBtn.addEventListener('click', toggleModal);
  
   
  
//     refs.modal.addEventListener('click', removeModal);
//     function removeModal(e) {
//       if (e.target === e.currentTarget) {
//         refs.modal.classList.add('is-hidden');
//       }
//     }
  
//     function toggleModal() {
//       refs.modal.classList.toggle('is-hidden');
//       document.body.classList.toggle('no-scroll');
//     }
//   })();

(() => {
  const refs = {
    openModalBtn: document.querySelectorAll('[data-modal-open]'),
    closeModalBtn: document.querySelector('[data-modal-close]'),
    modal: document.querySelector('[data-modal]'),
  };

  refs.openModalBtn.forEach((element) => {
    element.addEventListener('click', toggleModal);
  });
  refs.closeModalBtn.addEventListener('click', () => {
    toggleModal();
    location.reload(); // Перезагрузка страницы после закрытия модального окна
  });

  // Закрытие по клику на бекдроп
  refs.modal.addEventListener('click', (e) => {
    if (e.target === e.currentTarget) {
      toggleModal();
      location.reload(); // Перезагрузка страницы после закрытия модального окна
    }
  });

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
    document.body.classList.toggle('no-scroll');
  }
})();
