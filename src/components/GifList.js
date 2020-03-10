import React from 'react';
import Gif from './Gif';

const GifList = ({ gifs, getSelectedGif }) => {
  return (
    <div className='gif-list'>
      {gifs.map(({ id }) => (
        <Gif key={id} id={id} getSelectedGif={getSelectedGif} />
      ))}
    </div>
  );
};

export default GifList;
