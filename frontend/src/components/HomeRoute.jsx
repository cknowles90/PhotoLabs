import React, {} from 'react';
import "../styles/HomeRoute.scss";

import PhotoList from './PhotoList';


const HomeRoute = ({ photos, likedPhotos, setLikedPhotos, onPhotoClick }) => {
// console.log('likedPhotos HR', likedPhotos);
  console.log('Value of onPhotoClick prop in HomeRoute', onPhotoClick);

  return (
    <div className="home-route">
      <PhotoList 
        photos={photos} 
        likedPhotos={likedPhotos} 
        setLikedPhotos={setLikedPhotos} 
        onPhotoClick={onPhotoClick} 
      />
    </div>
  );
};

export default HomeRoute;