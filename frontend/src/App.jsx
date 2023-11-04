import React, { useState } from 'react';
import './App.scss';

import TopNavigationBar from 'components/TopNavigationBar';
import HomeRoute from 'components/HomeRoute';

import photos from 'mocks/photos';
// import PhotoDetailsModal from 'components/PhotoDetailsModal';


const App = () => {
  const [likedPhotos, setLikedPhotos] = useState([]);

  const handleLikeClicked = (photoId) => {
    console.log(photoId)
    if (likedPhotos.includes(photoId)) {
      return setLikedPhotos([...likedPhotos.filter((photo) => photo !== photoId )]);
    }
      setLikedPhotos([...likedPhotos, photoId]);
  };

  console.log('likedPhotos in App:', likedPhotos)

  return (
    <div className="App">
      <TopNavigationBar likedPhotos={likedPhotos} />
      <HomeRoute photos={photos} likedPhotos={likedPhotos} setLikedPhotos={handleLikeClicked}/>
      {/* <PhotoDetailsModal /> */}
    </div>
  );
};

export default App;
