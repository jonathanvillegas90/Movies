export function addMovieFavorite(payload) {
  // payload: es la pelicula que queremos agregar
  return { type: "ADD_MOVIE_FAVORITE", payload };
}

export function getMovies(titulo) {
  return function (dispatch) {
    return fetch("http://www.omdbapi.com/?apikey=e409da27&s=" + titulo)
      .then((response) => response.json())
      .then((json) => {
        // se pasan los datos adquiridos en el fetch
        dispatch({ type: "GET_MOVIES", payload: json });
      });
  };
}

export function getMovieDetail(idMovie) {
  return function (dispatch) {
    return fetch(`http://www.omdbapi.com/?apikey=e409da27&i=${idMovie}`)
      .then((response) => response.json())
      .then((data) => {
        // se pasan los datos adquiridos en el fetch solo cambia el nombre, puede ser cualquiera
        dispatch({ type: "GET_MOVIE_DETAILS", payload: data });
      });
  };
}

export function removeMovieFavorite(idMovie) {
  return {
    type: "REMOVE_MOVIE_FAVORITE",
    payload: idMovie,
  };
}
