import React from "react";
import "../styles/PhotoListItem.scss";

import PhotoFavButton from "./PhotoFavButton";


const PhotoListItem = ({ photo, likedPhotos, setLikedPhotos, displayAlert, onPhotoClick }) => {
  // console.log('Received props:', photo, likedPhotos, setLikedPhotos, displayAlert);
  console.log('Value of onPhotoClick prop in PhotoListItem:', onPhotoClick);

  const handleImageClick = () => {
    console.log('Image clicked:', photo);
    onPhotoClick(photo);
  };
  
  return (
  <div className="photo-list__item">
    <PhotoFavButton 
      photo={photo} 
      likedPhotos={likedPhotos} 
      setLikedPhotos={setLikedPhotos} 
      displayAlert={displayAlert}
    />
    <img 
      className="photo-list__image" 
      src={photo.urls.regular} 
      alt={`Image ${photo.id}`} 
      onClick={handleImageClick}
    />
    
    <div className="photo-list__container">
      <img 
        className="photo-list__user-profile" 
        src={photo.user.profile} 
        alt={`User Profile ${photo.id}`}
      />

      <div className="user-list__user-info">
        <p>{photo.user.name}</p>
        <p className="photo-list__user-location">{`${photo.location.city}, ${photo.location.country}`}</p>
      </div>
    </div>
  </div>
  );
};

export default PhotoListItem;


