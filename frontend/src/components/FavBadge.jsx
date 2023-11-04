import React, {} from 'react';
import FavIcon from './FavIcon';

import '../styles/FavBadge.scss';

const FavBadge = ({ displayAlert }) => {


  return (
    <div className='fav-badge'>
      <FavIcon displayAlert={displayAlert} selected={true} /> 

    </div>
  ); 
};

export default FavBadge;