import React from "react";
import "../styles/PhotoListItem.scss";

import PhotoFavButton from "./PhotoFavButton";


// 'PhotoListItem' component;
const PhotoListItem = (props) => {
  const {
    photo,
    likedPhotos,
    updateToFavPhotoIds,
    onPhotoSelect,
    isModalOpen,
    selectedPhoto,
  } = props;

  // Function :  'handleImageClick';
  const handleImageClick = () => {
    // when 'photo' is selected, 'selectedPhoto' is stored with 'photo' information;
    onPhotoSelect(selectedPhoto);
  };
  
  // JSX structure for 'PhotoListItem' component;
  return (
    <div className="photo-list__item">
      {/* Render 'PhotoFavButton' component with prop: 'displayAlert' */}
      <PhotoFavButton displayAlert={false} />

      {/* Image element for 'photo' */}
      <img 
        className="photo-list__image" 
        src={photo.urls.regular} 
        alt={`Image ${photo.id}`} 
        onClick={handleImageClick}
      />
      
      <div className="photo-list__container">
        {/* 'Users-profile' - 'image' & 'name' + 'location' - 'city' & 'country' */}
        <img className="photo-list__user-profile" src={photo.user.profile} alt={`User Profile ${photo.id}`} />
        <div className="user-list__user-info">
          <p>{photo.user.name}</p>
          <p className="photo-list__user-location">
            {`${photo.location.city}, ${photo.location.country}`}
          </p>
        </div>
      </div>
    </div>
  );
};

export default PhotoListItem;


