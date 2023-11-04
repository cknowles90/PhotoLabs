import React from 'react';
import '../styles/PhotoList.scss';

import PhotoListItem from './PhotoListItem';


const PhotoList = ({ photos, likedPhotos, setLikedPhotos }) => {
  const displayAlert = likedPhotos.length > 0;
  console.log('likedPhotos', likedPhotos);

  return (
    <div className="photo-list">
      {photos.map((photo) => (
        <PhotoListItem key={photo.id} likedPhotos={likedPhotos} setLikedPhotos={setLikedPhotos} photo={photo} displayAlert={displayAlert}/>
      ))}
    </div>
  );
};

export default PhotoList