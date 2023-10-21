<<<<<<< HEAD
export default function SearchResults(props){
    

    return (
        <>
        <h2>Songs</h2>
        {props.song && (
        <ul>
            {props.song.map((title, index) => (
            <li key={index}>{title}</li>
        ))}
        </ul>
    )}</>
    );
}
=======
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
>>>>>>> e7ce264e598cbb3e94e21f69983b42334e741fcc
