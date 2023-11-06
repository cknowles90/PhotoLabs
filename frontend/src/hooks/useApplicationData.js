import { useReducer, useEffect } from 'react';

// useReducer : 
const initialState = {
  likedPhotos: [],
  isModalOpen: false,
  selectedPhoto: null,
  photos: [],
  topics: [],
};

const actionTypes = {
  SELECT_PHOTO: 'SELECT_PHOTO',
  TOGGLE_MODAL: 'TOGGLE_MODAL',
  UPDATE_FAVOURITE: 'UPDATE_FAVOURITE',
  SET_PHOTO_DATA: 'SET_PHOTO_DATA',
  SET_TOPICS_DATA: 'SET_TOPICS_DATA',
};

const reducer = (state, action) => {
  switch (action.type) {
    case actionTypes.SET_TOPICS_DATA:
      return { ...state, topics: action.payload };
    case actionTypes.SET_PHOTO_DATA:
      return { ...state, photos: action.payload };
    case actionTypes.SELECT_PHOTO:
      return { ...state, selectedPhoto: action.photo, isModalOpen: true };
    case actionTypes.TOGGLE_MODAL:
      return { ...state, isModalOpen: !state.isModalOpen };
    case actionTypes.UPDATE_FAVOURITE:
      if (state.likedPhotos.some((likedPhotos) => likedPhotos.id === action.photo.id)) {
        // If 'likedPhotos' is already liked, remove from 'likedPhotos';
        return { 
          ...state, 
          likedPhotos: state.likedPhotos.filter((likedPhoto) => likedPhoto.id !== action.photo.id)
         };
      } else {
        // If 'photo' is not liked, add to 'likedPhotos';
        return { ...state, likedPhotos: [...state.likedPhotos, action.photo] };
      }

      default: 
      return state;
  }
};

const useApplicationData = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const onPhotoSelect = (photo) => {
    dispatch({ type: actionTypes.SELECT_PHOTO, photo });
  };

  const onClosePhotoDetailsModal = () => {
    dispatch({ type: actionTypes.TOGGLE_MODAL });
  };

  const updateToFavPhotoIds = (photo) => {
    dispatch({ type: actionTypes.UPDATE_FAVOURITE, photo });
  };

  useEffect(() => {
    fetch("http://localhost:8001/api/photos")
      .then((response) => response.json())
      .then((data) => dispatch({ type: actionTypes.SET_PHOTO_DATA, payload: data }));
      // console.log('Fetched photos data:', data);
  }, []);

  useEffect(() => {
    fetch("http://localhost:8001/api/topics")
      .then((response) => response.json())
      .then((data) => dispatch({ type: actionTypes.SET_TOPICS_DATA, payload: data }));
      // console.log('Fetched topics data:', data);
  }, []);

  return {
    state,
    onPhotoSelect,
    updateToFavPhotoIds,
    onClosePhotoDetailsModal,
    topics: state.topics,
    photos: state.photos,
  };
};

export default useApplicationData;


// // React Hook :  useApplicationData;
// const useApplicationData = () => {
//   // Initialize 'state' Hook with useState;
//   const [state, setState] = useState({
//     // Holds various different properties;
//     likedPhotos: [], 
//     isModalOpen: false,
//     selectedPhoto: null,
//     photos: [],
//   });

  // console.log('1 - State and Data in useApplicationData:', state);
  // console.log('2 - Photos Data in useApplicationData:', state.photos);

  // Function :  'onPhotoSelect' - takes a 'photo' object as an array as an argument;
  // const onPhotoSelect = (photo) => {
  //   console.log('photo', photo);
  //   // Update 'state', creates a new object with the 'selectedPhotos':'photo' and 'isModalOpen':true;
  //   setState((prev) => ({...prev, selectedPhoto: photo, isModalOpen: true }));
  // };

  // Function : 'updateToFavPhotoIds' - takes a 'photo' object as an argument;
  // const updateToFavPhotoIds = (photo) => {
  //   // Update 'state' based on;
  //   setState((prev) => {
  //     // If 'photo' is already in the 'likedPhotos' array;
  //     if (prev.likedPhotos.some((likedPhotos) => likedPhotos.id === photo.id)) {
  //       // If 'likedPhotos' is already liked, remove from 'likedPhotos';
  //       return { ...prev, likedPhotos: prev.likedPhotos.filter((likedPhoto) => likedPhoto.id !== photo.id) };
  //     } else {
  //       // If 'photo' is not liked, add to 'likedPhotos';
  //       return { ...prev, likedPhotos: [...prev.likedPhotos, photo] };
  //     }
  //   });
  // };

  // Function :  'onClosePhotoDetailModal;
  // const onClosePhotoDetailsModal = () => {
  //   // Closes the 'photo-details-modal', sets 'isModalOpen': false;
  //   setState((prev) => ({ ...prev, isModalOpen: false }));
  // };

  // Returns 'state' + functions for use as Hooks in multiple/different components;
//   return {
//     state,
//     onPhotoSelect,
//     updateToFavPhotoIds,
//     onClosePhotoDetailsModal,
//     photos,
//   };
// };


