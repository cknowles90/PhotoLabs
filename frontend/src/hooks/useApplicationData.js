import { useReducer, useEffect } from 'react';
// import axios from 'axios';

const initialState = {
  likedPhotos: [],
  isModalOpen: false,
  toggleLikedPhotos: false,
  modalPhotos: [],
  selectedPhoto: null,
  photos: [],
  topics: [],
  selectedPhotosTopic: null,
  handleFavBadgeClick: () => {},
};

const actionTypes = {
  SELECT_PHOTO: 'SELECT_PHOTO',
  TOGGLE_MODAL: 'TOGGLE_MODAL',
  TOGGLE_LIKED_PHOTOS: 'TOGGLE_LIKED_PHOTOS',
  UPDATE_FAVOURITE: 'UPDATE_FAVOURITE',
  SET_PHOTO_DATA: 'SET_PHOTO_DATA',
  SET_TOPICS_DATA: 'SET_TOPICS_DATA',
  SET_PHOTOS_TOPIC_DATA: 'SET_PHOTOS_TOPIC_DATA',
};

const appReducer = (state, action) => {
  switch (action.type) {
    case actionTypes.SET_PHOTOS_TOPIC_DATA:
      return { 
        ...state, 
        selectedPhotosTopic: 
        action.payload 
      };
    case actionTypes.SET_TOPICS_DATA:
      return { 
        ...state, 
        topics: 
        action.payload 
      };
    case actionTypes.SET_PHOTO_DATA:
      return { 
        ...state, 
        photos: 
        action.payload 
      };
    case actionTypes.SELECT_PHOTO:
      return { 
        ...state, 
        selectedPhoto: 
        action.photo, 
        isModalOpen: true 
      };
    case actionTypes.TOGGLE_MODAL:
      return { 
        ...state, 
        isModalOpen: 
        !state.isModalOpen 
      };
    case actionTypes.UPDATE_FAVOURITE:
      if (action.photo && action.photo.id) {
        const likedPhotos = state.likedPhotos.slice();
        const photoIndex = likedPhotos.findIndex((likedPhotos) => likedPhoto.id === action.photo.id);
        if (photoIndex !== -1) {
          likedPhotos.splice(photoIndex, 1);
        } else {
          likedPhotos.push(action.photo);
        }
          // If 'likedPhotos' is already liked, remove from 'likedPhotos';
        return { 
          ...state, 
          likedPhotos,
        };
      }
    case actionTypes.TOGGLE_LIKED_PHOTOS:
      return {
        ...state,
        showLikedPhotos: !state.showLikedPhotos };

    default: 
    return state;
  }
};

const useApplicationData = () => {
  const [state, dispatch] = useReducer(appReducer, initialState);


  const onPhotoSelect = (photo) => {
    dispatch({ type: actionTypes.SELECT_PHOTO, photo });
  };

  const onClosePhotoDetailsModal = () => {
    dispatch({ type: actionTypes.TOGGLE_MODAL });
  };

  const updateToFavPhotoIds = (photo) => {
    dispatch({ type: actionTypes.UPDATE_FAVOURITE, photo });
  };

  const getPhotosByTopic = (topicId) => {
    dispatch({ type: actionTypes.SET_PHOTOS_TOPIC_DATA, payload: topicId});
  };

  const onTopicSelect = (topicId) => {
    dispatch({ type: actionTypes.SET_PHOTOS_TOPIC_DATA, payload: topicId });
  };

  const toggleLikedPhotos = () => {
    dispatch({ type: actionTypes.TOGGLE_LIKED_PHOTOS });
  };

  const handleFavBadgeClick = () => {
    dispatch({ type: actionTypes.TOGGLE_LIKED_PHOTOS});
  };

  useEffect(() => {
    fetch("http://localhost:8001/api/photos")
      .then((response) => response.json())
      .then((data) => dispatch({ type: actionTypes.SET_PHOTO_DATA, payload: data }))
      .catch((error) => {
        console.error('Error fetching photos:', error);
      });
  }, []);

  useEffect(() => {
    fetch("http://localhost:8001/api/topics")
      .then((response) => response.json())
      .then((data) => dispatch({ type: actionTypes.SET_TOPICS_DATA, payload: data }))
      .catch((error) => {
        console.error('Error fetching topics:', error);
      })
  }, []);

  useEffect(() => {
    if (state.selectedPhotosTopic) {
      fetch(`http://localhost:8001/api/topics/photos/${state.selectedPhotosTopic}`)
      .then((response) => response.json())
      .then((data) => dispatch({ type: actionTypes.SET_PHOTOS_TOPIC_DATA, payload: data}))
      .catch((error) => {
        console.error('Error fetching photos topics:', error);
      })
    }
  }, [state.selectedPhotosTopic]);

  useEffect(() => {
    if (state.toggleLikedPhotos) {
      fetch(`http://localhost:8001/api/photos/${state.toggleLikedPhotos}`)
      .then((response) => response.json())
      .then((data) => dispatch({ type: actionTypes.TOGGLE_LIKED_PHOTOS, payload: data}))
      .catch((error) => {
        console.error('Error fetching liked photos:', error);
      })
    } else {
      fetch(`http://localhost:8001/api/photos`)
      .then((response) => response.json())
      .then((data) => dispatch({ type: actionTypes.SET_PHOTO_DATA, payload: data }))
      .catch((error) => {
        console.error('Error fetching photos:', error);
      })
    }
  }, [state.toggleLikedPhotos]);

  useEffect(() => {
    if (state.showLikedPhotos) {
      fetch(`http://localhost:8001/${likedPhotos}`)
      .then((response) => response.json())
      .then((data) => dispatch({ type: actionTypes.TOGGLE_LIKED_PHOTOS, payload: data}))
      .catch((error) => {
        console.error('Error fetching liked photos:', error);
      })
    } else {
      fetch(`http://localhost:8001/api/photos`)
      .then((response) => response.json())
      .then((data) => dispatch({ type: actionTypes.SET_PHOTO_DATA, payload: data }))
      .catch((error) => {
        console.error('Error fetching photos:', error);
      })
    }
  }, [state.showLikedPhotos]);

  return {
    state,
    onPhotoSelect,
    updateToFavPhotoIds,
    onClosePhotoDetailsModal,
    onTopicSelect,
    handleFavBadgeClick,
    toggleLikedPhotos,
    topics: state.topics,
    photos: state.photos,
    selectedPhotosTopic: state.selectedPhotosTopic,
  };
};

export default useApplicationData;




// if (action.photo && action.photo.id) {
//   if (state.likedPhotos.some((likedPhotos) => likedPhotos.id === action.photo.id)) {
//     // If 'likedPhotos' is already liked, remove from 'likedPhotos';
//     return { 
//       ...state, 
//       likedPhotos: state.likedPhotos.filter((likedPhoto) => likedPhoto.id !== action.photo.id)
//     };
//   } else {
//     // If 'photo' is not liked, add to 'likedPhotos';
//     return { ...state, likedPhotos: [...state.likedPhotos, action.photo] };
//   }
// }



// const [isLiked, setIsLiked] = useState(false);

// // Function :  'handleLike';
// const handleLike = () => {
//   // Toggles 'isLiked' state;
//   setIsLiked(!isLiked);
//   // Updates the 'isLiked' 'photo/s' in the 'useApplicationData"s 'state' using 'updateToFavPhotoIds' function; 
//   props.updateToFavPhotoIds(props.selectedPhoto);
// };



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


