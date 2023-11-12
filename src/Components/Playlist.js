export default function Playlist(props) {
    return (
      <div className="playlist">
        <h1>Playlist</h1>
        <p>
          {props.playlist.map((song, index) => (
            <span key={index}>
              {song}
              <button onClick={() => props.removePlaylist(song)}>Remove</button>
            </span>
          ))}
        </p>
      </div>
    );
  }