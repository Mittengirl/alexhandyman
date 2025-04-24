// Пролистывание галереи
document.addEventListener('DOMContentLoaded', () => {
  const gallery = document.querySelector('.gallery');
  const leftArrow = document.querySelector('.arrow.left');
  const rightArrow = document.querySelector('.arrow.right');

  const scrollAmount = 320;

  if (leftArrow && rightArrow && gallery) {
    leftArrow.addEventListener('click', () => {
      gallery.scrollBy({
        left: -scrollAmount,
        behavior: 'smooth'
      });
    });

    rightArrow.addEventListener('click', () => {
      gallery.scrollBy({
        left: scrollAmount,
        behavior: 'smooth'
      });
    });
  }
});
