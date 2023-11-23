import React from 'react';
import '../styles/TopNavigationBar.scss'

import TopicList from './TopicList';
import FavBadge from './FavBadge';



const TopNavigationBar = (props) => {
  const { getPhotosByTopic, topics, selectedTopic, isFavourited } = props;

  return (
    <div className="top-nav-bar">
      <span 
        className="top-nav-bar__logo" 
        onClick={() => getPhotosByTopic}
      >
        PhotoLabs
      </span>
      <TopicList 
        topics={topics} 
        getPhotosByTopic={getPhotosByTopic}
        selectedTopic={selectedTopic}
      />
      <div className="fav-badge">
        <FavBadge 
          isFavourited={isFavourited}
        />
      </div>
    </div>
  );
};

export default TopNavigationBar;