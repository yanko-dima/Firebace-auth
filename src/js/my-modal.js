// import Notiflix from 'notiflix';
// import * as basicLightbox from 'basiclightbox
// import ApiService from './api';
// const apiMainMovie = new ApiService();
// const ADD_TO_WATCHED_FILM = "add-to-watched-film";
// const ADD_TO_QUEUE_FILM = "add-to-queue-film";

// let currentMovie = '';
// export function onContainerClick(event) {
//   const parent = event.target.closest('li').firstChild;
//   const { id } = parent.dataset; 
//   if (!parent) {
//     return;
//   }
//   event.preventDefault();
//   window.addEventListener('keydown', onImageClose);

//   apiMainMovie.getMainMovie( id).then(({title,genres, date, poster,about,populanty,vote, votes}) => {
//     const ganreList = genres.map((ganre) => ganre.name).join(', ');
  
//     currentMovie = basicLightbox.create(`
//     <div class="current-movie">
//         <img  src="https://image.tmdb.org/t/p/w500${poster}" class="current-movie__img">
//         <div class="current-movie__info">
//         <h2 class="current-movie__title"> ${title}</h2>
//         <p class="current-movie__votes"> Vote:<span class="current-movie__vote-data">${vote}</span> / Votes:<span class="current-movie__votes-data">${votes}</span>   </p>
//         <p class="current-movie__popularity"> Popularity: <span class="current-movie__popularity-data">${populanty}</span></p>
//         <p class="current-movie__original-title"> Original Title: <span class="current-movie__original-title-data">${title}</span></p>
//         <p class="current-movie__genre"> Genre:  <span class="current-movie__genre-data">${ganreList};</span>
//         </p>
//         <div class="current-movie__about-section">
//           <h3 class="current-movie__about"> ABOUT</h3>
//           <p class="current-movie__about-data"> ${about} </p>
//         </div>
//         <div class="current-movie__btn-container">
//         <button type = "button" class="current-movie_btn-add-to-watched">ADD TO WATCHED</button>
//         <button type = "button" class="current-movie_btn-add-to-queue">ADD TO QUEUE</button>
//       </div>
//     </div>` 
//       );
//     currentMovie.show();
//   });
//   const btnAddToWatched = document.querySelector(".current-movie_btn-add-to-watched");
//   const btnAddToQueue= document.querySelector(".current-movie_btn-add-to-queue");  
//   // itemW = currentMovie;
//   // itemQ = currentMovie;
//   console.log(btnAddToWatched);
//   // btnAddToWatched.addEventListener('click', onClickToAddToWatchedBtn);
//   // btnAddToQueue.addEventListener('click', onClickToAddToQueueBtn);
// }
// function onImageClose(event) {
//     if (event.code === 'Escape') {
//       currentMovie.close();
//       window.removeEventListener('keydown', onImageClose); 
//     }
//   }
// function onClickToAddToWatchedBtn() {
//   console.log("CLICK TO ADD 1");
//   localStorage.setItem(ADD_TO_WATCHED_FILM, JSON.stringify());
// }
// function onClickToAddToQueueBtn() {
//   console.log("CLICK TO ADD 2");
//   localStorage.setItem(ADD_TO_QUEUE_FILM, JSON.stringify());
// }

