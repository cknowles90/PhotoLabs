import React from 'react';
import '../styles/PhotoFavButton.scss';

import FavIcon from './FavIcon';

function PhotoFavButton(props) {

  return (
    <div className="photo-list__fav-icon" onClick={() => props.toggleFavourites(props.photoId)}>
      <div className="photo-list__fav-icon-svg">
        <FavIcon selected={props.isFavourited} displayAlert={false} />
      </div>
    </div>
  );
};

export default PhotoFavButton;