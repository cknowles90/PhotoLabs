import React, { useState } from 'react';
import '../styles/PhotoFavButton.scss';

import FavIcon from './FavIcon';
import useApplicationData from 'hooks/useApplicationData';


// 'PhotoFavButton' component;
function PhotoFavButton() {

  // Destructure values from 'useApplicationData' Hook;
  const {
    state: { selectedPhoto, likedPhotos },
    updateToFavPhotoIds,
  } = useApplicationData();

  // Defines a local 'state' - 'isLiked' to track if a 'photo' 'isLiked' or not;
  const [isLiked, setIsLiked] = useState(false);

  // Function :  'handleLike';
  const handleLike = () => {
    // Toggles 'isLiked' state;
    setIsLiked(!isLiked);
    // Updates the 'isLiked' 'photo/s' in the 'useApplicationData"s 'state' using 'updateToFavPhotoIds' function; 
    updateToFavPhotoIds(selectedPhoto);
  };

  // JSX structure for 'PhotoFavButton' component;
  return (
    <div className="photo-list__fav-icon" onClick={handleLike}>
      <div className="photo-list__fav-icon-svg">
        {/* Renders 'FavIcon' component with props: 'isLiked' & 'displayAlert' */}
        <FavIcon selected={isLiked} displayAlert={false}/>
      </div>
    </div>
  );
};

export default PhotoFavButton;