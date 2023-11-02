import React from "react";

export default function SearchResults(props) {

    return (
        <div className="songs">
            <h2>Songs</h2>
            {props.song && (
                <ul>
                    {props.song.map((title, index) => (
                        <li key={index}>
                            <strong>{title}</strong>
                            {props.artist[index] && (
                                <h6>{props.artist[index]}</h6>
                            )}
                            {props.album[index] && (
                                <h6>{props.album[index]}</h6>
                            )}
                            <button onClick={() => props.handlePlaylist(title, props.artist[index], props.album[index])}>Add</button>
                            <button onClick={() => props.removePlaylist(title, props.artist[index], props.album[index])}>Remove</button>

                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}
