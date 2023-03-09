import React, { useState, useRef } from "react";

function Song({ song, position }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const audio = useRef(new Audio(song.audioUrl));

  function togglePlay() {
    isPlaying ? audio.current.pause() : audio.current.play();
    setIsPlaying(!isPlaying);
  }

  return (
    <section className="song-card">
      <div className="chart-position">{position}</div>
      <img src={song.image} alt="album cover"></img>
      <article>
        {song.title.length > 30 ? <h4>{song.title}</h4> : <h2>{song.title}</h2>}
        <p>{song.artist}</p>
        <button onClick={togglePlay}>
          <span className="material-symbols-outlined">
            {isPlaying ? "pause" : "play_arrow"}
          </span>
        </button>
      </article>
    </section>
  );
}

export default Song;
