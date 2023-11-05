import { useState } from 'react';

// import photos from 'mocks/photos';

const useApplicationData = () => {
  const [state, setState] = useState({
    likedPhotos: [],
    isModalOpen: false,
    selectedPhoto: null,
    photos: [],
  });

  console.log('State and Data in useApplicationData:', state);

  const onPhotoSelect = (photo) => {
    setState((prev) => ({...prev, selectedPhoto: photo, isModalOpen: true }));
  };

  const updateToFavPhotoIds = (photo) => {
    setState((prev) => {
      if (prev.likedPhotos.some((likedPhotos) => likedPhotos.id === photo.id)) {
        return { ...prev, likedPhotos: prev.likedPhotos.filter((likedPhoto) => likedPhoto.id !== photo.id) };
      } else {
        return { ...prev, likedPhotos: [...prev.likedPhotos, photo] };
      }
    });
  };

  const onClosePhotoDetailModal = () => {
    setState((prev) => ({ ...prev, isModalOpen: false }));
  };

  return {
    state,
    onPhotoSelect,
    updateToFavPhotoIds,
    onClosePhotoDetailModal,
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