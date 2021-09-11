document.addEventListener('click', function(event) {
    const target = event.target.closest('h2');

    if (!target) return;

    const top = target.getBoundingClientRect().top + pageYOffset;

    window.scrollTo(0, top);
});
