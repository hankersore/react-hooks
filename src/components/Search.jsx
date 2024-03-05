import { useState, useEffect } from "react";
import useDebounce from "./useDebounce";

const Search = () => {
    const [searchItem, setSearchItem] = useState('');
    const debouncedSearchItem = useDebounce(searchItem, 500);

    const handleChange = (e) => {
        setSearchItem(e.target.value);
    }

    useEffect(() => {
        console.log('DEBOUNCE SEARCH', searchItem);
    }, [debouncedSearchItem])

    return (
        <div className="card">
            <h1>useDebounce()</h1>
            <input type="text" 
            value={searchItem}
            onChange={handleChange}
            placeholder="Search..."/>
            <p>* check console for results</p>
        </div>
    )
}

export default Search;