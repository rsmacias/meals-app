import { useState } from "react";
import { useGlobalContext } from "../context";

const Search = () => {

    const {getMealsByName, getRandomMeal} = useGlobalContext();
    const [text, setText] = useState('');

    const handleChange = (event) => {
        setText(event.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('search for ...', text);
        getMealsByName(text);
    }

    const handleClick = (e) => {
        e.preventDefault();
        console.log('surprising me ...');
        getRandomMeal();
    }

    return (
        <header className="search-container">
            <form onSubmit={handleSubmit}>
                <input type="text" 
                       className="form-input" 
                       placeholder="type favorite meal"
                       onChange={handleChange}
                       value={text} />
                <button type="submit" className="btn">Search</button>
                <button type="button" 
                        className="btn btn-hipster"
                        onClick={handleClick}>
                    Surprise me!
                </button>
            </form>
        </header>
    )
}

export default Search;