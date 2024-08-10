import React, { useRef } from 'react';
import './Movies.css';

import pic1 from '../../Assets/Movies/goatlife.png';
import pic2 from '../../Assets/Movies/indian2.png';
import pic3 from '../../Assets/Movies/kalki.png';
import pic4 from '../../Assets/Movies/01.png';
import pic5 from '../../Assets/Movies/02.png';
import pic6 from '../../Assets/Movies/03.png'

const movieItems = [
  {
    id: 1,
    title: 'Movie 1',
    imageSrc: pic6,
    description: 'Description for movie 1',
    rating: 56,
    reviewText: 'Mixed or Average',
  },
  {
    id: 1,
    title: 'Movie 1',
    imageSrc: pic5,
    description: 'Description for movie 1',
    rating: 56,
    reviewText: 'Mixed or Average',
  },
  {
    id: 1,
    title: 'Movie 1',
    imageSrc: pic4,
    description: 'Description for movie 1',
    rating: 56,
    reviewText: 'Mixed or Average',
  },
  {
    id: 1,
    title: 'Movie 1',
    imageSrc: pic1,
    description: 'Description for movie 1',
    rating: 56,
    reviewText: 'Mixed or Average',
  },
  {
    id: 2,
    title: 'Movie 2',
    imageSrc: pic2,
    description: 'Description for movie 2',
    rating: 42,
    reviewText: 'Mixed or Average',
  },
  {
    id: 3,
    title: 'Movie 3',
    imageSrc: pic3,
    description: 'Description for movie 3',
    rating: 69,
    reviewText: 'Generally Favorable',
  },
  {
    id: 4,
    title: 'Movie 4',
    imageSrc: pic2,
    description: 'Description for movie 4',
    rating: 46,
    reviewText: 'Mixed or Average',
  },
  {
    id: 5,
    title: 'Movie 5',
    imageSrc: pic1,
    description: 'Description for movie 5',
    rating: 38,
    reviewText: 'Generally Unfavorable',
  },
];

const Movies = () => {
  const moviesContainerRef = useRef(null);

  const scrollLeft = () => {
    moviesContainerRef.current.scrollBy({ left: -300, behavior: 'smooth' });
  };

  const scrollRight = () => {
    moviesContainerRef.current.scrollBy({ left: 300, behavior: 'smooth' });
  };

  return (
    <div className="movies-section">
      <h2>Movies</h2>
      <div className="movies-navigation">
        <button onClick={scrollLeft} className="scroll-button left-button">{'<'}</button>
        <button onClick={scrollRight} className="scroll-button right-button">{'>'}</button>
      </div>
      <div className="movies-container" ref={moviesContainerRef}>
        {movieItems.map((movie) => (
          <div key={movie.id} className="movie-card">
            <img src={movie.imageSrc} alt={movie.title} className="movie-image" />
            <div className="movie-info">
              <h3>{movie.title}</h3>
              <p>{movie.description}</p>
              <div className="movie-rating">
                <span className={`rating-badge rating-${movie.rating > 60 ? 'good' : movie.rating > 40 ? 'average' : 'bad'}`}>
                  {movie.rating}
                </span>
                <span className="review-text">{movie.reviewText}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Movies;
