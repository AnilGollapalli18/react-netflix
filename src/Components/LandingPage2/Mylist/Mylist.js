
import React from 'react';
import './Mylist.css'

const Mylist = ({ favorites }) => {
  return (
    <div className='mylist' id='mylist'>
      <h1>My List</h1>
      <div className="movie-list">
        {favorites.map((movie, index) => (
          <div key={index} className="movie-item">
            <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} className="movies-img" />
            <h3 className='mylist-title'>{movie.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Mylist;
