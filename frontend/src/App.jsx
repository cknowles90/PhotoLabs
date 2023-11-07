import React from 'react';
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
    handleLike,
    onClosePhotoDetailsModal,
    handleTopicClick,
    displayAlert,
  } = useApplicationData();

  // JSX structure of PhotoLabs;
  return (
    <div className="App">
      {/* Render 'TopNavigationBar' component with prop: likedPhotos */}
      {/* <TopNavigationBar likedPhotos={likedPhotos} /> */}
      <TopNavigationBar 
        likedPhotos={state.likedPhotos} 
        topics={state.topics} 
        handleLike={handleLike}
        handleTopicClick={handleTopicClick} 
        toggleLikedPhotos={state.toggleLikedPhotos} 
        showedLikedPhotos={state.showLikedPhotos}
        displayAlert={displayAlert}
        updateToFavPhotoIds={updateToFavPhotoIds}
      />

      {/* Render 'HomeRoute' compoenent with props: */}
      <HomeRoute 
        photos={state.photos} 
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
