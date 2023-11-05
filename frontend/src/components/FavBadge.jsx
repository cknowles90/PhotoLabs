import React, {} from 'react';
import FavIcon from './FavIcon';

import '../styles/FavBadge.scss';


// 'FavBadge' component;
const FavBadge = ({ displayAlert }) => {

  // JSX structure for 'FavBadge' component;
  return (
    <div className='fav-badge'>
      {/* Render 'FavIcon' component WITH 'displayAlert' prop: true */}
      <FavIcon displayAlert={displayAlert} selected={true} /> 
    </div>
  ); 
};

export default FavBadge;