import React from "react";
import { useState } from "react";

export default function Playlist(props) {
    const [name, setName] = useState("");
    function handlePlaylist(event) {
        setName(event.value)
    }
    return (
        <>
            <input type="text" id="playlist" value={name} onChange={handlePlaylist} placeholder='Playlist Name' />
            <p>{`${props.playlist}`}</p></>
    );
}