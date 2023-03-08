import React, { useState, useRef } from "react";

function Song({ song, position }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const audio = useRef(new Audio(song.audioUrl));

  function play() {
    if (isPlaying) {
      audio.current.pause();
    } else {
      audio.current.play();
    }
    setIsPlaying(!isPlaying);
  }
  //   console.log(song);
  return (
    <section className="song-card">
      <div className="chart-position">{position}</div>
      <img src={song.image} alt="album cover"></img>
      <article>
        {song.title.length > 30 ? <h4>{song.title}</h4> : <h2>{song.title}</h2>}
        <p>{song.artist}</p>
        <button onClick={play}>
          {isPlaying ? (
            <span className="material-symbols-outlined">pause</span>
          ) : (
            <span className="material-symbols-outlined">play_arrow</span>
          )}
        </button>
      </article>
    </section>
  );
}

export default Song;
