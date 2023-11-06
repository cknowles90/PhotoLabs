import React, { useState } from 'react';
import '../styles/TopNavigationBar.scss'

import TopicList from './TopicList';
import FavBadge from './FavBadge';

// 'TopNavigationBar' component;
const TopNavigationBar = (props) => {

  // JSX structure for 'TopNavigationBar' component;
  return (
    <div className="top-nav-bar">
      {/*  Renders the PhotoLabs logo */}
      <span className="top-nav-bar__logo">PhotoLabs</span>
      {/* Renders 'TopicList' component */}
      <TopicList />
      <div className="fav-badge">
        {/* Renders 'FavBadge' component & displaysAlert if 'likedPhotos' array is not empty */}
        <FavBadge displayAlert={props.likedPhotos.length > 0} />
      </div>
    </div>
  );
};

export default TopNavigationBar;