import React, {} from 'react';
import "../styles/HomeRoute.scss";

import PhotoList from './PhotoList';


const HomeRoute = ({ photos, likedPhotos, setLikedPhotos }) => {
console.log('likedPhotos HR', likedPhotos);
  return (
    <div className="home-route">
      <PhotoList photos={photos} likedPhotos={likedPhotos} setLikedPhotos={setLikedPhotos} />
    </div>

  )
}

export default HomeRoute;