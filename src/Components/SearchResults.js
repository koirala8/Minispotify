import React from "react";

export default function SearchResults(props) {
    return (
        <>
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
                        </li>
                    ))}
                </ul>
            )}
        </>
    );
}
