import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import Home from './Components/Home/Home'
import Movies from './Pages/Movies';
import TVShows from './Pages/TVshows';
import News from './Pages/News';
import Blogs from './Pages/Blogs';
import Reviews from './Pages/Reviews';
import NewAndNotable from './Components/Home/NewAndNotable';
import Screenplay from './Pages/Screenplay';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/tvshows" element={<TVShows />} />
          <Route path="/news" element={<News />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/reviews" element={<Reviews />} />
          <Route path="/screenplay" element={<Screenplay />} />
          <Route path="/" element={<NewAndNotable />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
