import React, { useCallback, useState } from 'react';

import FavIcon from './FavIcon';
import FavBadge from './FavBadge';
import '../styles/PhotoFavButton.scss';

function PhotoFavButton() {
  const [isLiked, setIsLiked] = useState(false);

  const handleLike = () => {
    setIsLiked(!isLiked);
  };

  return (
    <div className="photo-list__fav-icon">
      <div className="photo-list__fav-icon-svg">
        {isLiked ? (
          <FavIcon displayAlert={isLiked} selected={isLiked} onClick={handleLike}/>
        ) : ( 
          <FavBadge isFavPhotoExist={isLiked} onClick={handleLike}/>
        )}
      </div>
    </div>
  );
}

export default PhotoFavButton;