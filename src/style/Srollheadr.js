window.addEventListener('scroll', function () {
    var header = document.querySelector('.myHeader');
    var scrollPosition = window.scrollY;

    if (scrollPosition > 0) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});