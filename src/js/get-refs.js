export function getRefs() {
  return {
    // containerMovies: document.querySelector('.collection'),
    gallery: document.querySelector('.gallery'),
    linkCard: document.querySelectorAll('.post'),
    searchMovie: document.querySelector('#search-form'),
    // galleryContainer: document.querySelector('.gallery>.container'),

    // Header Refs
    headerContainer: document.querySelector('.js-header-container'),
    nav: document.querySelector('.nav'),
    logo: document.querySelector('.js-logo'),
    homeBtn: document.querySelector('a[data-link="home"]'),
    myLibraryBtn: document.querySelector('a[data-link="library"]'),
    form: document.querySelector('.js-submit'),
    myLibraryBtns: document.querySelector('.js-librari-list'),
    watchedBtn: document.querySelector('.js-watched-btn'),
    queueBtn: document.querySelector('.js-queue-btn'),
    loginBtn: document.querySelector('a[data-link="login"]'),
    logoutBtn: document.querySelector('a[data-link="logout"]'),

    // Pagination-Tui
    pagination: document.querySelector('.tui-pagination'),

    upBtn: document.querySelector('.up-btn'),

    // Footer
    footerLink: document.querySelector('.footer__link'),
  };
}
