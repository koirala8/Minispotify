import React from "react";

export default function SearchResults(props) {
    return (
        <>
            <h2>Songs</h2>
            {props.song && (
                <ul>
                    {props.song.map((title, index) => (
                        <li key={index}>{title}</li>
                    ))}
                </ul>
            )}
        </>
    );
}