import React from "react";
import "../styles/PhotoListItem.scss";

import PhotoFavButton from "./PhotoFavButton";
import useApplicationData from "hooks/useApplicationData";


const PhotoListItem = () => {
  
  const {
    state: { selectedPhoto, likedPhotos },
    onPhotoSelect,
  } = useApplicationData();
  
  console.log(`PhotoListItem: likedPhotos`, likedPhotos);
  console.log('PhotoListItem: selectedPhoto', selectedPhoto);

  const handleImageClick = () => {
    onPhotoSelect(selectedPhoto);
  };
  
  return (
    <div className="photo-list__item">
      <PhotoFavButton displayAlert={false} />
      <img 
        className="photo-list__image" 
        src={selectedPhoto.urls.regular} 
        alt={`Image ${selectedPhoto.id}`} 
        onClick={handleImageClick}
      />
      
      <div className="photo-list__container">
        <img className="photo-list__user-profile" src={selectedPhoto.user.profile} alt={`User Profile ${selectedPhoto.id}`} />
        <div className="user-list__user-info">
          <p>{selectedPhoto.user.name}</p>
          <p className="photo-list__user-location">{`${selectedPhoto.location.city}, ${selectedPhoto.location.country}`}</p>
        </div>
      </div>
    </div>
  );
};

export default PhotoListItem;


