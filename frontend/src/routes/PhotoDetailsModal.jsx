import React from 'react';
import '../styles/PhotoDetailsModal.scss';

import closeSymbol from '../assets/closeSymbol.svg';

import PhotoFavButton from '../components/PhotoFavButton';
import PhotoList from '../components/PhotoList';


const PhotoDetailsModal = (props) => {
  // console.log("selectedPhoto", props.selectedPhoto);
  // console.log("similar_photos", selectedPhoto);
  const { toggleModal, selectedPhoto } = props;

  return (
    <div className="photo-details-modal">
      <button 
        className="photo-details-modal__close-button" 
        onClick={toggleModal}>
        <img src={closeSymbol} alt="close symbol" />
      </button>
      <div className="photo-details-modal__images">
        <PhotoFavButton 
          photoId={selectedPhoto.id}
          isFavourited={props.isFavourited.includes(selectedPhoto.id)} 
          toggleFavourites={props.toggleFavourites}
        />
        <img className="photo-details-modal__image" 
          src={selectedPhoto.urls.full} 
          alt={`Image ${selectedPhoto.id}`}
        />
          <div className="photo-details-modal__photographer-details">
            <img className="photo-details-modal__photographer-profile" 
              src={selectedPhoto.user.profile} 
              alt={`User Profile ${selectedPhoto.id}`} 
            />
            <div className="photo-details-modal__photograper-info">
              {selectedPhoto.user.name}
              <div className="photo-details-modal__photographer-location">
                {selectedPhoto.location.city}, {selectedPhoto.location.country}
              </div>
            </div>
          </div>
        </div>
        <div className="photo-details-modal__header">Similar Photos:</div>
        <div className="photo-details-modal__images">
          <PhotoList 
            photoData={Object.values(selectedPhoto.similar_photos)}
            toggleFavourites={props.toggleFavourites}
            isFavourited={props.isFavourited}
          />
      </div>  
    </div>
  );
};

export default PhotoDetailsModal;
   