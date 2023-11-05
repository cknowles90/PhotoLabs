import React, { useState } from 'react';
import './App.scss';

import TopNavigationBar from 'components/TopNavigationBar';

import HomeRoute from 'routes/HomeRoute';
import PhotoDetailsModal from 'routes/PhotoDetailsModal';

import useApplicationData from 'hooks/useApplicationData';

import photos from 'mocks/photos';


const App = () => {
  const {
    state,
    onPhotoSelect,
    updateToFavPhotoIds,
    onClosePhotoDetailsModal,
  } = useApplicationData();

  console.log('App Component: state', state);
  console.log('App Component: likedPhotos', state.likedPhotos);
  console.log('App Component: selectedPhotos', state.selectedPhoto);

  return (
    <div className="App">
      <TopNavigationBar likedPhotos={state.likedPhotos} />
      <HomeRoute 
        photos={photos} 
        likedPhotos={state.likedPhotos} 
        setLikedPhotos={updateToFavPhotoIds}
        onPhotoClick={onPhotoSelect}
      />
      {state.selectedPhoto && state.isModalOpen && (
        <PhotoDetailsModal 
          onCloseModal={onClosePhotoDetailsModal} 
          selectedPhoto={state.selectedPhoto}
          // setLikedPhotos={setLikedPhotos}
        />
      )}
    </div>
  );
};

export default App;
