import React from 'react';
import '../styles/PhotoDetailsModal.scss';

import closeSymbol from '../assets/closeSymbol.svg';

import PhotoFavButton from '../components/PhotoFavButton';
import PhotoList from '../components/PhotoList';


const PhotoDetailsModal = ({ onCloseModal, onPhotoClick, selectedPhoto, likedPhotos, setLikedPhotos, displayAlert }) => {
  // console.log('Selected Photo Data', selectedPhoto);
  return (
    <div className="photo-details-modal">
        <button 
          className="photo-details-modal__close-button" 
          onClick={onCloseModal}
        >
          <img src={closeSymbol} alt="close symbol" />
        </button>
        <div className="photo-details-modal__images">
          <PhotoFavButton 
            likedPhotos={likedPhotos} 
            setLikedPhotos={setLikedPhotos} 
            displayAlert={displayAlert}
          />
          <img 
            className="photo-details-modal__image" 
            src={selectedPhoto.urls.full} 
          />
          <div className="photo-details-modal__photographer-details">
            <img 
              className="photo-details-modal__photographer-profile" 
              src={selectedPhoto.user.profile} 
            />
            <div className="photo-details-modal__photograper-info">
              {selectedPhoto.user.name}
              <div className="photo-details-modal__photographer-location">
                {selectedPhoto.location.city}, {selectedPhoto.location.country}
            </div>
          </div>
        </div>
        <div className="photo-details-modal__header">Similar Photos:</div>
        <div className="photo-details-modal__images">
          <PhotoList 
            photos={Object.values(selectedPhoto.similar_photos)} 
            likedPhotos={likedPhotos} 
            setLikedPhotos={setLikedPhotos} 
            onPhotoClick={onPhotoClick} 
            displayAlert={displayAlert}
          />
        </div>
      </div>
    </div>
  );
};

export default PhotoDetailsModal;