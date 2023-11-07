import React, { useState } from 'react';
import '../styles/PhotoDetailsModal.scss';

import closeSymbol from '../assets/closeSymbol.svg';

import PhotoFavButton from '../components/PhotoFavButton';
import PhotoList from '../components/PhotoList';

// 'PhotoDetailsModal' component;
const PhotoDetailsModal = (props) => {
  
  // JSX structure for 'PhotoDetailsModal' component;
  return (
    <div className="photo-details-modal">
      {/* Close button & 'X' symbol */}
      <button className="photo-details-modal__close-button" onClick={props.onClosePhotoDetailsModal}>
        <img src={closeSymbol} alt="close symbol" />
      </button>
      <div className="photo-details-modal__images">
        {/* Like button & the selected 'photo'*/}
        <PhotoFavButton displayAlert={false} isLiked={props.isLiked} />
        <img className="photo-details-modal__image" 
          src={props.selectedPhoto.urls.full} 
          alt={`Image ${props.selectedPhoto.id}`} />
          <div className="photo-details-modal__photographer-details">
            {/* 'Photographers-profile' - 'image' & 'name' */}
            <img className="photo-details-modal__photographer-profile" 
              src={props.selectedPhoto.user.profile} 
              alt={`User Profile ${props.selectedPhoto.id}`} />
              <div className="photo-details-modal__photograper-info">
                {props.selectedPhoto.user.name}
                <div className="photo-details-modal__photographer-location">
                  {/* 'Photographers-location' - 'city' & 'country'*/}
                  {props.selectedPhoto.location.city}, {props.selectedPhoto.location.country}
                </div>
              </div>
           </div>
        </div>
      <div className="photo-details-modal__header">Related Photos:</div>
      <div className="photo-details-modal__images">
        {/* Render 'PhotoList' component with 'related-photos' & 'likedPhotos */}
        <PhotoList 
          photos={Object.values(props.selectedPhoto.similar_photos)} 
          likedPhotos={props.likedPhotos} 
          displayAlert={false} />
      </div>  
    </div>
  );
};

export default PhotoDetailsModal;
   