import React, { useState } from 'react';
import '../styles/TopNavigationBar.scss'

import TopicList from './TopicList';
import FavBadge from './FavBadge';
import useApplicationData from 'hooks/useApplicationData';

// 'TopNavigationBar' component;
const TopNavigationBar = () => {
  // Destructures 'likedPhotos"s' value from 'state' returned by 'useApplicationData' Hook
  const {
    state: { likedPhotos },
  } = useApplicationData();

  // JSX structure for 'TopNavigationBar' component;
  return (
    <div className="top-nav-bar">
      {/*  Renders the PhotoLabs logo */}
      <span className="top-nav-bar__logo">PhotoLabs</span>
      {/* Renders 'TopicList' component */}
      <TopicList />
      <div className="fav-badge">
        {/* Renders 'FavBadge' component & displaysAlert if 'likedPhotos' array is not empty */}
        <FavBadge displayAlert={likedPhotos.length > 0} />
      </div>
    </div>
  );
};

export default TopNavigationBar;