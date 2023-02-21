import ReactDOM from 'react-dom';

const Modal = ({onClick, data}) => {

  const IMG_API = "https://image.tmdb.org/t/p/w1280";
  const backgroundImg = IMG_API + data.backdrop_path;

  // use ReactDOM.createPortal to render modal outside of its parent component
  return ReactDOM.createPortal(
    <div>
      {/* background-blur element to cover parent component while modal is open */}
      <div className="background-blur" onClick={onClick}></div>
      <div className="modal">
        <div className='overview'>
          <h1>Overview:</h1>
          {data.overview}
        </div> 
        <div className='otherData'>
          <div>
            Original Language: {data.original_language}
          </div> 
          <div>
            <p>Popularity: {Math.ceil(data.popularity)}</p>
          </div> 
          <div>
            Release Date: {data.release_date}
          </div> 
        </div>
      </div>
    </div>,
    // select target container for the portal
    document.querySelector('.modal-container')
  );
}

export default Modal;
