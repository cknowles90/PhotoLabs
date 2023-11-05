import React, { useState } from 'react';
import '../styles/PhotoFavButton.scss';

import FavIcon from './FavIcon';
import useApplicationData from 'hooks/useApplicationData';


function PhotoFavButton() {
  const {
    state: { selectedPhoto, likedPhotos },
    updateToFavPhotoIds,
  } = useApplicationData();

  const [isLiked, setIsLiked] = useState(false);

  const handleLike = () => {
    setIsLiked(!isLiked);
    updateToFavPhotoIds(selectedPhoto);
  };

  return (
    <div className="photo-list__fav-icon" onClick={handleLike}>
      <div className="photo-list__fav-icon-svg">
          <FavIcon selected={isLiked} displayAlert={false}/>
      </div>
    </div>
  );
};

export default PhotoFavButton;