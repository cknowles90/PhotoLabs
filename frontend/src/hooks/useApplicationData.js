import { useReducer, useEffect } from "react";

const initialState = {
  isFavourited: [], 
  photoData: [], 
  topicData: [], 
  isModalOpen: false,
  selectedPhoto: null,
  selectedTopic: null,
};

const ACTIONS = {
  TOGGLE_FAVOURITES: "TOGGLE_FAVOURITES",

  SET_FAVOURITES_FROM_DB: "SET_FAVOURITES_FROM_DB",

  TOGGLE_MODAL: "TOGGLE_MODAL",

  SET_MODAL_PHOTO_DATA: "SET_MODAL_PHOTO_DATA",
  
  SET_PHOTO_DATA: "SET_PHOTO_DATA",
  SET_TOPIC_DATA: "SET_TOPIC_DATA",

  SET_SELECTED_PHOTO: "SET_SELECTED_PHOTO",
  SET_SELECTED_TOPIC: "SET_SELECTED_TOPIC",
  
  GET_PHOTOS_BY_TOPIC: "SET_PHOTOS_BY_TOPIC",
}

const appReducer = (state, action) => {
  switch (action.type) {

    case ACTIONS.TOGGLE_FAVOURITES:
      const photoId = action.payload;

      if (state.isFavourited.includes(photoId)) {
        return {
          ...state,
          isFavourited: state.isFavourited.filter(
            (favouritePhotoId) => favouritePhotoId !== photoId
          ),
        };
      } else {
        return {
          ...state, 
          isFavourited: [...state.isFavourited, photoId],
          displayAlert: true,
        };
      };

    case ACTIONS.SET_FAVOURITES_FROM_DB:
      return {
        ...state,
        favourites: action.payload,
      };

    case ACTIONS.TOGGLE_MODAL:
      console.log("Reducer: Toggling modal");
      return {
        ...state,
        isModalOpen: !state.isModalOpen,
      };

    case ACTIONS.SET_MODAL_PHOTO_DATA:
      return {
        ...state,
        modalPhotoData: action.payload,
      };

    case ACTIONS.SET_PHOTO_DATA:
      return {
        ...state,
        photoData: action.payload,
      };

    case ACTIONS.SET_TOPIC_DATA:
      return {
        ...state,
        topicData: action.payload,
      };

    case ACTIONS.GET_PHOTOS_BY_TOPIC:
      return {
        ...state,
        selectedTopic: action.payload,
      };
        
    case ACTIONS.SET_SELECTED_PHOTO:
      return {
        ...state,
        selectedPhoto: action.payload,
      };

    case ACTIONS.SET_SELECTED_TOPIC:
      return {
        ...state,
        selectedTopic: action.payload,
      };

      default:
        throw new Error(
          `Could not reduce without an action type: ${action.type}`
        );
  }
};

const useApplicationData = () => {
  const [state, dispatch] = useReducer(appReducer, initialState);

  const apiUrl = "http://localhost:8001/api";
  
  const getTopics = async () => {
    try {
      const response = await fetch(`${apiUrl}/topics`);
      if (!response.ok) {
        throw new Error(`Failed to fetch topics, Status: ${response.status}`);
      }
      const data = await response.json();
        dispatch({ type: ACTIONS.SET_TOPIC_DATA, payload: data });
    } catch (error) {
      console.error("Error fetching topics: ", error);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${apiUrl}/photos`);
        const data = await response.json();
        dispatch({ type: ACTIONS.SET_PHOTO_DATA, payload: data });
      } catch (error) {
        console.error("Error fetching photos: ", error);
      }
    };
    
    fetchData();
    getTopics();

    if (state.selectedTopic == null && state.topicData.length > 0) {
      const initialTopic = state.topicData[0];
      dispatch({ type: ACTIONS.SET_SELECTED_TOPIC, payload: initialTopic.id });
    };
  }, []);

  const toggleFavourites = async (photoId) => {
    dispatch({ type: ACTIONS.TOGGLE_FAVOURITES, payload: photoId });
  };

  const toggleModal = () => {
    dispatch({ type: ACTIONS.TOGGLE_MODAL });
  };

  const modalPhotoData = (photoObj) => {
    dispatch({ type: ACTIONS.SET_MODAL_PHOTO_DATA, payload: photoObj });
  };

  const dispatchActionSelectedPhoto = (photoObj) => {
    dispatch({ type: ACTIONS.SET_SELECTED_PHOTO, payload: photoObj });
    toggleModal();
  };
  
  const getPhotosByTopic = async (topicId) => {
    try {
      let endpoint = `${apiUrl}/photos`;

      if (topicId) {
        endpoint = `${apiUrl}/topics/photos/${topicId}`;
      }
      const response = await fetch(endpoint);
      const data = await response.json();
      dispatch({ type: ACTIONS.SET_PHOTO_DATA, payload: data });
      dispatch({ type: ACTIONS.SET_SELECTED_TOPIC, payload: topicId });
    } catch (error) {
      console.error("Error fetching photos:", error);
    }
  };
  
  return {
    state,
    toggleFavourites,
    toggleModal, 
    modalPhotoData,
    getTopics,
    getPhotosByTopic,
    dispatchActionSelectedPhoto,
    selectedTopic: state.selectedTopic,
  };
};

export { useApplicationData };