import React from "react";
import "../styles/PhotoListItem.scss";

import PhotoFavButton from "./PhotoFavButton";


const PhotoListItem = (props) => {

  const handleImageClick = () => {
    props.dispatchActionSelectedPhoto(props.photo);
  };

  return (
    <div className="photo-list__item">
      <PhotoFavButton  
        toggleFavourites={() => props.toggleFavourites(props.photo.id)} 
        isFavourited={props?.isFavourited?.includes(props.photo.id)} 
      />
      
      <img 
        className="photo-list__image" 
        src={props.photo.urls.regular}
        alt={`Image ${props.photo.id}`} 
        onClick={handleImageClick}
      />
      
      <div className="photo-list__container">
        <img 
          className="photo-list__user-profile" 
          src={props.photo.user.profile} 
          alt={`User Profile ${props.photo.id}`}
        />
        <div className="user-list__user-info">
          <p>{props.photo.user.name}</p>
          <p className="photo-list__user-location">
            {`${props.photo.location.city}, ${props.photo.location.country}`}
          </p>
        </div>
      </div>
    </div>
  );
};

export default PhotoListItem;


