import React from "react";
import "../styles/PhotoListItem.scss";

import PhotoFavButton from "./PhotoFavButton";
import useApplicationData from "hooks/useApplicationData";

// 'PhotoListItem' component;
const PhotoListItem = () => {
  const {
    state: { photos, selectedPhoto, likedPhotos },
    onPhotoSelect,
  } = useApplicationData();

  console.log('9 - PhotoListItem: likedPhotos', likedPhotos);
  console.log('10 - PhotoListItem: selectedPhoto', selectedPhoto);
  console.log('11 - PhotoListItem: photos', photos);

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
        src={selectedPhoto.urls.regular} 
        alt={`Image ${selectedPhoto.id}`} 
        onClick={handleImageClick}
      />
      
      <div className="photo-list__container">
        {/* 'Users-profile' - 'image' & 'name' + 'location' - 'city' & 'country' */}
        <img className="photo-list__user-profile" src={selectedPhoto.user.profile} alt={`User Profile ${selectedPhoto.id}`} />
        <div className="user-list__user-info">
          <p>{selectedPhoto.user.name}</p>
          <p className="photo-list__user-location">
            {`${selectedPhoto.location.city}, ${selectedPhoto.location.country}`}
          </p>
        </div>
      </div>
    </div>
  );
};

export default PhotoListItem;


