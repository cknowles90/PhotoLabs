import React from 'react';
import '../styles/PhotoList.scss';

import PhotoListItem from './PhotoListItem';

// 'PhotoList' component;
const PhotoList = (props) => {
  // JSX structure of 'PhotoList' component;
  return (
    <div className="photo-list">
      {/* Map over 'photos' array & Render a 'PhotoListItem' for each 'photo' */}
      {props.photos.map((photo) => (
        <PhotoListItem key={photo.id} displayAlert={false} updateToFavPhotoIds={props.updateToFavPhotoIds} photo={photo} onPhotoSelect={props.onPhotoSelect} />
      ))}
    </div>
  );
};

export default PhotoList