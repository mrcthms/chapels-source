((d) => {
  const button = d.querySelector('.js-search');
  const input = d.querySelector('.js-search-target-input');
  const form = d.querySelector('.js-search-target-form');
  const wrapper = d.querySelector('.js-search-target-wrapper');

  button.addEventListener('click', (e) => {
    console.log(e);
    if (wrapper.classList.contains('is-visible')) {
      // wrapper.classList.remove('is-visible');
      console.log('submitting');
      form.submit();
    } else {
      wrapper.classList.add('is-visible');
      input.focus();
    }
  });

  document.addEventListener('click', e => {
    const isInsideForm = wrapper.contains(e.target);
    if (!isInsideForm) {
      wrapper.classList.remove('is-visible');
    }
  });

})(document);
