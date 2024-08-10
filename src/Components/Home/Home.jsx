import React from 'react';
import NewAndNotable from './NewAndNotable';
import './Home.css';
import EditorialSpotlight from './EditorialSpotlight';
import LatestVideos from './LatestVideos';
import Movies from './Movies';
import TVShows from './TVShows';
import LatestNews from './LatestNews';
import Footer from './Footer';

const Home = () => {
  return (
    <div className="home">
        <NewAndNotable />
        <EditorialSpotlight />
        <LatestVideos />
        <Movies />
        <TVShows />
        <LatestNews />
        <Footer />
    </div>
  );
};

export default Home;