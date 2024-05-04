import React, { useState } from 'react';

const MusicPlayer = ({ songs }) => {
  const [currentSong, setCurrentSong] = useState(0);

  const playSong = (index) => {
    setCurrentSong(index);
  };

  return (
    <div className="music-player">
      <h1>Music Player</h1>
      <button type="button" onClick={() => playSong((currentSong - 1 + songs.length) % songs.length)}>
        Previous
      </button>
      <button type="button" onClick={() => playSong((currentSong + 1) % songs.length)}>
        Next
      </button>
      <audio controls src={songs[currentSong].src}>
        Your browser does not support the audio element.
      </audio>
      <ul>
        {songs.map((song, index) => (
          <li key={index}>
            <button type="button" onClick={() => playSong(index)}>
              {song.title}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MusicPlayer;
