import React, { Component } from 'react';
import Gif from './Gif';

export class GifList extends Component {
  renderList = () => {
    return this.props.gifs.map(gif => <Gif key={gif.id} id={gif.id} />);
  };

  render() {
    return <div className='gif-list'>{this.renderList()}</div>;
  }
}

export default GifList;
