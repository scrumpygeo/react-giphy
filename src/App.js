import React, { Component } from 'react';
import SearchBar from './components/SearchBar';
import Gif from './components/Gif';
import GifList from './components/GifList';
import './App.scss';

class App extends Component {
  render() {
    const gifs = [{ id: 'I7p8K5EY9w9dC' }, { id: 'xU9TT471DTGJq' }];
    return (
      <div>
        <div className='left-scene'>
          <SearchBar />
          <div className='selected-gif'>
            <Gif id='I7p8K5EY9w9dC' />
          </div>
        </div>
        <div className='right-scene'>
          <GifList gifs={gifs} />
        </div>
      </div>
    );
  }
}

export default App;
