import React from 'react';
import '../styles/PhotoList.scss';

import PhotoListItem from './PhotoListItem';


const PhotoList = ({ photos, likedPhotos, setLikedPhotos }) => {

  return (
    <div className="photo-list">
      {photos.map((photo) => (
        <PhotoListItem key={photo.id} likedPhotos={likedPhotos} setLikedPhotos={setLikedPhotos} photo={photo} />
      ))}
    </div>
  );
};

export default PhotoList