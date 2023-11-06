import React, { useState } from 'react';
import './App.scss';

import TopNavigationBar from 'components/TopNavigationBar';

import HomeRoute from 'routes/HomeRoute';
import PhotoDetailsModal from 'routes/PhotoDetailsModal';

import useApplicationData from 'hooks/useApplicationData';

// Main Component of PhotoLabs;
const App = () => {
  // Destructures the values returned from 'useApplicationData' Hook;
  const {
    state,
    onPhotoSelect,
    updateToFavPhotoIds,
    onClosePhotoDetailsModal,
    photos,
  } = useApplicationData();

  console.log('3 - App Component: state', state);
  console.log('4 - App Component: likedPhotos', state.likedPhotos);
  console.log('5 - App Componenet: selectedPhotos', state.selectedPhoto);
  console.log('6 - App Componenet: photos', photos);

  // JSX structure of PhotoLabs;
  return (
    <div className="App">
      {/* Render 'TopNavigationBar' component with prop: likedPhotos */}
      {/* <TopNavigationBar likedPhotos={likedPhotos} /> */}
      <TopNavigationBar likedPhotos={state.likedPhotos} />

      {/* Render 'HomeRoute' compoenent with props: */}
      <HomeRoute 
        photos={photos} 
        likedPhotos={state.likedPhotos} 
        updateToFavPhotoIds={updateToFavPhotoIds}
        onPhotoSelect={onPhotoSelect}
        onCLosePotoDetailsModal={onClosePhotoDetailsModal}
        selectedPhoto={state.selectedPhoto}
      />

      {/* Render 'PhotoDetailsModal' component if 'state.selectedPhoto' & 'state.isModalOpen' === true */}
      {state.selectedPhoto && state.isModalOpen && (
        <PhotoDetailsModal 
          onClosePhotoDetailsModal={onClosePhotoDetailsModal} 
          selectedPhoto={state.selectedPhoto}
          onPhotoSelect={state.onPhotoSelect}
          likedPhotos={state.likedPhotos}
        />
      )}
    </div>
  );
};

export default App;
