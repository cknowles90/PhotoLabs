import React, { useState } from 'react';
import './App.scss';

import TopNavigationBar from 'components/TopNavigationBar';
import HomeRoute from 'components/HomeRoute';
import PhotoDetailsModal from 'components/PhotoDetailsModal';

import photos from 'mocks/photos';


const App = () => {
  const [likedPhotos, setLikedPhotos] = useState([]);
  const [selectedPhoto, setSelectedPhoto] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleLikeClicked = (photo) => {
    if (likedPhotos.some((likedPhoto) => likedPhoto.id === photo.id) ) {
      return setLikedPhotos(likedPhotos.filter((likedPhoto) => likedPhoto.id !== photo.id));
    }
      setLikedPhotos([...likedPhotos, photo]);
  };

  const handlePhotoClick = (photo) => {
    setSelectedPhoto(photo);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setSelectedPhoto(null);
    setIsModalOpen(false);
  };

  return (
    <div className="App">
      <TopNavigationBar likedPhotos={likedPhotos} />
      <HomeRoute 
        photos={photos} 
        likedPhotos={likedPhotos} 
        setLikedPhotos={handleLikeClicked}
        handlePhotoClick={handlePhotoClick}
      />

      {isModalOpen && selectedPhoto && (
        <PhotoDetailsModal
          photo={selectedPhoto}
          onCloseModal={handleCloseModal}
        />
      )}
    </div>
  );
};

export default App;
