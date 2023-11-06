import React from "react";
import "../styles/TopicList.scss";

import TopicListItem from "./TopicListItem";

import topics from '../mocks/topics';

// 'TopicList' component;
const TopicList = () => {
  // JSX structure for 'TopicList' component;
  return (
    <div className="top-nav-bar__topic-list">
      {/* Maps over 'topics' array - Renders a 'TopicListItem' component for each */}
      {topics.map((topic) => (
        <TopicListItem key={topic.id} topic={topic} />
      ))}
    </div>
  );
};

export default TopicList;
