import React, { Component } from 'react';
import SearchBar from './components/SearchBar';
import Gif from './components/Gif';
import GifList from './components/GifList';

import giphy from 'giphy-api';

import './App.scss';

const GIPHY_API_KEY = process.env.REACT_APP_GIPHY_TOKEN;

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      gifs: [],
      selectedGifId: 'I7p8K5EY9w9dC'
    };
  }

  // search method
  search = query => {
    // API call
    giphy({ apiKey: GIPHY_API_KEY, https: true }).search(
      {
        q: query,
        rating: 'g',
        limit: 10
      },
      (err, res) => {
        this.setState({
          gifs: res.data
        });
      }
    );
  };

  // get_selected_gif
  getSelectedGif = id => {
    this.setState({
      selectedGifId: id
    });
  };

  render() {
    return (
      <div>
        <div className='left-scene'>
          <SearchBar search={this.search} />
          <div className='selected-gif'>
            <Gif id={this.state.selectedGifId} />
          </div>
        </div>
        <div className='right-scene'>
          <GifList
            gifs={this.state.gifs}
            getSelectedGif={this.getSelectedGif}
          />
        </div>
      </div>
    );
  }
}

export default App;
