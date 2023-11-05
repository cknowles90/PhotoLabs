import React from 'react';
import '../styles/PhotoDetailsModal.scss';

import closeSymbol from '../assets/closeSymbol.svg';

import PhotoFavButton from '../components/PhotoFavButton';
import PhotoList from '../components/PhotoList';
import useApplicationData from 'hooks/useApplicationData';


const PhotoDetailsModal = () => {
  const {
    state: { selectedPhoto, likedPhotos },
    onClosePhotoDetailsModal,
  } = useApplicationData();
  
  return (
    <div className="photo-details-modal">
    <button className="photo-details-modal__close-button" onClick={onClosePhotoDetailsModal}>
      <img src={closeSymbol} alt="close symbol" />
    </button>
    <div className="photo-details-modal__images">
      <PhotoFavButton displayAlert={false} />
      <img className="photo-details-modal__image" src={selectedPhoto.urls.full} alt={`Image ${selectedPhoto.id}`} />
      <div className="photo-details-modal__photographer-details">
        <img className="photo-details-modal__photographer-profile" src={selectedPhoto.user.profile} alt={`User Profile ${selectedPhoto.id}`} />
        <div className="photo-details-modal__photograper-info">
          {selectedPhoto.user.name}
            <div className="photo-details-modal__photographer-location">
              {selectedPhoto.location.city}, {selectedPhoto.location.country}
            </div>
        </div>
      </div>
  </div>
  <div className="photo-details-modal__header">Related Photos:</div>
  <div className="photo-details-modal__images">
    <PhotoList photos={Object.values(selectedPhoto.similar_photos)} 
      likedPhotos={likedPhotos} displayAlert={false} />
      </div>  
    </div>
  );
};

export default PhotoDetailsModal;


// const PhotoDetailsModal = ({ onCloseModal, onPhotoClick, selectedPhoto, likedPhotos, setLikedPhotos, displayAlert }) => {
// likedPhotos={likedPhotos} 
// setLikedPhotos={setLikedPhotos} 
// displayAlert={displayAlert}

// setLikedPhotos={setLikedPhotos} 
// onPhotoClick={onPhotoClick}
   