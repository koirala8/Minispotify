import React from "react";

<<<<<<< HEAD
export default function SearchBar(props)
{
  
    
    return (
        <>
        <h1>Jamming</h1>
        <form onSubmit={props.handleClick}>
            <label htmlFor="searchInput">Search</label>
            <input type="text" id="searchInput" value={props.value} onChange={props.handleChange} placeholder='Enter here...' />
            <button type="submit">Search</button>
        </form>
=======
export default function SearchBar(props) {
    return (
        <><h1>Jamming</h1>
            <form onSubmit={props.handleClick}>
                <label htmlFor="searchInput">Search</label>
                <input type="text" id="searchInput" value={props.value} onChange={props.handleChange} placeholder='Enter here...' />
                <button type="submit">Search</button>
            </form>
>>>>>>> e7ce264e598cbb3e94e21f69983b42334e741fcc
        </>
    );
}