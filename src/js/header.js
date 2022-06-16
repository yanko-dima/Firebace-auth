// Refs
const refs = {
  headerContainer: document.querySelector('.js-header-container'),
  nav: document.querySelector('.nav'),
  logo: document.querySelector('.js-logo'),
  homeBtn: document.querySelector('a[data-link="home"]'),
  myLibraryBtn: document.querySelector('a[data-link="library"]'),
  form: document.querySelector('.js-submit'),
  myLibraryBtns: document.querySelector('.js-librari-list'),
  watchedBtn: document.querySelector('.js-watched-btn'),
  queueBtn: document.querySelector('.js-queue-btn'),
  container:document.querySelector('.gallery'),
};

const {
  headerContainer,
  nav,
  logo,
  homeBtn,
  myLibraryBtn,
  form,
  myLibraryBtns,
  watchedBtn,
  queueBtn,
  container,
} = refs;

function onShowMyLibrary() {
  myLibraryBtns.classList.remove('is-hidden');
  form.classList.add('is-hidden');
  homeBtn.classList.remove('current-page');
  myLibraryBtn.classList.add('current-page');
  headerContainer.classList.add('header__library-bg');
  headerContainer.classList.remove('header__home-bg');
  headerContainer.classList.add('header__library-padding');
  headerContainer.classList.remove('header__home-padding');
  nav.classList.add('nav__library-margin');
  nav.classList.remove('nav__home-margin');
  container.innerHTML = "";
}

function onShowHome() {
  myLibraryBtns.classList.add('is-hidden');
  form.classList.remove('is-hidden');
  homeBtn.classList.add('current-page');
  myLibraryBtn.classList.remove('current-page');
  headerContainer.classList.add('header__home-bg');
  headerContainer.classList.remove('header__library-bg');
  headerContainer.classList.add('header__home-padding');
  headerContainer.classList.remove('header__library-padding');
  nav.classList.add('nav__home-margin');
  nav.classList.remove('nav__library-margin');
}

export { onShowMyLibrary, onShowHome };

function onLogoClick(e) {
  e.preventDefault();
  console.log('onLogoClick');
  onShowHome();
}

function onHomeBtnClick(e) {
  e.preventDefault();
  console.log('onHomeBtnClick');
  onShowHome();
}

function onMyLybraryBtnClick(e) {
  e.preventDefault();
  console.log('onMyLybraryBtnClick');
  onShowMyLibrary();
}

// function onFormSubmit(e) {
//   e.preventDefault();
//   searchQuery = e.currentTarget.elements.searchQuery.value.trim();

//   if (!searchQuery) {
//     alert('Not correct search key');
//     return;
//   }

//   console.log('onFormSubmit');
//   console.log(searchQuery);
// }

function onWatchedBtnClick() {
  if (queueBtn.classList.contains('active-btn')) {
    queueBtn.classList.remove('active-btn');
  }
  watchedBtn.classList.add('active-btn');
}

function onQueueBtnClick() {
  if (watchedBtn.classList.contains('active-btn')) {
    watchedBtn.classList.remove('active-btn');
  }
  queueBtn.classList.add('active-btn');
}
