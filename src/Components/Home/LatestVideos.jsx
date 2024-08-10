import React, { useState } from 'react';
import './LatestVideos.css';
import { FaPlay } from 'react-icons/fa';
import videoFile from '../../Assets/videos/cineparadisobg.mp4'; // Adjust the path as necessary

const LatestVideos = () => {
  const videoItems = [
    {
      id: 1,
      title: 'Video 1',
      description: 'Description for video 1',
      videoSrc: videoFile, // Example video file
    },
    {
      id: 2,
      title: 'Video 2',
      description: 'Description for video 2',
      videoSrc: videoFile, // Example video file
    },
    {
      id: 3,
      title: 'Video 3',
      description: 'Description for video 3',
      videoSrc: videoFile, // Example video file
    },
    {
      id: 4,
      title: 'Video 4',
      description: 'Description for video 4',
      videoSrc: videoFile, // Example video file
    },
    {
      id: 5,
      title: 'Video 5',
      description: 'Description for video 5',
      videoSrc: videoFile, // Example video file
    },
  ];

  const [currentVideo, setCurrentVideo] = useState(videoItems[0]);

  return (
    <div className="latest-videos">
      <h2>Latest Videos</h2>
      <div className="video-container">
        <div className="main-video-card">
          <video controls autoPlay muted className="video">
            <source src={currentVideo.videoSrc} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="video-content">
            <h3>{currentVideo.title}</h3>
            <p>{currentVideo.description}</p>
          </div>
        </div>
        <div className="side-video-cards">
          {videoItems.map((item) => (
            <div key={item.id} className="video-card" onClick={() => setCurrentVideo(item)}>
              <div className="video-thumbnail-container">
                <video muted className="video-thumbnail">
                  <source src={item.videoSrc} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
                <FaPlay className="play-icon" />
              </div>
              <div className="video-info">
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LatestVideos;
