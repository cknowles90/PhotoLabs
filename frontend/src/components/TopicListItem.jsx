import React from "react";
import "../styles/TopicListItem.scss";


// 'TopicListItem' component;
const TopicListItem = ({ topic }) => {
  
  // JSX structure for 'TopicListItem' component;
  return (
    <div className="topic-list__item">
      <span>{topic.title}</span>
    </div>
  );
};

export default TopicListItem;
