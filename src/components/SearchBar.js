import React from 'react';

const SearchBar = (props) => {
    return (
        <form className="search-bar" onSubmit={e => props.onClick(e)}>
            <input
                type="text"
                value={props.searchVal}
                onChange={e => props.onChange(e)}
                required/>
            <button>search</button>
        </form>
    );
};

export default SearchBar; 