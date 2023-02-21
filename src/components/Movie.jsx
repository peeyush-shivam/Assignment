import React, { useState } from 'react';
import Modal from "./Modal";
import noImg from '../assets/no-img.jpg'

function Movie({ data }) {

  // Declare state for modal view
  const [modalView, setModalView] = useState(false)

  // Define event handler for click event
  const handleClick = () => {
    setModalView(!modalView)
  }

  // Define URL for image API
  const IMG_API = "https://image.tmdb.org/t/p/w1280";

  // Define function to set class for vote rating
  const setVoteClass = (vote) => {
    if (vote >= 8){
      return "green";
    }
    else if (vote >= 6){
      return "orange";
    }
    else{
      return "red";
    }
  };

  // Render Movie Card
  return (
    <div className="movie" onClick={handleClick}>
      <img src={data.poster_path ? IMG_API + data.poster_path : noImg } alt={data.title} height='375px' /> 
      <div className="movie-info">
        <h3>{data.title}</h3>
        <span className={`tag ${setVoteClass(data.vote_average)}`}>{data.vote_average.toFixed(1)}</span>
      </div>
      {modalView && <Modal onClick={handleClick} data={data}/>}
    </div>
  )
}

export default Movie
