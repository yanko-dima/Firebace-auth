import genres from '../data/genres.json';

//Функция возвращает массив объектов жанров по id

function searchGenresById(genre_ids) {
  return genre_ids.map(id => genres.genres.find(g => g.id === id));
}

//Если жанров больше 2, добавляет 3 - Other

function genresAddOthers(genre_ids) {
  let genresItems = searchGenresById(genre_ids);
  if (genresItems.length > 2) {
    let arrey = genresItems.map(item => item.name).slice(0, 2);
    arrey.push('Other');
    return arrey;
  }
  return genresItems.map(item => item.name);
}

export { genresAddOthers };