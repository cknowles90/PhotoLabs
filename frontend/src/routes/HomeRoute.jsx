import React, {} from 'react';
import "../styles/HomeRoute.scss";

import PhotoList from '../components/PhotoList';
import useApplicationData from 'hooks/useApplicationData';

// 'HomeRoute' component;
const HomeRoute = () => {
  // Destructure values returned from 'useApplicationData' Hook;

  const {
    state: { photos, likedPhotos },
    onPhotoSelect,
    updateToFavPhotoIds,
    onClosePhotoDetailsModal
  } = useApplicationData();

  // JSX structure for 'HomeRoute' component
  return (
    <div className="home-route">
      <PhotoList 
        photos={photos} 
        likedPhotos={likedPhotos} 
        updateToFavPhotoIds={updateToFavPhotoIds}
        onPhotoSelect={onPhotoSelect}
        displayAlert={false}
        />
    </div>
  );
};

export default HomeRoute;




// const HomeRoute = ({ photos, likedPhotos, setLikedPhotos, onPhotoClick }) => {