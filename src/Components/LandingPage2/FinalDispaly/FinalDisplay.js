// import React from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import GenreList from '../GenreLi/GenreLi';
// import MovieList from '../MovieLi/MovieLi';
// import { fetchMoviesByGenre } from '../Actions/MovieActions';
// import './FinalDisplay.css'

// const FinalDisplay = () => {
//   const dispatch = useDispatch();
//   const { loading, moviesByGenre, error } = useSelector((state) => state);

//   const handleSelectGenre = (genreId, genreName) => {
//     dispatch(fetchMoviesByGenre(genreId, genreName));
//   };

//   return (
//     <div className='finaldisplay'>
//       <h1 className='finaldisplay-h1'>Movie List by Genre</h1>
//       <GenreList onSelectGenre={handleSelectGenre} />
//       {loading && <p>Loading...</p>}
//       {error && <p>Error: {error}</p>}
//       {Object.keys(moviesByGenre).map((genre) => (
//         <div key={genre} className='genrelist'>
//         <h2>{genre}</h2>
//           <MovieList movies={moviesByGenre[genre]} />
//         </div>
//       ))}
//     </div>
//   );
// };

// export default FinalDisplay;



import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import MovieList from '../MovieLi/MovieLi';
import { fetchMoviesForAllGenres } from '../Actions/MovieActions';
import './FinalDisplay.css';
import Mylist from '../Mylist/Mylist';

const FinalDisplay = () => {
  const dispatch = useDispatch();
  const [favorites, setFavorites] = useState([])

  const loading = useSelector((state) => state.loading);
  const moviesByGenre = useSelector((state) => state.moviesByGenre);
  const error = useSelector((state) => state.error);

  useEffect(() => {
    dispatch(fetchMoviesForAllGenres());
  }, [dispatch]);

  const addToFavorite = (movie) => {
    setFavorites([...favorites, movie])
  }
  return (
    <div className='finaldisplay'>
      <h1 className='finaldisplay-h1'>Movie List by Genre</h1>
      {loading && <p>Loading...</p>}
      {error && <p className='finaldispaly-error'>Error: {error}</p>}
      <Mylist favorites={favorites}/>
      {Object.keys(moviesByGenre).map((genre) => (
        <div key={genre} className='genrelist'>
          <h2 className='genrelist-h2 '>{genre}</h2>
          <MovieList movies={moviesByGenre[genre]} addToFavorite={addToFavorite} />
        </div>
      ))}
    </div>
  );
};

export default FinalDisplay;
