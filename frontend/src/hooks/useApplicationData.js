import { useState } from 'react';

import photos from 'mocks/photos';

// React Hook :  useApplicationData;
const useApplicationData = () => {
  // Initialize 'state' Hook with useState;
  const [state, setState] = useState({
    // Holds various different properties;
    likedPhotos: [], 
    isModalOpen: false,
    selectedPhoto: null,
    photos: []
  });

  console.log('State and Data in useApplicationData:', state);
  console.log('Photos Data in useApplicationData:', state.photos);

  // Function :  'onPhotoSelect' - takes a 'photo' object as an array as an argument;
  const onPhotoSelect = (photo) => {
    // Update 'state', creates a new object with the 'selectedPhotos':'photo' and 'isModalOpen':true;
    setState((prev) => ({...prev, selectedPhoto: photo, isModalOpen: true }));
  };

  // Function : 'updateToFavPhotoIds' - takes a 'photo' object as an argument;
  const updateToFavPhotoIds = (photo) => {
    // Update 'state' based on;
    setState((prev) => {
      // If 'photo' is already in the 'likedPhotos' array;
      if (prev.likedPhotos.some((likedPhotos) => likedPhotos.id === photo.id)) {
        // If 'likedPhotos' is already liked, remove from 'likedPhotos';
        return { ...prev, likedPhotos: prev.likedPhotos.filter((likedPhoto) => likedPhoto.id !== photo.id) };
      } else {
        // If 'photo' is not liked, add to 'likedPhotos';
        return { ...prev, likedPhotos: [...prev.likedPhotos, photo] };
      }
    });
  };

  // Function :  'onClosePhotoDetailModal;
  const onClosePhotoDetailModal = () => {
    // Closes the 'photo-details-modal', sets 'isModalOpen': false;
    setState((prev) => ({ ...prev, isModalOpen: false }));
  };

  // Returns 'state' + functions for use as Hooks in multiple/different components;
  return {
    state,
    onPhotoSelect,
    updateToFavPhotoIds,
    onClosePhotoDetailModal,
    photos,
  };
};


export default useApplicationData;

/*

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

*/