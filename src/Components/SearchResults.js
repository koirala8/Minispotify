import React from "react";

export default function SearchResults(props) {

    return (
        <div className="songs">
            <h1>Songs</h1>
            <div className="songs-list">
                {props.song && (
                    <ul>
                        {props.song.map((title, index) => (
                            <li key={index}>
                                <div className="content-button">
                                    <span className="song-name">{title}</span>
                                
                                    <button onClick={() => props.handlePlaylist(title, props.artist[index], props.album[index])}>Add</button>
                                </div>
                                <div className="song-info">
                                    {props.artist[index] && (
                                        <span className="singer">{props.artist[index]}</span>
                                    )}
                                    {props.album[index] && (
                                        <span className="album">{props.album[index]}</span>
                                    )}
                                </div>

                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </div>
    );
}
