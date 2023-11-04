import React from 'react';
import '../styles/PhotoList.scss';

import PhotoListItem from './PhotoListItem';


const PhotoList = ({ photos, likedPhotos, setLikedPhotos, onPhotoClick }) => {
  console.log('Value of onPhotoClick prop in PhotoList', onPhotoClick)

  return (
    <div className="photo-list">
      {photos.map((photo) => (
        <PhotoListItem 
          key={photo.id} 
          likedPhotos={likedPhotos} 
          setLikedPhotos={setLikedPhotos} 
          photo={photo} 
          onPhotoClick={onPhotoClick} 
        />
      ))}
    </div>
  );
};

export default PhotoList