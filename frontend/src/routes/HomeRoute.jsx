import React from 'react';

import "../styles/HomeRoute.scss";

import PhotoList from '../components/PhotoList';


const HomeRoute = (props) => {
  
  const { 
    toggleModal, 
    modalPhotoData, 
    toggleFavourites, 
    photoData, 
    dispatchActionSelectedPhoto,
    isFavourited,
    selectedTopic,
  } = props;
  
  const filteredPhotos = 
    selectedTopic !== null
    ? photoData.filter((photo) => photo.topicId === selectedTopic)
    : photoData;
  
  return (
    <div className="home-route">

      <div className="photo-list">
        <PhotoList 
          photoData={props.photoData} 
          filteredPhotos={filteredPhotos}
          toggleFavourites={toggleFavourites}
          toggleModal={toggleModal}
          modalPhotoData={modalPhotoData}
          dispatchActionSelectedPhoto={dispatchActionSelectedPhoto}
          isFavourited={isFavourited}
        />
      </div>
    </div>
  );
};

export default HomeRoute;
