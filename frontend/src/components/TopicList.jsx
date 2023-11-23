import React from "react";
import "../styles/TopicList.scss";

import TopicListItem from "./TopicListItem";


const TopicList = (props) => {
  const { getPhotosByTopic, topics } = props;

    return (
      <div className="top-nav-bar__topic-list">
      {topics && topics.map((topic) => (
        <TopicListItem 
          key={topic.id} 
          topic={topic} 
          getPhotosByTopic={getPhotosByTopic}
       />
      ))}
    </div>
  );
};

export default TopicList;
