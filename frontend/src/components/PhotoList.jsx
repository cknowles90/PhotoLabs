import React from 'react';
import '../styles/PhotoList.scss';

import PhotoListItem from './PhotoListItem';


const PhotoList = ({ photoData, toggleFavourites, dispatchActionSelectedPhoto, isFavourited, toggleModal }) => {

  return (
    <div className="photo-list">
      {photoData && photoData.map((photo) => (
        <PhotoListItem 
          key={photo.id} 
          photo={photo}
          toggleFavourites={toggleFavourites} 
          toggleModal={toggleModal} 
          isFavourited={isFavourited}
          dispatchActionSelectedPhoto={dispatchActionSelectedPhoto}
        />
      ))}
    </div>
  );
};

export default PhotoList