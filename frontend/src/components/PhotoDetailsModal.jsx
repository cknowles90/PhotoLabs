import React from 'react';
import '../styles/PhotoDetailsModal.scss';
import closeSymbol from '../assets/closeSymbol.svg';

const PhotoDetailsModal = ({ onCloseModal, selectedPhoto }) => {
  console.log('Selected Photo Data', selectedPhoto);

  return (
    <div className="photo-details-modal">
      <button className="photo-details-modal__close-button" onClick={onCloseModal}>
        <img src={closeSymbol} alt="close symbol" />
      </button>
    </div>
  )
};

export default PhotoDetailsModal;