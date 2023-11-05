import React from 'react';
import '../styles/PhotoDetailsModal.scss';

import closeSymbol from '../assets/closeSymbol.svg';

import PhotoFavButton from '../components/PhotoFavButton';
import PhotoList from '../components/PhotoList';
import useApplicationData from 'hooks/useApplicationData';

// 'PhotoDetailsModal' component;
const PhotoDetailsModal = () => {
  // Destructure values returned from 'useApplicationData' Hook;
  const {
    state: { selectedPhoto, likedPhotos },
    onClosePhotoDetailsModal
  } = useApplicationData();
  
  // JSX structure for 'PhotoDetailsModal' component;
  return (
   <div className="photo-details-modal">
     {/* Close button & 'X' symbol */}
     <button className="photo-details-modal__close-button" onClick={onClosePhotoDetailsModal}>
      <img src={closeSymbol} alt="close symbol" />
    </button>
     <div className="photo-details-modal__images">
       {/* Like button & the selected 'photo'*/}
       <PhotoFavButton displayAlert={false} />
       <img className="photo-details-modal__image" 
        src={selectedPhoto.urls.full} 
        alt={`Image ${selectedPhoto.id}`} />
        <div className="photo-details-modal__photographer-details">
         {/* 'Photographers-profile' - 'image' & 'name' */}
         <img className="photo-details-modal__photographer-profile" 
          src={selectedPhoto.user.profile} 
          alt={`User Profile ${selectedPhoto.id}`} />
         <div className="photo-details-modal__photograper-info">
            {selectedPhoto.user.name}
           <div className="photo-details-modal__photographer-location">
             {/* 'Photographers-location' - 'city' & 'country'*/}
             {selectedPhoto.location.city}, {selectedPhoto.location.country}
           </div>
         </div>
       </div>
      </div>
     <div className="photo-details-modal__header">Related Photos:</div>
     <div className="photo-details-modal__images">
       {/* Render 'PhotoList' component with 'related-photos' & 'likedPhotos */}
       <PhotoList 
         photos={Object.values(selectedPhoto.similar_photos)} 
         likedPhotos={likedPhotos} 
         displayAlert={false} />
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
   