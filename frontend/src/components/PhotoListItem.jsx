import React from "react";

import "../styles/PhotoListItem.scss";

import FavBadge from "./FavBadge";
import PhotoFavButton from "./PhotoFavButton";



const PhotoListItem = ({ photo }) => {
  const photos = Array.from(Array(e));

  return (
  <div className="photo-list__item">
    <PhotoFavButton/>
    <img className="photo-list__image" src={photo.imageSource} alt={`Image ${photo.id}`} />
    <div className="photo-list__container">
      <img className="photo-list__user-profile" src={photo.profile} alt={`User Profile ${photo.id}`}/>
        <div className="user-list__user-info">
          <p>{photo.username}</p>
          <p className="photo-list__user-location">{`${photo.location.city}, ${photo.location.country}`}</p>
        </div>
    </div>
  </div>
  );
};

export default PhotoListItem;


