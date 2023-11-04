import React, { useState } from 'react';
import '../styles/TopNavigationBar.scss'

import TopicList from './TopicList';
import FavBadge from './FavBadge';

const TopNavigationBar = ({ likedPhotos }) => {
// console.log('likedPhotos', likedPhotos);

  return (
    <div className="top-nav-bar">
      <span className="top-nav-bar__logo">PhotoLabs</span>
      <TopicList />
      <div className="fav-badge">
        <FavBadge displayAlert={likedPhotos.length > 0} />
      </div>
    </div>
  );
};

export default TopNavigationBar;