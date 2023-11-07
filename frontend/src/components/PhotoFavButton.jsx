import React from 'react';
import '../styles/PhotoFavButton.scss';

import FavIcon from './FavIcon';

// 'PhotoFavButton' component;
function PhotoFavButton(props) {
  // JSX structure for 'PhotoFavButton' component;
  return (
    <div className="photo-list__fav-icon" onClick={props.handleLike}>
      <div className="photo-list__fav-icon-svg">
        {/* Renders 'FavIcon' component with props: 'isLiked' & 'displayAlert' */}
        <FavIcon selected={props.isLiked} displayAlert={false} />
      </div>
    </div>
  );
};

export default PhotoFavButton;