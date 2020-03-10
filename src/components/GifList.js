import React, { Component } from 'react';
import Gif from './Gif';

const GifList = props => {
  return (
    <div className='gif-list'>
      {props.gifs.map(gif => (
        <Gif key={gif.id} id={gif.id} getSelectedGif={props.getSelectedGif} />
      ))}
    </div>
  );
};

export default GifList;
