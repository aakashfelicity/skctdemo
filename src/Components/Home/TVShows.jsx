// src/components/TVShows/TVShows.jsx
import React, { useRef } from 'react';
import './TVShows.css';

import pic1 from '../../Assets/Movies/goatlife.png';
import pic2 from '../../Assets/Movies/indian2.png';
import pic3 from '../../Assets/Movies/kalki.png';

const tvShowItems = [
  {
    id: 1,
    title: 'TV Show 1',
    imageSrc: pic1,
    description: 'Description for TV show 1',
    rating: 86,
    reviewText: 'Excellent',
  },
  {
    id: 2,
    title: 'TV Show 2',
    imageSrc: pic2,
    description: 'Description for TV show 2',
    rating: 72,
    reviewText: 'Generally Favorable',
  },
  {
    id: 3,
    title: 'TV Show 3',
    imageSrc: pic3,
    description: 'Description for TV show 3',
    rating: 64,
    reviewText: 'Mixed or Average',
  },
  {
    id: 4,
    title: 'TV Show 4',
    imageSrc: pic2,
    description: 'Description for TV show 4',
    rating: 55,
    reviewText: 'Mixed or Average',
  },
  {
    id: 5,
    title: 'TV Show 5',
    imageSrc: pic1,
    description: 'Description for TV show 5',
    rating: 38,
    reviewText: 'Generally Unfavorable',
  },
];

const TVShows = () => {
  const tvShowsContainerRef = useRef(null);

  const scrollLeft = () => {
    tvShowsContainerRef.current.scrollBy({ left: -300, behavior: 'smooth' });
  };

  const scrollRight = () => {
    tvShowsContainerRef.current.scrollBy({ left: 300, behavior: 'smooth' });
  };

  return (
    <div className="tvshows-section">
      <h2>TV Shows</h2>
      <div className="tvshows-navigation">
        <button onClick={scrollLeft} className="scroll-button left-button">{'<'}</button>
        <button onClick={scrollRight} className="scroll-button right-button">{'>'}</button>
      </div>
      <div className="tvshows-container" ref={tvShowsContainerRef}>
        {tvShowItems.map((show) => (
          <div key={show.id} className="tvshow-card">
            <img src={show.imageSrc} alt={show.title} className="tvshow-image" />
            <div className="tvshow-info">
              <h3>{show.title}</h3>
              <p>{show.description}</p>
              <div className="tvshow-rating">
                <span className={`rating-badge rating-${show.rating > 60 ? 'good' : show.rating > 40 ? 'average' : 'bad'}`}>
                  {show.rating}
                </span>
                <span className="review-text">{show.reviewText}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TVShows;
