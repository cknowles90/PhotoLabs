import React, { useState } from 'react';
import './App.scss';

import TopNavigationBar from 'components/TopNavigationBar';

import HomeRoute from 'routes/HomeRoute';
import PhotoDetailsModal from 'routes/PhotoDetailsModal';

import photos from 'mocks/photos';


const App = () => {
  const [likedPhotos, setLikedPhotos] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  // console.log('App likedPhotos', likedPhotos);
  // console.log('App isModalOpen', isModalOpen);

  const handleLikeClicked = (photo) => {
    if (likedPhotos.some((likedPhoto) => likedPhoto.id === photo.id) ) {
      return setLikedPhotos(likedPhotos.filter((likedPhoto) => likedPhoto.id !== photo.id));
    }
      setLikedPhotos([...likedPhotos, photo]);
  };

  console.log('App handleLikeClicked', handleLikeClicked);

  const handleOpenModal = (photo) => {
    // console.log('Opening modal...');
    setIsModalOpen(true);
    setSelectedPhoto(photo);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  console.log('Value of onPhotoClick in App.jsx', handleOpenModal);

  return (
    <div className="App">
      <TopNavigationBar likedPhotos={likedPhotos} />
      <HomeRoute 
        photos={photos} 
        likedPhotos={likedPhotos} 
        setLikedPhotos={handleLikeClicked}
        onPhotoClick={handleOpenModal}
      />
      {selectedPhoto && isModalOpen && (
        <PhotoDetailsModal 
          onCloseModal={handleCloseModal} 
          selectedPhoto={selectedPhoto}
          setLikedPhotos={setLikedPhotos}
        />
      )}
    </div>
  );
};

export default App;
