// import { useState } from 'react';

// import photos from 'mocks/photos';

// // React Hook :  useApplicationData;
// const originalApp = () => {
//   const [likedPhotos, setLikedPhotos] = useState([]);
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [selectedPhoto, setSelectedPhoto] = useState(null);
  
//   // console.log('App likedPhotos', likedPhotos);
//   // console.log('App isModalOpen', isModalOpen);
  
//   const handleLikeClicked = (photo) => {
//     if (likedPhotos.some((likedPhoto) => likedPhoto.id === photo.id) ) {
//       return setLikedPhotos(likedPhotos.filter((likedPhoto) => likedPhoto.id !== photo.id));
//     }
//     setLikedPhotos([...likedPhotos, photo]);
//   };
  
//   console.log('App handleLikeClicked', handleLikeClicked);
  
//   const handleOpenModal = (photo) => {
//     // console.log('Opening modal...');
//     setIsModalOpen(true);
//     setSelectedPhoto(photo);
//   };
  
//   const handleCloseModal = () => {
//     setIsModalOpen(false);
//   };

//   return { 
//     likedPhotos, 
//     isModalOpen, 
//     selectedPhoto,
//     photos
//   }
// }
  
//   // console.log('Value of onPhotoClick in App.jsx', handleOpenModal);

// export default originalApp;
