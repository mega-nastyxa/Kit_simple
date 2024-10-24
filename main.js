document.querySelector('.burger').addEventListener('click', function() {
    this.classList.toggle('active');
    document.querySelector('.menu').classList.toggle('open');
    document.querySelector('.header__contacts').classList.toggle('open');
})