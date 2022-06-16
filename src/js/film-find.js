
// import axios from 'axios';
import { getRefs } from './get-refs';
const searchFilm = getRefs().searchMovie;
const galleryList =  getRefs().gallery;
// let gengesArray = [];
import { renderList } from './render-list';
import ApiService from './api';
const getFilm = new ApiService();

// const API_KEY = '419c8d7d79cbcac22c5520f1ac14d2c7';
// axios.defaults.baseURL = 'https://api.themoviedb.org/3/search/movie/';
// axios.defaults.params = {
//   api_key: API_KEY,
//   language: 'en-US',
//   include_adult: 'false',
// };

// export default class GetFilms {
//   constructor() {
//     this.page = 1;
//     this.searchValue = '';
//   }

  // async fetchFilm() {
  //   return await axios.get(`?&query=${this.searchValue}&page=${this.page}`);
  // }
  // async fetchFilmGenres() {
  //   return await fetch(
  //     `https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY}&language=en-US`
  //   ).then(response => {
  //     if (!response.ok) {
  //       throw new Error();
  //     }
  //     return response.json();
  //   });
  // }

  // get value() {
  //   return this.searchValue;
  // }

  // set value(newValue) {
  //   this.searchValue = newValue;
  // }
  //   get pageNumber() {
  //     return this.page;
  //   }
  //   set pageNumber(nextValue) {
  //     this.page = nextValue;
  //   }
// }

// const getFilmGenres = new GetFilms();
// const getFilm = new GetFilms();

// get ganres start
// getFilmGenres.fetchFilmGenres().then(response => {
//   gengesArray = response.genres;
// });

//  onFormSubmit
searchFilm.addEventListener('submit', onFormSubmit);
function onFormSubmit(e) {
  e.preventDefault();
  getFilm.value = e.currentTarget.elements.searchQuery.value.trim();

  if (!getFilm.value) {
    return alert('Not correct search key');
  }
  // get searchFilm
  getFilm.getSearchMovies(getFilm.value).then(({results}) => {
    galleryList.innerHTML = '';
    return renderList(results, galleryList);
  });
}

// export function renderMarkup(searchQuery, container) {
//   const markup = searchQuery
//     .map(({ id, poster_path, original_title, genre_ids, release_date }) => {
//       // convertGenresToNames
//       let genreNames = [];
//       gengesArray.map(({ id, name }) => {
//         genre_ids.map(genreNumber => {
//           if (genreNumber === id) {
//             genreNames.push(name);
//           }
//         });
//       });
//       /// convertGenresToNames

//       if (release_date === undefined) {
//         release_date = '';
//       }
//       return `<li class="card-list"><a class="post" data-id=${id}>

//   <div class="photo-card">

//   <picture class="poster-thumb">


//         <source class="lzy_img" media="(min-width: 1200px)"
//         srcset=""  type="image/jpeg" width="310" height="450"  data-src="${poster_path} 1x,${poster_path} 2x">


//         <source class="lzy_img" media="(min-width: 768px)"
//          srcset=""  type="image/jpeg" width="335" height="455"  data-src= "${poster_path} 1x,${poster_path} 2x">


//         <source class="lzy_img" media="(max-width: 767px)"
//          srcset=""  type="image/jpeg" width="280" height="400"  data-src= "${poster_path} 1x,${poster_path} 2x">


//                     <img
//                         src="${posterPath(poster_path)}"
//                         alt="${original_title}"
//                         loading="lazy"
//                         class="poster"
//                     />
//                 </picture>
//   <div class="info">


//                 <div class="movie-info">
//                     <h2 class="movie-title">${original_title}</h2>
//                     <div class="movie-description">
//                       <ul class="genres-list">
//                       ${genreNames.join(', ')}
//                       </ul>
//                       <p class="movie-date">${release_date.substring(0, 4)}</p>
//                     </div>
//                 </div>
//   </div>
// </div>
// </a></li> 
//         `;
//     })
//     .join('');
//   container.insertAdjacentHTML('beforeend', markup);
// }

// function releaseDate(year) {
//   if (!year) 'No data';
//   return year.slice(0, 4);
// }

// function posterPath(poster) {
//   if (poster === null) {
//     return noImg;
//   }
//   return `https://image.tmdb.org/t/p/w500${poster}`;
// }
