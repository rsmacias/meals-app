import { useState } from "react";
import { useGlobalContext } from "../context";

const Search = () => {

    const context = useGlobalContext();

    return (
        <header className="search-container">
            <form action="">
                <input type="text" className="form-input" placeholder="type favorite meal" />
                <button type="submit" className="btn">Search</button>
                <button type="button" className="btn btn-hipster">Surprise me!</button>
            </form>
        </header>
    )
}

export default Search;