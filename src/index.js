import { renderList } from './js/render-list';
// import { renderMarkup } from './js/film-find';
import { getRefs } from './js/get-refs';
import darkTheme from './js/dark-theme';
import { onShowMyLibrary, onShowHome } from './js/header';
import './js/pagination';
import './js/film-find';
import './js/up-btn';
import ApiService from './js/api';
import { containerTui } from './js/pagination';
import { paginationTotalItems } from './js/pagination';
import { onFooterClick } from './js/modal-footer';
import { onContainerClick } from './js/modal-movie';
// import { onContainerClick } from './js/my-modal';

export let searchBy = '';
export let queryForTui = '';
const apiData = new ApiService();
const container = getRefs().gallery;
const mainCard = getRefs().linkCard;
const foterLink = getRefs().footerLink;

darkTheme();

// Top movies
function topMoviesRender() {
  container.innerHTML = '';
  apiData.getTopMovies().then(({ results }) => {
    renderList(results, container);
  });
}
topMoviesRender();

// Main movie
container.addEventListener('click', onContainerClick);

// Footer link
foterLink.addEventListener('click', onFooterClick);

// Listiners
getRefs().logo.addEventListener('click', onLogoClick);
getRefs().homeBtn.addEventListener('click', onHomeBtnClick);
getRefs().myLibraryBtn.addEventListener('click', onMyLybraryBtnClick);
getRefs().watchedBtn.addEventListener('click', onWatchedBtnClick);
getRefs().queueBtn.addEventListener('click', onQueueBtnClick);

// Header functions
function onLogoClick(e) {
  e.preventDefault();
  onShowHome();
  topMoviesRender();
  getRefs().pagination.classList.remove('pagination-off');
}

function onHomeBtnClick(e) {
  e.preventDefault();
  onShowHome();
  topMoviesRender();
  getRefs().pagination.classList.remove('pagination-off');
}

function onMyLybraryBtnClick(e) {
  e.preventDefault();
  onShowMyLibrary();
  container.innerHTML = '';
  getRefs().pagination.classList.add('pagination-off');
}

function onWatchedBtnClick() {
  if (getRefs().queueBtn.classList.contains('active-btn')) {
    getRefs().queueBtn.classList.remove('active-btn');
  }
  getRefs().watchedBtn.classList.add('active-btn');
}

function onQueueBtnClick() {
  if (getRefs().watchedBtn.classList.contains('active-btn')) {
    getRefs().watchedBtn.classList.remove('active-btn');
  }
}
