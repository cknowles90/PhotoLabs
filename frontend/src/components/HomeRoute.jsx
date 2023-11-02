import React from 'react';
import "../styles/HomeRoute.scss";

import PhotoList from './PhotoList';


const HomeRoute = () => {
  return (
    <div className="home-route">
      <PhotoList />
    </div>

  )
}

export default HomeRoute;