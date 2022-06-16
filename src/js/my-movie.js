
// import { getRefs } from './get-refs';
// import { renderList } from './render-list';
// import ApiService from './api';
// const getFilm = new ApiService();
// const searchFilm = getRefs().searchMovie;
// const galleryList =  getRefs().gallery;

// //  onFormSubmit
// searchFilm.addEventListener('submit', onFormSubmit);
// function onFormSubmit(e) {
//   e.preventDefault();
//   getFilm.value = e.currentTarget.elements.searchQuery.value.trim();

//   if (!getFilm.value) {
//     return alert('Not correct search key');
//   }
//   // get searchFilm
//   getFilm.getSearchMovies(getFilm.value).then(({results}) => {
//     galleryList.innerHTML = '';
//     return renderList(results, galleryList);
//   });
// }

