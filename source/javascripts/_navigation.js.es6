((d) => {
  const button = d.querySelector('.toggle-nav');
  const nav = d.querySelector('.nav-wrap');

  button.addEventListener('click', () => {
    if (nav.classList.contains('is-visible')) {
      nav.classList.remove('is-visible');
      button.classList.remove('is-visible');
    } else {
      nav.classList.add('is-visible');
      button.classList.add('is-visible');
    }
  });
})(document);
