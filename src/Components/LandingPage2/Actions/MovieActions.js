// import axios from 'axios';

// export const FETCH_MOVIES_REQUEST = 'FETCH_MOVIES_REQUEST';
// export const FETCH_MOVIES_SUCCESS = 'FETCH_MOVIES_SUCCESS';
// export const FETCH_MOVIES_FAILURE = 'FETCH_MOVIES_FAILURE';


// const API_KEY = 'd6694073a682813d4198b40849f1e5ef';
// const BASE_IMAGE_URL = 'https://image.tmdb.org/t/p/w500';


// export const fetchMoviesRequest = () => ({
//   type: FETCH_MOVIES_REQUEST,
// });

// export const fetchMoviesSuccess = (genre, movies) => ({
//   type: FETCH_MOVIES_SUCCESS,
//   payload: { genre, movies },
// });

// export const fetchMoviesFailure = (error) => ({
//   type: FETCH_MOVIES_FAILURE,
//   payload: error,
// });

// export const fetchMoviesByGenre = (genreId, genreName) => {
//   return async (dispatch) => {
//     dispatch(fetchMoviesRequest());
//     try {
//       const response = await axios.get(`https://api.themoviedb.org/3/discover/movie`, {
//         params: {
//           api_key: API_KEY,
//           with_genres: genreId,
//         },
//       });
//       const moviesImagePath = response.data.results.map(movie => ({
//         ...movie,
//         poster_path: `${BASE_IMAGE_URL}${movie.poster_path}`,
//       }));
//       dispatch(fetchMoviesSuccess(genreName, moviesImagePath));
//     } catch (error) {
//       dispatch(fetchMoviesFailure(error.message));
//     }
//   };
// };




export const FETCH_MOVIES_REQUEST = 'FETCH_MOVIES_REQUEST';
export const FETCH_MOVIES_SUCCESS = 'FETCH_MOVIES_SUCCESS';
export const FETCH_MOVIES_FAILURE = 'FETCH_MOVIES_FAILURE';

const API_ENDPOINT = 'https://api.themoviedb.org/3'; 
const API_KEY = 'd6694073a682813d4198b40849f1e5ef'; 

export const fetchMoviesByGenre = (genreId, genreName) => {
  return async (dispatch) => {
    dispatch({ type: FETCH_MOVIES_REQUEST });
    try {
      const response = await fetch(`${API_ENDPOINT}/discover/movie?api_key=${API_KEY}&with_genres=${genreId}`);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      dispatch({
        type: FETCH_MOVIES_SUCCESS,
        payload: { genre: genreName, movies: data.results },
      });
    } catch (error) {
      console.error('Fetch error:', error);
      dispatch({ type: FETCH_MOVIES_FAILURE, payload: error.message });
    }
  };
};

export const fetchMoviesForAllGenres = () => {
  return async (dispatch) => {
    dispatch({ type: FETCH_MOVIES_REQUEST });

    const genres = [
      {
        page : 1,
        results : [],
        total_pages : 0,
        total_results : 0
      },
      { id: 28, name: 'Action' },
      { id: 35, name: 'Comedy' },
      { id: 18, name: 'Drama' },
      { id: 10751, name: 'Family' },
      { id: 10749, name: 'Romance' },
      { id: 27, name: 'Horror' },
      { id: 878, name: 'Science Fiction' },
      { id: 10770,name: 'TV Movie' },
      { id: 53, name: 'Thriller' },
      { id: 16, name: 'Animation' },
      { id: 99, name: 'Documentary' },
    ];

    try {
      const promises = genres.map((genre) =>
        fetch(`${API_ENDPOINT}/discover/movie?api_key=${API_KEY}&with_genres=${genre.id}`).then((response) => {
          if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
          }
          return response.json().then((data) => ({
            genre: genre.name,
            movies: data.results,
          }));
        })
      );

      const results = await Promise.all(promises);

      results.forEach((result) => {
        dispatch({
          type: FETCH_MOVIES_SUCCESS,
          payload: { genre: result.genre, movies: result.movies },
        });
      });
    } catch (error) {
      console.error('Fetch error', error);
      dispatch({ type: FETCH_MOVIES_FAILURE, payload: error.message });
    }
  };
};

