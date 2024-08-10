import React from 'react';
import './EditorialSpotlight.css';
import pic1 from '../../Assets/aaka.png'; // Example import
import pic2 from '../../Assets/aaka.png'; // Example import
import pic3 from '../../Assets/aaka.png';

const EditorialSpotlight = () => {
  const spotlightItems = [
    {
      id: 1,
      image: pic1,
      title: 'August 2024 Movie Preview',
      author: 'Kelth Klimbell',
      description: 'Get details on all of the notable films debuting in August, including the latest Allen sequel and a big-screen...',
      tag: 'movie'
    },
    {
      id: 2,
      image: pic2,
      title: 'The 15 Best Ryan Reynolds Movies',
      author: 'Nick Hyman',
      description: 'We reveal the 15 best-reviewed movie titles in the Ryan Reynolds filmography, ranked by Metascore.',
      tag: 'movie'
    },
    {
      id: 3,
      image: pic3,
      title: 'The 15 Best Hugh Jackman Movies',
      author: 'Nick Hyman',
      description: 'We rank the 15 best-reviewed movies starring Hugh Jackman.',
      tag: 'movie'
    },
    // Add more items as needed
  ];

  return (
    <div className="editorial-spotlight">
      <h2>Editorial Spotlight</h2>
      <div className="spotlight-items">
        {spotlightItems.map((item) => (
          <div key={item.id} className="spotlight-card">
            <img src={item.image} alt={item.title} className="spotlight-image" />
            <div className="spotlight-content">
              <h3>{item.title}</h3>
              <p>{item.author}</p>
              <p>{item.description}</p>
              <span className="spotlight-tag">{item.tag}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EditorialSpotlight;
