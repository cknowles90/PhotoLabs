import React from 'react';
import '../styles/PhotoList.scss';

import PhotoListItem from './PhotoListItem';


// 'PhotoList' component;
const PhotoList = (props) => {
  // Destructure values returned from 'useApplicationData' Hook;
  const {
    selectedPhoto, 
    likedPhotos, 
    photos,
    onPhotoSelect, 
    updateToFavPhotoIds,
    isModalOpen,
  } = props

  // JSX structure of 'PhotoList' component;
  return (
    <div className="photo-list">
      {/* Map over 'photos' array & Render a 'PhotoListItem' for each 'photo' */}
      {photos.map((photo) => (
        <PhotoListItem 
        key={photo.id} 
        photo={photo}
        likedPhotos={likedPhotos} 
        updateToFavPhotoIds={updateToFavPhotoIds}
        isModalOpen={isModalOpen}
        selectedPhoto={selectedPhoto}
        onPhotoSelect={onPhotoSelect} />
      ))}
    </div>
  );
};

export default PhotoList