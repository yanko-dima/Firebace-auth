import Pagination from 'tui-pagination';
// import 'tui-pagination/dist/tui-pagination.css';
import axios from 'axios';
import { renderList } from './render-list';
// import { renderMarkup } from './film-find';
import { getRefs } from './get-refs';
import { searchBy, queryForTui } from '../index';
import { Loading } from 'notiflix/build/notiflix-loading-aio';

const container = getRefs().gallery;
export const containerTui = document.getElementById('tui-pagination-container');
// const instance = new Pagination(containerTui, { ... });

// instance.getCurrentPage();

let value = '';
let currentPage = 1;

const options = {
  totalItems: 19980,
  itemsPerPage: 20,
  visiblePages: 5,
  page: 1,
  centerAlign: true,
  firstItemClassName: 'tui-first-child',
  lastItemClassName: 'tui-last-child',
  template: {
    page: '<a href="#" class="tui-page-btn">{{page}}</a>',
    currentPage:
      '<strong class="tui-page-btn tui-is-selected">{{page}}</strong>',
    moveButton:
      '<a href="#" class="tui-page-btn tui-{{type}}">' +
      '<span class="tui-ico-{{type}}">{{type}}</span>' +
      '</a>',
    disabledMoveButton:
      '<span class="tui-page-btn tui-is-disabled tui-{{type}}">' +
      '<span class="tui-ico-{{type}}">{{type}}</span>' +
      '</span>',
    moreButton:
      '<a href="#" class="tui-page-btn tui-{{type}}-is-ellip">' +
      '<span class="tui-ico-ellip">...</span>' +
      '</a>',
  },
};

const pagination = new Pagination(containerTui, options);

pagination.on('afterMove', e => {
  currentPage = e.page;
  console.log(currentPage);
  container.innerHTML = '';
  getRefs().pagination.classList.remove('pagination-off');
  if (searchBy === 'search') {
    value = queryForTui;
    console.log(searchBy);
    console.log(queryForTui);
    paginationSearch(
      `https://api.themoviedb.org/3/search/movie?&query=${value}&page=${currentPage}&api_key=419c8d7d79cbcac22c5520f1ac14d2c7`
    );
  } else {
    paginationSearch(
      `https://api.themoviedb.org/3/trending/movie/week?page=${currentPage}&api_key=419c8d7d79cbcac22c5520f1ac14d2c7`
    );
  }
  return currentPage;
});

async function paginationSearch(url) {
  try {
    //------------ start Loader
    Loading.arrows({
      svgColor: '#ff6b08',
      backgroundColor: 'rgba(0,0,0,0.25)',
      cssAnimation: true,
      cssAnimationDuration: 2000,
      clickToClose: true,
    });
    const data = await axios.get(url);
    const result = await data.data;
    const results = await result.results;
    renderList(results, container);
    // renderMarkup(results, container);
    //  //----------- stop Loader
     Loading.remove();
    containerTui.classList.remove('visually-hidden');
  } catch (error) {
    console.error(error);
  }
}

// pagination.on('beforeMove', evt => {
//   const { page } = evt;
//   const result = ajax.call({page});

//   if(result) {
//     pagination.movePageTo(page);
//   } else {
//     return false;
//   }
// });

function paginationTotalItems(n) {
  pagination.reset(n);
  pagination._paginate(1);
}

export { pagination, paginationTotalItems };
