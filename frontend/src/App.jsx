import React, { useState } from 'react';
import './App.scss';

import TopNavigationBar from 'components/TopNavigationBar';
import HomeRoute from 'components/HomeRoute';

import photos from 'mocks/photos';


const App = () => {
  const [isFavPhotoExist, setIsFavPhotoExist] = useState(false);

  const handleLikeClicked = () => {
    setIsFavPhotoExist(true);
  };

  return (
    <div className="App">
      <TopNavigationBar isFavPhotoExist={isFavPhotoExist} onclick={handleLikeClicked} />
      <HomeRoute photos={photos} isFavPhotoExist={isFavPhotoExist} onclick={handleLikeClicked} />
    </div>
  );
};

export default App;
