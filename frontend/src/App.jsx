import React from 'react';
import './App.scss';

import TopNavigationBar from 'components/TopNavigationBar';
import HomeRoute from 'routes/HomeRoute';
import PhotoDetailsModal from 'routes/PhotoDetailsModal';
import { useApplicationData } from 'hooks/useApplicationData';


const App = () => {

  const {
    state,
    toggleFavourites,
    toggleModal,
    dispatchActionSelectedPhoto,
    modalPhotoData,
    getTopics,
    getPhotosByTopic,
  } = useApplicationData();

  return (
    <div className="App">
      <TopNavigationBar 
        topics={state.topicData} 
        toggleFavourites={toggleFavourites}
        getTopics={getTopics}
        getPhotosByTopic={getPhotosByTopic}
        isFavourited={state.isFavourited}
      />

      <HomeRoute 
        photoData={state.photoData} 
        isFavourited={state.isFavourited} 
        toggleFavourites={toggleFavourites}
        dispatchActionSelectedPhoto={dispatchActionSelectedPhoto}
        getPhotosByTopic={getPhotosByTopic}
        modalPhotoData={modalPhotoData}
        toggleModal={toggleModal}
      />

      {state.selectedPhoto && state.isModalOpen && (
        <PhotoDetailsModal 
          selectedPhoto={state.selectedPhoto}
          toggleModal={toggleModal}
          toggleFavourites={toggleFavourites}
          isFavourited={state.isFavourited}
        />
      )}
    </div>
  );
};

export default App;
