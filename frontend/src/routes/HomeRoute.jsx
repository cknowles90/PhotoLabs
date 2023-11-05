import React, {} from 'react';
import "../styles/HomeRoute.scss";

import PhotoList from '../components/PhotoList';
import useApplicationData from 'hooks/useApplicationData';


const HomeRoute = () => {
  const {
    state: { photos, likedPhotos },
    onPhotoSelect,
    updateToFavPhotoIds,
    onClosePhotoDetailsModal,
  } = useApplicationData();
  
  console.log('HomeRoute Component: photos', photos);
  console.log('HomeRoute Component: likedPhotos', likedPhotos)

  return (
    <div className="home-route">
      <PhotoList 
        photos={photos} 
        likedPhotos={likedPhotos} 
        setLikedPhotos={updateToFavPhotoIds} 
        onPhotoClick={onPhotoSelect} 
        displayAlert={false} 
        />
    </div>
  );
};

export default HomeRoute;




// const HomeRoute = ({ photos, likedPhotos, setLikedPhotos, onPhotoClick }) => {