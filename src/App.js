import React, { Component } from 'react';
import SearchBar from './components/SearchBar';
import Gif from './components/Gif';
import './App.scss';

class App extends Component {
  render() {
    return (
      <div>
        <div className='left-scene'>
          <SearchBar />
          <div className='selected-gif'>
            <Gif id='I7p8K5EY9w9dC' />
          </div>
        </div>
        <div className='right-scene'></div>
      </div>
    );
  }
}

export default App;
