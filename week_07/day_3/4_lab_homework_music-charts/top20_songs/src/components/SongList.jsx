import Song from "./Song";

function SongList({ chart }) {
  console.log(chart);

  const formattedSongs = chart.map((song) => ({
    id: song.id.attributes["im:id"],
    title: song["im:name"].label,
    artist: song["im:artist"].label,
    album: song["im:collection"]["im:name"].label,
    image: song["im:image"][2].label,
    audioUrl: song.link[1].attributes.href,
  }));

  const songs = formattedSongs.map((song, index) => (
    <Song key={song.id} song={song} position={index + 1} />
  ));
  return <main>{songs}</main>;
}

export default SongList;
