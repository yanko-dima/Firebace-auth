import axios from 'axios';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { Loading } from 'notiflix/build/notiflix-loading-aio';

const API_KEY = '419c8d7d79cbcac22c5520f1ac14d2c7';
axios.defaults.params = {
  api_key: API_KEY,
  language: 'en-US',
  include_adult: 'false',
};
export default class ApiService {
  constructor() {
    this.searchQuery = '';
    this.page = 1;
  }

  async  getTopMovies() {
        try { 
        const {data} =await axios.get(`https://api.themoviedb.org/3/trending/movie/day?api_key=${API_KEY}`);
        return data; 
        }
       catch{Notify.failure("Oops something went wrong")}
}
  async  getSearchMovies(searchQuery) {
        try { 
        const {data} =await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${searchQuery}`);
        this.page += 1;
        return data ; 
        }
        catch{Notify.failure("Oops something went wrong")}
}

  // async getGanres() {
  //   try {
  //     const { data } = await axios.get(
  //       `https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY}`
  //     );
  //     console.log(data);

  //   } catch {Notify.failure("something went wrong")}
  // }
  async getMainMovie(searchQuery) {
    try {
      const { data } = await axios.get(
        `https://api.themoviedb.org/3/movie/${searchQuery}?api_key=${API_KEY}`
      );
      const base = await {
        title: data.original_title,
        genres: data.genres,
        id: data.id,
        date: data.release_date,
        poster: data.poster_path,
        about: data.overview,
        populanty: data.popularity,
        vote: data.vote_average,
        votes: data.vote_count,
      };
      return base;
    } catch {Notify.failure("Oops something went wrong")}
  }
  resetPage() {
    this.page = 1;
  }
  get query() {
    return this.searchQuery;
  }
  set query(newQuery) {
    this.searchQuery = newQuery;
  }
    }
  