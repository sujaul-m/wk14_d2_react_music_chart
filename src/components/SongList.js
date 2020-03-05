import React from 'react';

const SongList = (props) => {
return (
  <div>
    <h1>{props.index}</h1>
    <p>{props.song.title.label}</p>
    <img src={props.image} alt=""/>
  </div>
)
}

export default SongList;
