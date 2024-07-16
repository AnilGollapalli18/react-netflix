import {
    FETCH_MOVIES_REQUEST,
    FETCH_MOVIES_SUCCESS,
    FETCH_MOVIES_FAILURE,
  } from '../Actions/MovieActions';
  
  const initialState = {
    loading: false,
    moviesByGenre: {},
    error: '',
  };
  
  const movieReducer = (state = initialState, action) => {
    switch (action.type) {
      case FETCH_MOVIES_REQUEST:
        return {
          ...state,
          loading: true,
        };
      case FETCH_MOVIES_SUCCESS:
        return {
          ...state,
          loading: false,
          moviesByGenre: {
            ...state.moviesByGenre,
            [action.payload.genre]: action.payload.movies,
          },
          error: '',
        };
      case FETCH_MOVIES_FAILURE:
        return {
          ...state,
          loading: false,
          error: action.payload,
        };
      default:
        return state;
    }
  };
  
  export default movieReducer;
  