import React, {} from 'react';
import FavIcon from './FavIcon';

import '../styles/FavBadge.scss';

const FavBadge = (props) => {

  return (
    <div className='fav-badge'>      
      <FavIcon selected={true} displayAlert={props.isFavourited.length > 0} /> 
    </div>
  ); 
};

export default FavBadge;