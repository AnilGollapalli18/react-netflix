
import React, { useState } from 'react';
import './MovieLi.css';

const MovieLi = ({ movies, addToFavorite }) => {
  const [contextMenu, setContextMenu] = useState(null)

  const handleRightClick = (e, movie) => {
    e.preventDefault();
    setContextMenu({
      mouseX: e.clientX - 2,
      mosueY: e.clientY - 4,
      movie: movie
    });
  };

  const handleClose = () => {
    setContextMenu(null)
  };
   
  const handleAddToFavorites = () => {
    addToFavorite(contextMenu.movie);
    handleClose();
  };

  return (
    <div className='movie-li' id='movie'>
      {movies.map((movie) => (
        <div key={movie.id} className='movies-container' onContextMenu={(e) => handleRightClick(e, movie)}>
          <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} className='movies-img' />
          <h3 className='genrestitle-h3'>{movie.title}</h3>
        </div>
      ))}
      {contextMenu && (
        <div className='context-menu'  style={{
          top: contextMenu.mouseY,
          left: contextMenu.mouseX,
        }}>
          <ul>
            <li onClick={handleAddToFavorites}>Add To Favorites</li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default MovieLi;


