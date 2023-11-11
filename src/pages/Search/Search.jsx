import React from 'react'
import './Search.css'
function Search() {
    return (
        <>
            <div className='search_con'>
                <h2 className="text-center">SEARCH </h2>
                <p className="text-center">what do you interest about?</p>
                <div className="inp">
                    {" "}
                    <input type="text" placeholder="Enter your interest" />
                    <button className="footer_button">
                        <i className="fa-solid fa-magnifying-glass" />
                    </button>
                </div>
            </div>
        </>

    )
}

export default Search