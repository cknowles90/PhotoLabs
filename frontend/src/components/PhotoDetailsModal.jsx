import React from 'react';
import '../styles/PhotoDetailsModal.scss';

const PhotoDetailsModal = ({ photo, onCloseModal }) => {
  return (
    <div className="photo-details-modal">
      <div className="modal-content">
        <img src={photo.url} alt={photo.title} />
        <button onClick={onCloseModal}>Close</button>
      </div>
    </div>
  )
  
};

export default PhotoDetailsModal;