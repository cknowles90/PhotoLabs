import React from 'react';
import '../styles/PhotoList.scss';

import PhotoListItem from './PhotoListItem';
import useApplicationData from 'hooks/useApplicationData';


const PhotoList = () => {
  const {
    state: { selectedPhoto, likedPhotos, photos },
    onPhotoSelect, 
    updateToFavPhotoIds,
  } = useApplicationData();
  
  console.log('PhotoList: photos', photos);
  console.log(`PhotoList: likedPhotos`, likedPhotos);

  return (
    <div className="photo-list">
      {photos.map((photo) => (
        <PhotoListItem key={photo.id} displayAlert={false} />
      ))}
    </div>
  );
};

export default PhotoList