import React from "react";
import "../styles/PhotoListItem.scss";

import PhotoFavButton from "./PhotoFavButton";


const PhotoListItem = ({ photo, likedPhotos, setLikedPhotos, displayAlert }) => {
  return (
  <div className="photo-list__item">
    <PhotoFavButton photoId={photo.id} likedPhotos={likedPhotos} setLikedPhotos={setLikedPhotos} displayAlert={displayAlert} />
    <img 
      className="photo-list__image" 
      src={photo.urls.regular} 
      alt={`Image ${photo.id}`} 
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


