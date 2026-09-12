/* Core content, language links and FAQ work without JavaScript. */
(() => {
  const picker = document.querySelector('.language');
  if (!picker) return;
  document.addEventListener('click', (event) => {
    if (!picker.contains(event.target)) picker.open = false;
  });
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && picker.open) {
      picker.open = false;
      picker.querySelector('summary').focus();
    }
  });
})();
