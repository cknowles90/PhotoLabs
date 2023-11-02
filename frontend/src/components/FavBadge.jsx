import React from 'react';
import FavIcon from './FavIcon';

import '../styles/FavBadge.scss';

const FavBadge = ({ isFavPhotoExist, onClick }) => {
  return (
    <div className='fav-badge' onClick={onClick}>
      <FavIcon displayAlert={!!isFavPhotoExist} />
    </div>
  ) 
};

export default FavBadge;