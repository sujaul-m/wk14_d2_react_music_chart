import React from 'react';
import SongList from '../components/SongList.js';

class SongContainer extends React.Component {
  constructor(props){
  super(props);
    this.state = {
      allSongs: [],
      fetchItunesAPI: []
    };

  }

  componentDidMount() {
    const url = 'https://itunes.apple.com/gb/rss/topsongs/limit=20/json';
    fetch(url)
    .then(res => res.json())
    .then(result => {
      this.setState({fetchItunesAPI: result})
      this.setState({allSongs: this.state.fetchItunesAPI.feed.entry})
  })
    .catch(err => console.error);
  }

  render() {
    const list = [];
    let index=0;

    for (let song of this.state.allSongs) {
      index++;
      list.push(<SongList song={song} index={index} image={song["im:image"][2]["label"]}/>)
    };

    return (
      <div>
        {list}
      </div>
    )
  }
}

export default SongContainer;
