import React, { Component } from 'react';

class SearchBar extends Component {
  handleUpdate = e => {
    // debugger;
    this.props.search(e.target.value);
  };

  render() {
    return (
      <input
        type='text'
        className='form-control form-search'
        onChange={this.handleUpdate}
      />
    );
  }
}

export default SearchBar;
