import React from "react";

export default function SearchBar(props) {
    return (
        <div className="header">
            <h1>Jamming</h1>
            <div className="search-box">
                <form onSubmit={props.handleClick}>
                    <input type="text" id="searchInput" value={props.value} onChange={props.handleChange} placeholder='Enter the name of singer here...' />
                    <button type="submit" className="search-button">Search</button>
                </form>
            </div>
        </div>
    );
}