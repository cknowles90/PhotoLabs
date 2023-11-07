import React from "react";
import "../styles/PhotoListItem.scss";

import PhotoFavButton from "./PhotoFavButton";

// 'PhotoListItem' component;
const PhotoListItem = (props) => {
  // Function :  'handleImageClick';
  const handleImageClick = () => {
    // when 'photo' is selected, 'selectedPhoto' is stored with 'photo' information;
    props.onPhotoSelect(props.photo);
  };
  
  // JSX structure for 'PhotoListItem' component;
  return (
    <div className="photo-list__item">
      {/* Render 'PhotoFavButton' component with prop: 'displayAlert' */}
      <PhotoFavButton 
        displayAlert={false} 
        selectedPhoto={props.selectedPhoto} 
        handleLike={props.handleLike} 
        isLiked={props.isLiked} 
        updateToFavPhotoIds={props.updateToFavPhotoIds}
      />

      {/* Image element for 'photo' */}
      <img 
        className="photo-list__image" 
        src={props.photo.urls.regular} 
        alt={`Image ${props.photo.id}`} 
        onClick={handleImageClick}
      />
      
      <div className="photo-list__container">
        {/* 'Users-profile' - 'image' & 'name' + 'location' - 'city' & 'country' */}
        <img className="photo-list__user-profile" src={props.photo.user.profile} alt={`User Profile ${props.photo.id}`} />
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


