import React from 'react';
import '../styles/PhotoList.scss';

import PhotoListItem from './PhotoListItem';
import useApplicationData from 'hooks/useApplicationData';

// 'PhotoList' component;
const PhotoList = () => {
  // Destructure values returned from 'useApplicationData' Hook;
  const {
    state: { selectedPhoto, likedPhotos, photos },
    onPhotoSelect, 
    updateToFavPhotoIds,
  } = useApplicationData();

  console.log('PhotoList: photos', photos);
  console.log('PhotoList: likedPhotos', likedPhotos);

  // JSX structure of 'PhotoList' component;
  return (
    <div className="photo-list">
      {/* Map over 'photos' array & Render a 'PhotoListItem' for each 'photo' */}
      {photos.map((photo) => (
        <PhotoListItem key={photo.id} displayAlert={false} />
      ))}
    </div>
  );
};

export default PhotoList