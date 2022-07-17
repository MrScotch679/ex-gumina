export default function modalTrigger(buttonSelector, modalSelector = '.modal') {
  const button = document.querySelector(buttonSelector),
        modal = document.querySelector(modalSelector);

  button.addEventListener('click', () => {
    modal.style.display = 'flex';
    document.body.style.overflow = 'hidden';
  });
}