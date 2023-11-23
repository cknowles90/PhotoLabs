import React from "react";
import "../styles/TopicListItem.scss";


const TopicListItem = (props) => {
  const { getPhotosByTopic, topic } = props;
  // console.log('props in TopicListItem', props);

  return (
    <div 
      className="topic-list__item" 
      // onClick={getPhotosByTopic}
      onClick={() => getPhotosByTopic(topic.id)}
    >
      <span>{topic.title}</span>
    </div>
  );
};

export default TopicListItem;
