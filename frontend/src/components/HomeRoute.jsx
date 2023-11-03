import React, { useState } from 'react';
import "../styles/HomeRoute.scss";

import PhotoList from './PhotoList';

import photos from 'mocks/photos';


const HomeRoute = ({ photos }) => {
  const [likedPhotos, setLikedPhotos] = useState([]);

  const addToLiked = (photoId) => {
    if (!likedPhotos.includes(photoId)) {
        setLikedPhotos([...setLikedPhotos, photoId]);
    }
  };

  const removeFromLiked = (photoId) => {
    const updatedLikes = likedPhotos.filter((id) => id != photoId);
    setLikedPhotos(updatedLikes);
  };

  return (
    <div className="home-route">
      <PhotoList photos={photos} />
    </div>

  )
}

export default HomeRoute;