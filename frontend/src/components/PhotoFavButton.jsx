import React, { useState } from 'react';
import '../styles/PhotoFavButton.scss';

import FavIcon from './FavIcon';


function PhotoFavButton({ photoId, likedPhotos, setLikedPhotos, displayAlert }) {
  const [isLiked, setIsLiked] = useState(false);
  console.log('displayAlert PFB', displayAlert);
  const handleLike = () => {
    setIsLiked(!isLiked);
    setLikedPhotos(photoId);
  };


  return (
    <div className="photo-list__fav-icon" onClick={handleLike}>
      <div className="photo-list__fav-icon-svg">
          <FavIcon selected={isLiked} displayAlert={displayAlert}/>
      </div>
    </div>
  );
};

export default PhotoFavButton;