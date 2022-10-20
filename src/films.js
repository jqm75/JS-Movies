// Exercise 1: Get the array of all directors
function getAllDirectors(array) { 
  const result = array.map ((movie) => movie.director); //El método map crea un Array nuevo.

  // console.log("EXERCICE 1 ->", result);
  return result;
}

// Exercise 2: Get the films of a certain director
function getMoviesFromDirector(array, director) { //El método filter también crea un nuevo Array.
  const arrayDirector = array.filter ((movie) => movie.director === director)
  
 // console.log("EXERCICE 2 ->", arrayDirector);
  return arrayDirector;
}

// Exercise 3: Calculate the average of the films of a given director
function moviesAverageOfDirector(array, director) {
  const arrayLength = getMoviesFromDirector(array, director);
  const scoreDirector = arrayLength.reduce((total, movie) => {
    total += movie.score;  
    return total;
  }, 0);
  
/*   const scoreDirector = array.reduce((total, movie) => {
    if (movie.director === director) total += movie.score;  
    return total;
  }, 0); */ // <-- Para decir que el valor inicial de "total" es O. total = Acumulador (acc)

  // Calcular media.
  const average = Number((scoreDirector / arrayLength.length).toFixed(2));

  return average;
}

// Exercise 4:  Alphabetic order by title 
function orderAlphabetically(array) {
  
}

// Exercise 5: Order by year, ascending
function orderByYear() {

}

// Exercise 6: Calculate the average of the movies in a category
function moviesAverageByCategory() {

}

// Exercise 7: Modify the duration of movies to minutes
function hoursToMinutes() {

}

// Exercise 8: Get the best film of a year
function bestFilmOfYear() {
  
}



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    getAllDirectors,
    getMoviesFromDirector,
    moviesAverageOfDirector,
    orderAlphabetically,
    orderByYear,
    moviesAverageByCategory,
    hoursToMinutes,
    bestFilmOfYear,
  };
}
