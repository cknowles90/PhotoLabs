import React, { useState } from 'react';
import './App.scss';

import TopNavigationBar from 'components/TopNavigationBar';

import HomeRoute from 'routes/HomeRoute';
import PhotoDetailsModal from 'routes/PhotoDetailsModal';

import originalApp from 'hooks/originalApp';

// import photos from 'mocks/photos';


// Main Component of PhotoLabs;
const App = () => {
  // Destructures the values returned from 'useApplicationData' Hook;
  const {
    likedPhotos, 
    isModalOpen, 
    selectedPhoto,
    onPhotoSelect,
    updateToFavPhotoIds,
    onClosePhotoDetailsModal,
    photos
  } = originalApp();

  // JSX structure of PhotoLabs;
  return (
    <div className="App">
      {/* Render 'TopNavigationBar' component with prop: likedPhotos */}
      <TopNavigationBar likedPhotos={likedPhotos} />

      {/* Render 'HomeRoute' compoenent with props: */}
      <HomeRoute 
        photos={photos} 
        likedPhotos={likedPhotos} 
        updateToFavPhotoIds={updateToFavPhotoIds}
        isModalOpen={isModalOpen}
        selectedPhoto={selectedPhoto}
        onPhotoSelect={onPhotoSelect}
      />
      {/* Render 'PhotoDetailsModal' component if 'state.selectedPhoto' & 'state.isModalOpen' === true */}
      {selectedPhoto && isModalOpen && (
        <PhotoDetailsModal 
          onCloseModal={onClosePhotoDetailsModal} 
          selectedPhoto={selectedPhoto}
          likedPhotos={likedPhotos}
        />
      )}
    </div>
  );
};

export default App;
