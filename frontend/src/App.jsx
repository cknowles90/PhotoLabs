import React from 'react';
import './App.scss';

import TopNavigationBar from 'components/TopNavigationBar';
import HomeRoute from 'components/HomeRoute';

import photos from 'mocks/photos';
import topics from 'mocks/topics';


const App = () => {
  return (
    <div className="App">
      <TopNavigationBar topics={topics} />
      <HomeRoute photos={photos} />
    </div>
  );
};

export default App;
