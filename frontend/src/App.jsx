import React, { useState } from 'react';
import './App.scss';

import TopNavigationBar from 'components/TopNavigationBar';

import HomeRoute from 'routes/HomeRoute';
import PhotoDetailsModal from 'routes/PhotoDetailsModal';

import useApplicationData from 'hooks/useApplicationData';

import photos from 'mocks/photos';

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

  console.log('App Component: state', state);
  console.log('App Component: likedPhotos', state.likedPhotos);
  console.log('App Componenet: selectedPhotos', state.selectedPhoto);
  console.log('App Componenet: photos', photos);

  // JSX structure of PhotoLabs;
  return (
    <div className="App">
      {/* Render 'TopNavigationBar' component with prop: likedPhotos */}
      <TopNavigationBar likedPhotos={state.likedPhotos} />

      {/* Render 'HomeRoute' compoenent with props: */}
      <HomeRoute 
        photos={photos} 
        likedPhotos={state.likedPhotos} 
        updateToFavPhotoIds={updateToFavPhotoIds}
        onPhotoSelect={onPhotoSelect}
      />
      {/* Render 'PhotoDetailsModal' component if 'state.selectedPhoto' & 'state.isModalOpen' === true */}
      {state.selectedPhoto && state.isModalOpen && (
        <PhotoDetailsModal 
          onClosePhotoDetailsModal={onClosePhotoDetailsModal} 
          selectedPhoto={state.selectedPhoto}
          // likedPhotos={state.likedPhotos}
        />
      )}
    </div>
  );
};

export default App;
