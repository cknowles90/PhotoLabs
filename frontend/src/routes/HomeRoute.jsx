import React, {} from 'react';
import "../styles/HomeRoute.scss";

import PhotoList from '../components/PhotoList';

// 'HomeRoute' component;
const HomeRoute = (props) => {
  // Destructure values returned from 'useApplicationData' Hook;

  const {
    photos,
    likedPhotos,
    updateToFavPhotoIds,
    onPhotoSelect,
    isModalOpen,
    selectedPhoto,
  } = props;

  // JSX structure for 'HomeRoute' component
  return (
    <div className="home-route">
      <PhotoList 
        photos={photos} 
        likedPhotos={likedPhotos} 
        updateToFavPhotoIds={updateToFavPhotoIds}
        isModalOpen={isModalOpen}
        selectedPhoto={selectedPhoto}
        onPhotoSelect={onPhotoSelect}
        />
    </div>
  );
};

export default HomeRoute;




// const HomeRoute = ({ photos, likedPhotos, setLikedPhotos, onPhotoClick }) => {