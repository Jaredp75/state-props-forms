import React from 'react';

const PlayListItem=({  song }) => (
  <div className="single-playlist" key={song._id}>
    <h2>{song.songTitle}</h2>
    <h4>{song.songArtist}</h4>
    <h4>{song.songNotes}</h4>
  </div>
);



export default PlayListItem;
