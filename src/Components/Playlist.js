
export default function Playlist(props){

  return (
  <div className="playlist">
      <h1>Playlist</h1>
      {props.playlist.map((playlist_song, index) => (
          <>
          <div className="my_song">
              <span>{playlist_song}</span>
              <button onClick={() => props.removePlaylist(playlist_song)}>Remove</button>
          </div>
          </>
      ))}
  </div>
  );
}