import React from "react";
import "../styles/TopicList.scss";

import TopicListItem from "./TopicListItem";

// 'TopicList' component;
const TopicList = (props) => {
    // JSX structure for 'TopicList' component;
    return (
      <div className="top-nav-bar__topic-list">
      {/* Maps over 'topics' array - Renders a 'TopicListItem' component for each */}
      {props.topics.map((topic) => (
        <TopicListItem key={topic.id} topic={topic} onClick={() => props.onTopicClick(topic.id)} />
      ))}
    </div>
  );
};

export default TopicList;
