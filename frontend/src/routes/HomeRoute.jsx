import React from 'react';
import "../styles/HomeRoute.scss";

import PhotoList from '../components/PhotoList';

// 'HomeRoute' component;
const HomeRoute = (props) => {

  // JSX structure for 'HomeRoute' component
  return (
    <div className="home-route">
      <PhotoList 
        photos={props.photos} 
        likedPhotos={props.likedPhotos} 
        isLiked={props.isLiked}
        updateToFavPhotoIds={props.updateToFavPhotoIds}
        onPhotoSelect={props.onPhotoSelect}
        displayAlert={false}
        selectedPhoto={props.selectedPhoto}
        />
    </div>
  );
};

export default HomeRoute;
