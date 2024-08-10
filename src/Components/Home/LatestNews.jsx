// src/components/LatestNews/LatestNews.jsx
import React from 'react';
import './LatestNews.css';

const newsItems = [
  {
    id: 1,
    title: 'DVD/Blu-ray Releases: New & Upcoming',
    author: 'Jason Dietz',
    description: 'Find a list of new movie and TV releases on DVD and Blu-ray (updated weekly) as well as a...',
    tag: 'movie',
  },
  {
    id: 2,
    title: '2024 Movie Release Calendar',
    author: 'Jason Dietz',
    description: 'Find a schedule of release dates for every movie coming to theaters, VOD, and streaming throughout 2024 and...',
    tag: 'movie',
  },
  {
    id: 3,
    title: 'Notable Video Game Releases: New and Upcoming',
    author: 'Jason Dietz',
    description: 'Find release dates and scores for every major upcoming and recent video game release for all platforms,...',
    tag: 'game',
  },
  {
    id: 4,
    title: 'What to Watch on Peacock Right Now',
    author: 'Jason Dietz',
    description: 'Get a list of the best movies and TV shows recently added (and coming soon) to the Peacock...',
    tag: 'tv show',
  },
  {
    id: 5,
    title: 'The 15 Best Ryan Reynolds Movies',
    author: 'Nick Hyman',
    description: 'We reveal the 15 best-reviewed movie titles in the Ryan Reynolds filmography, ranked by Metascore.',
    tag: 'movie',
  },
  {
    id: 6,
    title: 'The 15 Best Hugh Jackman Movies',
    author: 'Nick Hyman',
    description: 'We rank the 15 best-reviewed movies starring Hugh Jackman.',
    tag: 'movie',
  },
  {
    id: 7,
    title: 'What to Watch on Prime Video Right Now',
    author: 'Jason Dietz',
    description: 'Get a list of the best movies and TV shows recently added (and coming soon) to Amazon\'s Prime Video,...',
    tag: 'tv show',
  },
  {
    id: 8,
    title: 'What to Watch on Paramount+ Right Now',
    author: 'Jason Dietz',
    description: 'Find a list of the best movies and TV shows recently added (and coming soon) to Paramount+ With Showtime, plus...',
    tag: 'tv show',
  },
  {
    id: 9,
    title: 'What to Watch on Max Right Now',
    author: 'Jason Dietz',
    description: 'Get a list of the best movies and TV shows recently added (and coming soon) to Max--plus all of the titles...',
    tag: 'tv show',
  },
  {
    id: 10,
    title: 'What to Watch on Netflix Right Now',
    author: 'Jason Dietz',
    description: 'Get a list of the best movies and TV shows recently added (and coming soon) to Netflix, updated frequently.',
    tag: 'tv show',
  },
  {
    id: 11,
    title: 'What to Watch on Hulu Right Now',
    author: 'Jason Dietz',
    description: 'Get a list of the best movies and TV shows recently added (and coming soon) to Hulu, updated frequently.',
    tag: 'tv show',
  },
  {
    id: 12,
    title: 'What to Watch on Disney+ Right Now',
    author: 'Jason Dietz',
    description: 'Get a list of the best movies and TV shows recently added (and coming soon) to Disney\'s streaming service,...',
    tag: 'tv show',
  },
];

const LatestNews = () => {
  return (
    <div className="latest-news">
      <h2>Latest News</h2>
      <div className="news-items">
        {newsItems.map((item) => (
          <div key={item.id} className="news-card">
            <h3>{item.title}</h3>
            <p>{item.author}</p>
            <p>{item.description}</p>
            <span className="news-tag">{item.tag}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LatestNews;
