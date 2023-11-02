import React from 'react';

import '../styles/PhotoList.scss';
import PhotoListItem from './PhotoListItem';

const photos = [
  {
    id: "1",

    location: {
      city: "Montreal",
      country: "Canada",
    },
    urls: {
      full: `${process.env.PUBLIC_URL}/Image-1-Full.jpg`,
      regular: `${process.env.PUBLIC_URL}/Image-1-Regular.jpg`,
    },
    user: {
      id: "1",
      username: "exampleuser",
      name: "Joe Example",
      profile: `${process.env.PUBLIC_URL}/profile-1.jpg`,
    },
  },
  {
    id: "2",

    location: {
      city: "Toronto",
      country: "Canada",
    },
    urls: {
      full: `${process.env.PUBLIC_URL}/Image-2-Full.jpg`,
      regular: `${process.env.PUBLIC_URL}/Image-2-Regular.jpg`,
    },
    user: {
      id: "2",
      username: "exampleuser",
      name: "Joe Example",
      profile: `${process.env.PUBLIC_URL}/profile-1.jpg`,
    },
  },
  {
    id: "3",
    location: {
      city: "Ottawa",
      country: "Canada",
    },
    urls: {
      full: `${process.env.PUBLIC_URL}/Image-3-Full.jpg`,
      regular: `${process.env.PUBLIC_URL}/Image-3-Regular.jpg`,
    },
    user: {
      id: "3",
      username: "exampleuser",
      name: "Joe Example",
      profile: `${process.env.PUBLIC_URL}/profile-1.jpg`,
    },
  },
];

const PhotoList = () => {

  return (
    <div className="photo-list">
      {photos.map((photo) => (
        <PhotoListItem key={photo.id} photo={photo} />
      ))}
    </div>
  );
};

export default PhotoList







    // <ul className="photo-list">
    //   {photos.map((photo) => (
    //     <li key={photo.id} className="photo-item">

    //       <div className="photo-location">
    //         <div className="city">{photo.location.city}</div>
    //         <div className="country">{photo.location.country}</div>
    //       </div>

    //       <img src={photo.urls.full} alt={`Full = ${photo.id}`}/>
    //       <img src={photo.urls.regular} alt={`Regular = ${photo.id}`}/>

    //       <div className="user-info">
    //         <div className="username">{photo.user.username}</div>
    //         <div className="name">{photo.user.name}</div>
    //         <img src={photo.user.profile} alt={`Profile = ${photo.id}`}/>
    //       </div>

    //     </li>
    //   ))}