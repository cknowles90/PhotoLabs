import React from 'react';
import '../styles/PhotoList.scss';

import PhotoListItem from './PhotoListItem';
import photos from '../mocks/photos';


const PhotoList = () => {
  const photos

  return (
    <div className="photo-list">
      {photos.map((photo) => (
        <PhotoListItem key={photo.id} photo={photo} />
      ))}
    </div>
  );
};

export default PhotoList