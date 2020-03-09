import React, { Component } from 'react';

class Gif extends Component {
  render() {
    const src = `https://media.giphy.com/media/${this.props.id}/giphy.gif`;
    return <img src={src} alt='Homer gif' className='gif' width='200px' />;
  }
}

export default Gif;
