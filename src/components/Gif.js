import React, { Component } from 'react';

class Gif extends Component {
  handleSelection = e => {
    // console.log(this.props);
    if (this.props.getSelectedGif) {
      this.props.getSelectedGif(this.props.id);
    }
  };

  // don't render if gif not changed
  shouldComponentUpdate(nextProps, nextState) {
    return nextProps.id !== this.props.id;
  }

  render() {
    const src = `https://media.giphy.com/media/${this.props.id}/giphy.gif`;
    return (
      <img
        src={src}
        alt='gif'
        className='gif'
        width='200px'
        onClick={this.handleSelection}
      />
    );
  }
}

export default Gif;
