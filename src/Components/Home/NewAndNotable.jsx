// src/Components/NewAndNotable/NewAndNotable.jsx
import React, { useRef } from 'react';
import './NewAndNotable.css';

import raayan from '../../Assets/NewAndNotable/raayanresz.jpg';
import deadpool from '../../Assets/NewAndNotable/deadpool.png';
import indian2 from '../../Assets/NewAndNotable/indian2.png';
import teenz from '../../Assets/NewAndNotable/teenz.png';
import goatlife from '../../Assets/NewAndNotable/goatlife.png';
import kalki from '../../Assets/NewAndNotable/kalki.png';

const notableItems = [
  {
    id: 1,
    image: deadpool,
    title: 'Title 1',
    description: 'Description for title 1',
    metascore: 56,
    reviewCount: 58,
    scoreCategory: 'Mixed or Average',
  },
  {
    id: 2,
    image: raayan,
    title: 'Title 2',
    description: 'Description for title 2',
    metascore: 73,
    reviewCount: 13,
    scoreCategory: 'Generally Favorable',
  },
  {
    id: 3,
    image: indian2,
    title: 'Title 3',
    description: 'Description for title 3',
    metascore: 80,
    reviewCount: 8,
    scoreCategory: 'Generally Favorable',
  },
  {
    id: 4,
    image: teenz,
    title: 'Title 4',
    description: 'Description for title 4',
    metascore: 66,
    reviewCount: 26,
    scoreCategory: 'Generally Favorable',
  },
  {
    id: 5,
    image: goatlife,
    title: 'Title 5',
    description: 'Description for title 5',
    metascore: 66,
    reviewCount: 26,
    scoreCategory: 'Generally Favorable',
  },
  {
    id: 6,
    image: kalki,
    title: 'Title 6',
    description: 'Description for title 6',
    metascore: 66,
    reviewCount: 26,
    scoreCategory: 'Generally Favorable',
  },
  // Add more items as needed
];

const NewAndNotable = () => {
  const notableContainerRef = useRef(null);

  const scrollLeft = () => {
    notableContainerRef.current.scrollBy({ left: -300, behavior: 'smooth' });
  };

  const scrollRight = () => {
    notableContainerRef.current.scrollBy({ left: 300, behavior: 'smooth' });
  };

  return (
    <div className="notable-section">
      <h2>New and Notable</h2>
      <div className="notable-navigation">
        <button onClick={scrollLeft} className="scroll-button left-button">{'<'}</button>
        <button onClick={scrollRight} className="scroll-button right-button">{'>'}</button>
      </div>
      <div className="notable-container" ref={notableContainerRef}>
        {notableItems.map((item) => (
          <div key={item.id} className="notable-card">
            <img src={item.image} alt={item.title} className="notable-image" />
            <div className="notable-info">
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              <div className="notable-rating">
                <span className={`rating-badge rating-${item.metascore > 60 ? 'good' : item.metascore > 40 ? 'average' : 'bad'}`}>
                  {item.metascore}
                </span>
                <span className="review-text">{item.scoreCategory}</span>
                <div className="review-count">Based on {item.reviewCount} Critic Reviews</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewAndNotable;
